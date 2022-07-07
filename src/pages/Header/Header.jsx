import React from "react";
import style from "./Header.module.scss";

function Header() {
  return (
    <>
      <header>
        <div className={style.logo}>
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
        <div className={style.navbar}>
          <ul>
            <li>
              <a href="#">Our Plan</a>
            </li>
            <li>
              <a href="#">Employers</a>
            </li>
            <li>
              <a href="#">Brokers</a>
            </li>
            <li>
              <a href="#">Members</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <button>Request a demo</button>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </div>
      </header>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.title}>
            <h1>
              Give your team peace of mind with supplemental health insurance
              from Brella.
            </h1>
            <p>I'm wondering...</p>
            <div className={style.input}>
              <input type="text" placeholder="how Brella's plan works" />
              <div>
                <span>Find out</span>
              </div>
            </div>
          </div>

          <div className={style.icons}>
            <div>
              <div>
                <img
                  src={require("../../assets/images/icons/umbrella.png")}
                  alt=""
                />
              </div>

              <div>
                <h5>More coverage</h5>
                <br />
                <h6>
                  Brella covers 13,000+ injuries and illnesses from concussions
                  to cancer.
                </h6>
              </div>
            </div>

            <div>
              <div>
                <img
                  src={require("../../assets/images/icons/check.png")}
                  alt=""
                />
              </div>

              <div>
                <h5>Less hassle</h5>
                <br />
                <h6>
                  One easy-to-manage plan with paperless install and online
                  admin tools.
                </h6>
              </div>
            </div>

            <div>
              <div>
                <img
                  src={require("../../assets/images/icons/wallet.png")}
                  alt=""
                />
              </div>

              <div>
                <h5>Faster benefits</h5>
                <br />
                <h6>
                  Brella pays claims in hours–not weeks so your people can rest
                  easy.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
