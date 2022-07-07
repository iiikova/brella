import React from "react";
import style from "./Frame_4.module.scss";

function Frame_4() {
  return (
    <div className={style.container}>
      <div className={style.wrap__one}>
        <div>
          <h6>one plan, more coverage</h6>
          <h1>No one can predict which health issues might come their way.</h1>
          <h4>
            Our broad supplemental coverage gets rid of the guesswork and puts
            cash in your team’s pockets for most conditions that require urgent
            medical attention.
          </h4>
        </div>
        <div>
          <img
            src={require("../../assets/images/peopleOnSofa.png")}
            alt="peopleOnSofa"
          />
        </div>
      </div>
      <div className={style.wrap__two}>
        <div>
          <h1>5K</h1>
          <h6>
            covered injuries and illnesses from fractures and appendicitis to
            cancer
          </h6>
        </div>
        <div>
          <h1>1X</h1>
          <h6>
            more covered conditions than Accident and Critical Illness
            plans—combined
          </h6>
        </div>
        <div>
          <h1>40%</h1>
          <h6>
            plans are 100% guaranteed issue. No medical underwriting required
          </h6>
        </div>
        <div>
          <h1>0</h1>
          <h6>Zero limitations or exclusions for pre-existing conditions</h6>
        </div>
      </div>
      <div className={style.wrap__three}>
        <div className={style.wrap__three__img}>
          <img src={require("../../assets/images/phone.png")} alt="phone" />
        </div>
        <div>
          <h6>a better claims experience</h6>
          <h1>Give your people a plan that pays in hours—not weeks.</h1>
          <h4>
            Your team can’t wait for peace of mind. Brella pays on diagnosis, so
            members can file a claim sooner and get paid faster via our Member
            Portal or mobile app.
          </h4>
          <h3>Play Video</h3>
        </div>
      </div>
    </div>
  );
}

export default Frame_4;
