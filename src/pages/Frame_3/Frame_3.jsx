import React from "react";
import style from "./Frame_3.module.scss";

function Frame_3() {
  return (
    <div className={style.wrap}>
      {/* <div className={style.container}> */}
      <div className={style.wrapper}>
        <div className={style.wrap__left}>
          <h6>brella brings</h6>
          <ul>
            <li>Customizable benefits</li>
            <li>Paperless install & admin</li>
            <li>Effortless enrollment</li>
            <li>Easy claims experience</li>
            <li>Fast benefit payouts</li>
            <li>Concierge support</li>
          </ul>
        </div>
        <div className={style.wrap__right}>
          <h3>
            Every Brella plan comes with a benefit for Moderate, Severe, and
            Catastrophic conditions. Employees can select the payout amounts
            that fit their needs and their budget.
          </h3>
          <br />
          <h3>
            Employers can fund part or all of the premiums—or offer Brella as a
            voluntary benefit. The choice is up to you.
          </h3>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Frame_3;
