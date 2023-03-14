import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Kit.module.css";
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
import { useNavigate } from "react-router-dom";

export function Kit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [panelNumber, setPanelNumber] = useState();

  const [panelBrand, setPanelBrand] = useState("");
  const [panel, setPanel] = useState(true);
  const [number, setNumber] = useState();
  const [inverter, setInverter] = useState(true);
  const [inverterType, setInverterType] = useState();
  const [inverterBrand, setInverterBrand] = useState();
  const [customize, setCustomize] = useState(false);
  const [receipt, setReceipt] = useState();
  const [lastToggle, setLastToggle] = useState(false);
  const [string, setString] = useState(false);
  const [normal, setNormal] = useState(styles.choice);
  const [normalChosen, setNormalChosen] = useState(styles.choiceChosen);
  const [micro, setMicro] = useState(false);
  const [solarEdge, setSolarEdge] = useState(false);
  const [fronius, setFronius] = useState(false);
  const [Huwaei, setHuwaei] = useState(false);

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
      <div className={styles.kwTitle}>Your {id} Kw system</div>

      <div className={styles.split}>
        <div className={styles.iconsCont2}>
          {panel ? (
            <div className={styles.wordsWicon}>
              <div className={styles.smallTitle}>
                What panel brand do you want?
              </div>

              <div className={styles.somethingContainer}>
                <div className={styles.reccomended}>
                  <div
                    onClick={() => {
                      setPanelBrand("Silfab");
                      setPanel(false);
                    }}
                    className={styles.choice}
                  >
                    Silfab
                  </div>
                </div>

                <div
                  onClick={() => {
                    setPanelBrand("Sunpower");
                    setPanel(false);
                  }}
                  className={styles.choice}
                >
                  Sunpower
                </div>
                <div
                  onClick={() => {
                    setPanelBrand("LG");
                    setPanel(false);
                  }}
                  className={styles.choice}
                >
                  LG
                </div>
                <div
                  onClick={() => {
                    setPanelBrand("Q Cell");
                    setPanel(false);
                  }}
                  className={styles.choice}
                >
                  Q Cell
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.wordsWicon}>
              {inverter ? (
                <div className={styles.somethingContainerColumn}>
                  <div className={styles.smallTitle}>How many panels?</div>
                  <div className={styles.panelP}>
                    <input
                      onChange={(e) => {
                        setPanelNumber(e.target.value);
                        console.log(panelNumber, "this is panel number");
                      }}
                      className={styles.panelInput}
                      type="text"
                      placeholder={getPanels()}
                    />{" "}
                    panels will produce you{" "}
                    <div className={styles.margin}>{realPercent(number)}</div>
                    of your yearly usage
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setPanel(true);
                      }}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setInverter(false);
                        setCustomize(true);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {customize ? (
                    <div className={styles.somethingContainerThird}>
                      <div className={styles.other}>
                        <div className={styles.title}>Inverter Type</div>
                        <div className={styles.center}>
                          <div
                            onClick={() => {
                              setInverterType("String");
                              setString(!string);
                            }}
                            className={string ? normalChosen : normal}
                          >
                            String
                          </div>
                          <div
                            onClick={() => {
                              setMicro(!micro);
                            }}
                            className={micro ? normalChosen : normal}
                          >
                            Micro
                          </div>
                        </div>
                      </div>
                      <div className={styles.other}>
                        <div className={styles.title}>Brand</div>
                        <div className={styles.center}>
                          <div
                            onClick={() => {
                              setInverterBrand("SolarEdge");
                              setSolarEdge(!solarEdge);
                            }}
                            className={solarEdge ? normalChosen : normal}
                          >
                            SolarEdge
                          </div>
                          <div
                            onClick={() => {
                              setInverterBrand("Fronius");
                              setFronius(!fronius);
                            }}
                            className={fronius ? normalChosen : normal}
                          >
                            Fronius
                          </div>
                          <div
                            onClick={() => {
                              setInverterBrand("Huwaei");
                              setHuwaei(!Huwaei);
                            }}
                            className={Huwaei ? normalChosen : normal}
                          >
                            Huwaei
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className={styles.button}
                          onClick={() => {
                            setInverter(true);
                          }}
                        >
                          Back
                        </button>
                        <button
                          className={styles.button}
                          onClick={() => {
                            setCustomize(false);
                            setReceipt(true);
                            Navigate("/checkout");
                          }}
                        >
                          Create Kit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.full}>
                      {receipt ? (
                        <div className={styles.somethingContainerThird}>
                          <div className={styles.receiptOther}>
                            <div className={styles.title}>System overview</div>
                            <div className={styles.receiptTitle}>
                              All included
                            </div>
                            <div className={styles.labelContainer}>
                              <div className={styles.rowContainer}>
                                <div className={styles.receiptStuff}>
                                  Panel Type:
                                </div>
                                <div className={styles.string}>
                                  {panelBrand}
                                </div>
                              </div>
                              <div className={styles.rowContainer}>
                                <div className={styles.receiptStuff}>
                                  Panel Amount:
                                </div>
                                <div className={styles.string}>
                                  {panelNumber}
                                </div>
                              </div>
                              <div className={styles.rowContainer}>
                                <div className={styles.receiptStuff}>
                                  Inverter Type:
                                </div>
                                <div className={styles.string}>
                                  {inverterType}
                                </div>
                              </div>
                              <div className={styles.rowContainer}>
                                <div className={styles.receiptStuff}>
                                  Inverter Brand:
                                </div>
                                <div className={styles.string}>
                                  {inverterBrand}
                                </div>
                              </div>
                            </div>

                            {lastToggle ? (
                              <div className={styles.leftContainer}>
                                <div className={styles.rowContainerBottom}>
                                  <div className={styles.receiptStuff}>
                                    Wiring length
                                  </div>
                                  <div className={styles.inputContainer}>
                                    <input
                                      className={styles.input}
                                      type="text"
                                      placeholder="10 ft"
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <>
                                <div className={styles.receiptSmallStuff}>
                                  All racking and wiring needed for a {id} KW
                                  system
                                </div>
                              </>
                            )}
                          </div>

                          <div>
                            <button
                              className={styles.button}
                              onClick={() => {
                                setInverter(true);
                              }}
                            >
                              Back
                            </button>
                            <button
                              className={styles.button}
                              onClick={() => {
                                navigate(`/checkout/${id}`);
                              }}
                            >
                              Next
                            </button>

                            <button
                              onClick={() => {
                                setLastToggle(!lastToggle);
                              }}
                              className={styles.button}
                            >
                              Customize More
                            </button>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
