import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main hero-centered">
          <div className="greeting-text-div">
            <div>
              <div className="greeting-intro">
                <span className="greeting-intro-accent">Hey there!, I'm–</span>
              </div>
              <h1 className="greeting-name">
                {greeting.title}
                <span className="greeting-dot">.</span>
              </h1>
              <p className="greeting-role">
                <b>Software Engineer.</b> <span className="greeting-subtitle">A self-taught developer with an interest in Computer Science.</span>
              </p>
              <div className="greeting-status">
                <span role="img" aria-label="rocket">🚀</span> Currently specializing in Frontend (React / Next.js)<br />
                <span role="img" aria-label="lightning">⚡</span> Frontend Engineer at <span className="greeting-link">Pabbl</span>
              </div>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              src={require("../../assets/images/valentin.jpeg")}
              alt="Valentin Wach"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
