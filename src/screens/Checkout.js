import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./checkout.module.css";
import { Navigate, useLocation, useParams } from "react-router-dom";
import joe from "../media/joe.png";
import solar from "../media/solarrrr.png";
import wrench from "../media/wrench.png";
import plug from "../media/plug.png";
import inverter from "../media/inverter.jpg";
import clipboard from "../media/clipboard.png";
import truck from "../media/truck.png";
import { CheckMark } from "../media/CheckMark";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import kitSolar from "../media/kitSolar.png";
import { flushSync } from "react-dom";

export function Checkout() {
  const { id } = useParams();
  const [panelNumber, setPanelNumber] = useState();

  const [panelBrand, setPanelBrand] = useState("");
  const [panel, setPanel] = useState(true);
  const [number, setNumber] = useState();
  const [final, setFinal] = useState(true);
  const [cash, setCash] = useState(true);
  const [finance, setFinance] = useState(true);

  const handleSubmit = async () => {
    try {
      let newPackage = await axios.post("./api/newPackage", {
        panels: panelNumber,
        panelType: panelNumber,
        inverter: "SolarEdge",
        wiring: 10,
        racking: "normal",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getPanels = () => {
    return Math.ceil((id * 1000) / 400);
  };
  const getOffset = () => {
    setNumber((panelNumber * 400) / localStorage.getItem("totalUsage"));
  };

  useEffect(() => {
    setPanelNumber(Math.ceil((id * 1000) / 400));
  }, []);

  useEffect(() => {
    getOffset();
    if (panelNumber === "") {
      setNumber(setPanelNumber(Math.ceil((id * 1000) / 400)));
    }
  }, [panelNumber]);

  const realPercent = (number) => {
    if (number === 1) {
      return "100%";
    } else {
      return Math.ceil(number * 100) + "%";
    }
  };

  return (
    <div className={styles.main}>
      <Header />
      {final ? (
        <>
          <div className={styles.kwTitle}> {id} Kw system</div>
          <div className={styles.checkoutContainer}>
            <div
              onClick={() => {
                setFinal(false);
                setCash(true);
              }}
              className={styles.checkoutItem}
            >
              Pay Cash
            </div>
            <div className={styles.line}></div>
            <div
              onClick={() => {
                setFinal(false);
                setFinance(false);
                setCash(false);
              }}
              className={styles.checkoutItem}
            >
              Finance
            </div>
          </div>
        </>
      ) : (
        <>
          {cash ? (
            <div className={styles.centerScreen}>
              <div className={styles.cashTitle}>
                Join our queue, we will have a representative reach out to help
                you!
              </div>
              <div className={styles.column}>
                <div className={styles.large}>Phone Number</div>
                <div>
                  <form
                    action=""
                    method="post"
                    id="cusCreate"
                    autocomplete="off"
                  > 
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="000 - 000 - 0000"
                      pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                      maxlength="12"
                      title="Ten digits code"
                      required
                    />
                    <label></label>
                    <input
                      onClick={() => {
                        setCash(false);
                      }}
                      className={styles.button}
                      type="submit"
                      value="Submit"
                    />{" "}
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <>
              {finance ? (
                <div className={styles.centerScreen}>
                  <div className={styles.cashTitle}>
                    You are next in the queue for your {id} KW system!
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.cashTitle}>
                    We are partnered with lots of great finance companies
                    catered towards solar buyers. Hop in our queue and we can
                    help walk you through that process!
                  </div>
                  <div className={styles.column}>
                    <div className={styles.large}>Phone Number</div>
                    <div>
                      <form
                        action=""
                        method="post"
                        id="cusCreate"
                        autocomplete="off"
                      >
                        <input
                          type="tel"
                          name="telphone"
                          placeholder="000 - 000 - 0000"
                          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                          maxlength="12"
                          title="Ten digits code"
                          required
                        />
                        <label></label>
                        <input
                          onClick={() => {
                            setFinance(true);
                          }}
                          className={styles.button}
                          type="submit"
                          value="Submit"
                        />{" "}
                      </form>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}

      <div className={styles.split}></div>
    </div>
  );
}
