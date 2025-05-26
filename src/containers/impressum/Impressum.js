import React, { useContext } from "react";
import "./Impressum.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Impressum() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="impressum">
        <div className="impressum-main-div">
          <div className="impressum-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading impressum-heading"
                  : "heading impressum-heading"
              }
            >
              Impressum
            </h1>
          </div>
          <div className="impressum-content">
            <div className={isDark ? "dark-mode impressum-card" : "impressum-card"}>
              <h2 className={isDark ? "dark-mode card-title" : "card-title"}>
                Angaben gemäß § 5 TMG
              </h2>
              <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                Valentin Wach<br />
                Theresienstraße 27<br />
                80333 München
              </p>

              <h2 className={isDark ? "dark-mode card-title" : "card-title"}>
                Kontakt
              </h2>
              <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                E-Mail: contact@vwach.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
} 