import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import photo from "../media/contactphoto.jpg";
import Header from "../components/Header";
import { Faq } from "../components/Faq";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Calculator(props) {
  const [firstSection, setFirstSection] = useState(true);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);
  const [kwPrice, setkwPrice] = useState(false);
  const [totalKwUsed, setTotalKwUsed] = useState();
  const [monthlyAverage, setMonthlyAverage] = useState(0);
  const [cost, setCost] = useState(0);
  const [installCost, setInstallCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [systemSize, setSystemSize] = useState(0);
  const [discounted, setDiscounted] = useState(false);
  const navigate = useNavigate();

  const getSystemNeeded = () => {
    let number = (monthlyAverage / kwPrice) * 12;
    setTotalKwUsed(number);
    let largeRounded = number / 1000;
    let rounded = largeRounded.toFixed(1);
    setSystemSize(rounded);
  };
  const getCost = () => {
    const cost = systemSize * 1700;

    setCost(cost);

    let formattedCost = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setInstallCost(formattedCost);
  };

  const findSavings = () => {
    let counter = 0;
    let average = parseInt(monthlyAverage);
    for (let i = 0; i < 301; i++) {
      counter = counter + average
    }
    let savings = counter - cost;
    let realSavings = savings.toFixed(2);
    setSavings(realSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  useEffect(() => {
    getCost();
  }, [systemSize]);
  useEffect(() => {
    localStorage.setItem(`totalUsage`, `${totalKwUsed}`);
  }, [totalKwUsed]);
  return (
    <div className={styles.overlay}>
      <div className={styles.backgroundPhoto}>
        {/* <Header /> */}
        <div className={styles.main}>
          <div className={styles.calcTitleContainer}>
            <div className={styles.calcTitle}>Solar Panel Cost Calculator</div>
          </div>
          <div className={styles.calcParagraphContainer}>
            <div className={styles.calcParagraph}>
              How much do solar panels cost? Our solar calculator takes a few
              key pieces of information (your location and current energy
              consumption) and estimates what size system you might need to zero
              out your electric bill.
            </div>
          </div>
          <div className={styles.mainContainer}>
            {firstSection && (
              <>
                <div className={styles.calcQuiz}>
                  <div className={styles.quizTitle}>
                    How much do you pay a month on average for electricity?
                  </div>
                  <div>
                    <div className={styles.quizInputContainer}>
                      <div className={styles.row}>
                        <span className={styles.span}>$</span>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Monthly Average"
                          onChange={(event) => {
                            setMonthlyAverage(event.target.value);
                          }}
                        />
                      </div>
                      <div className={styles.row}>
                        <span className={styles.span}>¢</span>
                        <input
                          className={styles.input}
                          type="text"
                          name=""
                          id=""
                          placeholder="kwh price"
                          onChange={(event) => {
                            setkwPrice(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <button
                      className={styles.button}
                      onClick={() => {
                        Promise.all([
                          setFirstSection(false),
                          getSystemNeeded(),

                          findSavings(),
                        ]).then(setThirdSection(true));
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
            {thirdSection && (
              <>
                <div className={styles.statsContainer}>
                  <div className={styles.statNumberContainer}>
                    <div>
                      <div className={styles.costTitle}>Install Cost</div>
                      <div className={styles.costAnswer}>{installCost}</div>
                    </div>
                    <div>
                      <div className={styles.costTitle}>System Size</div>
                      <div className={styles.costAnswer}>{systemSize}</div>
                    </div>
                    <div>
                      <div className={styles.costTitle}>25 Year Savings</div>
                      <div className={styles.costAnswer}>{savings}</div>
                    </div>
                  </div>

                  <div classname={styles.buttonContainer}>
                    <button
                      className={styles.button}
                      onClick={() => {
                        Promise.all([setFirstSection(true)]).then(
                          setThirdSection(false)
                        );
                      }}
                    >
                      back baby
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => {
                        navigate(`/kit/${systemSize}`);
                      }}
                    >
                      See Package
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div className={styles.solarFAQ}>
        <div>
          <div className={styles.questionsTitle}>
            Frequently Asked Questions on DIY solar
          </div>
        </div>
        <div className={styles.actualFaq}>
          <div className={styles.faqLeft}>
            <div className={styles.question}>
              <Faq
                answer={
                  "Solar energy cost has plummeted in the past decade. The average cost of solar panels is less than half what it was ten years ago."
                }
                question={"How much do solar panels cost?"}
              />
            </div>
            <div className={styles.question}>
              <Faq
                answer={
                  "That’s why you’re here! Our solar power calculator takes the information you provide about your energy usage patterns and returns our best guess about how much solar energy you might need to generate."
                }
                question={"What size solar system do I need?"}
              />
            </div>
            <div className={styles.question}>
              <Faq
                answer={
                  "When you install a solar power system, the federal government rewards you with a tax credit for investing in solar energy."
                }
                question={"How Does the Federal Tax Credit Work?"}
              />
            </div>
          </div>
          <div className={styles.faqRight}>
            <div className={styles.question}>
              <Faq
                answer={
                  "Solar panel installation cost varies by provider. A turnkey solution will charge 100-200% the cost of equipment to perform the installation."
                }
                question={"How much does it cost to install solar panels?"}
              />
            </div>
            <div className={styles.question}>
              <Faq
                answer={
                  "It usually is. Between the tax incentives, like the federal solar tax credit and the reduction of your energy bill, you tend to earn more money over the life of the system than you spent on it up front."
                }
                question={"Is solar energy a sound investment?"}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
