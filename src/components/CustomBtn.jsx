import React from "react";
import styles from "./CustomBtn.module.css";

//assets
import forwardBtnIcon from "../assets/images/forward.png";
import backwardBtnIcon from "../assets/images/back.png";

const CustomBtn = ({ slider }) => {
  return (
    <div>
      <button onClick={() => slider.current.slickPrev()} className={styles.btn}>
        <img src={backwardBtnIcon} />
      </button>
      <button onClick={() => slider.current.slickNext()} className={styles.btn}>
        <img src={forwardBtnIcon} />
      </button>
    </div>
  );
};

export default CustomBtn;
