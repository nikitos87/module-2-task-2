import { useState } from "react";
import styles from "./Recipie.module.css";

const Recipie = ({ data }) => {
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  // И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
  let isFirstStep = activeIndex === 0;
  let isLastStep = activeIndex === steps.length - 1;

  const clickBack = () => {
    setActiveIndex((curr) => {
      const res = (curr - 1 + steps.length) % steps.length;
      return res;
    });
  };

  const clickForward = () => {
    setActiveIndex((curr) => {
      const res = (curr + 1) % steps.length;
      return res;
    });
  };

  const reset = () => {
    setActiveIndex(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>
            {steps.map((step, idx) => {
              return (
                <li
                  key={step.id}
                  className={
                    styles["steps-item"] +
                    " " +
                    (activeIndex === idx ? styles["active"] : "") +
                    " " +
                    (activeIndex < idx + 1 ? "" : styles["done"])
                  }
                  onClick={() => setActiveIndex(idx)}
                >
                  <button className={styles["steps-item-button"]}>
                    {idx + 1}
                  </button>
                  {step.title}
                </li>
              );
            })}
          </ul>
          <div className={styles["buttons-container"]}>
            <button
              className={styles.button}
              onClick={clickBack}
              disabled={isFirstStep}
            >
              Назад
            </button>
            <button className={styles.button} onClick={clickForward}>
              {activeIndex < steps.length - 1 ? "Далее" : "Начать сначала"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipie;
