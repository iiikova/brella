import React from "react";
import style from "./Frame_2.module.scss";

function Frame_2() {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <div className={style.wrappper}>
          <div className={style.info}>
            <h6>Why Brella?</h6>
            <h1>
              Today, any health insurance deductible can feel like a high
              deductible.
            </h1>
            <h4>
              Brella's supplemental health plan enhances your health benefit
              strategy to ensure that health hardships don't become financial
              burdens.
            </h4>
            <h5>See our plan</h5>
          </div>

          <div className={style.static}>
            <div className={style.static__left}>
              <h1>60%</h1>
              <h6>
                of Americans would have to borrow to cover an unexpected $1000
                expense
              </h6>
            </div>
            <div className={style.static__right}>
              <div className={style.static__right__small}>
                <h6>$1,644</h6>
                <span></span>
                <h6>Deductible</h6>
              </div>
              <div className={style.static__right__big}>
                <h6>$4,039</h6>
                <span></span>
                <h6>Annual Maxs</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame_2;
