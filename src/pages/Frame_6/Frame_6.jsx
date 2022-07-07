import React from "react";
import style from "./Frame_6.module.scss";

function Frame_6() {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <h1>Proudly backed by</h1>
        <div className={style.slider}>
          <img src={require("../../assets/images/brands.png")} alt="oldman" />
        </div>
      </div>
    </div>
  );
}

export default Frame_6;
