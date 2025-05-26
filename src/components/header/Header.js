import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  educationInfo, bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;

  // Menü schließt nach Klick auf Link
  const handleMenuClick = () => {
    const menuCheckbox = document.getElementById('menu-btn');
    if (menuCheckbox && menuCheckbox.checked) {
      menuCheckbox.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="vw-logo">VW</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewEducation && (
            <li>
              <a href="#education" onClick={handleMenuClick}>Education</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills" onClick={handleMenuClick}>Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={handleMenuClick}>Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={handleMenuClick}> Projects</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={handleMenuClick}>Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#programs" onClick={handleMenuClick}>Programs</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={handleMenuClick}>Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={handleMenuClick}>Talks</a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
