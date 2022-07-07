import React from "react";
import style from "./Frame_8.module.scss";

function Frame_8() {
  return (
    <div className={style.wrap}>
      <div>
        <img src={require("../../assets/images/old-man.png")} alt="oldman" />
      </div>
      <div className={style.wrap__content}>
        <h1>Ready to explore Brella’s supplemental health solution?</h1>
        <h1>Let’s talk.</h1>
        <button>Get in touch</button>
      </div>
    </div>
  );
}

export default Frame_8;
