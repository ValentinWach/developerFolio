import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";

export default function Greeting() {
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
              </h1>
              <p className="greeting-role">
                <b>Software Engineer.</b> <span className="greeting-subtitle">Passionate about exploring new technologies.</span>
              </p>

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
