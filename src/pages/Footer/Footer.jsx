import React from "react";
import style from "./Footer.module.scss";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <div className={style.wrap__grid}>
          <div>
            <img
              src={require("../../assets/images/logo_white.png")}
              alt="brela logo"
            />
          </div>
          <div>
            <ul>
              <li>Join Brella</li>
              <li>Our Plan</li>
              <li>Employers</li>
              <li>Brokers</li>
              <li>Members</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h1>Get the latest</h1>
            <h1>
              Sign up to receive benefits news and insights in your inbox once a
              month.
            </h1>
            <div className={style.input}>
              <input type="text" placeholder="Email*" />
              <button>
                <BsArrowRight />
              </button>
            </div>
            <div className={style.social}>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
        <div className={style.wrap__text}></div>
        <div>
          <h1>
            Brella is a limited benefit policy; it is not a substitute for
            health insurance. The information provided on this website is
            illustrative only. A complete description of benefits, limitations,
            and exclusions are provided in your certificate of Insurance and
            applicable Riders. For a summary of limitations and exclusions, see
            our FAQ. Payout values listed do not guarantee an amount to be paid
            for listed conditions. Product not available in all states. All
            coverage is subject to the terms and conditions of the master group
            policy.
          </h1>
          <br />
          <h1>
            Brella is underwritten by Greenhouse Life Insurance Company (NAIC
            80055). Form No. PFSB11-TX
          </h1>
          <br />
          <h1>
            Reach us by mail at 2093 Philadelphia Pike #2496, Claymont, DE 19703
            and by phone at (844) 987-1070
          </h1>
        </div>
        <div className={style.wrap__terms}>
          <span>© 2022 Ikova Dev. All Rights Reserved.</span>
          <span>Privacy | Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
