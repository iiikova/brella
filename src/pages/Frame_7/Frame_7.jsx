import React from "react";
import style from "./Frame_7.module.scss";

function Frame_7() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div>
          <img src={require("../../assets/images/card1.png")} alt="card" />
          <p>Podcast</p>
          <h6>
            Better Voluntary Benefits with NFP Voluntary Benefits Practice
            Leader, Kim Heald
          </h6>
        </div>
        <div>
          {" "}
          <img src={require("../../assets/images/card2.png")} alt="card" />
          <p>Insurance Innovation</p>
          <h6>How to Design Simpler Insurance Benefits</h6>
        </div>
        <div>
          {" "}
          <img src={require("../../assets/images/card3.png")} alt="card" />
          <p>Benefits Strategy</p>
          <h6>Executive Benefits Outlook with Dan Aceti</h6>
        </div>
      </div>
    </div>
  );
}

export default Frame_7;
