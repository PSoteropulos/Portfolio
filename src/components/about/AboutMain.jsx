import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="psot_portfolio_about">
          <div className="psot_portfolio_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>

          <Intro />
          <div className="psot_portfolio_short_info">
            <PersonalInfo />
          </div>

          <div className="psot_portfolio_button" data-position="left">
            <a href="assets/img/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      <div className="psot_portfolio_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
        </div>
      </div>

      <div className="psot_portfolio_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>

      <div className="psot_portfolio_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>

      <div className="psot_portfolio_testimonials">
        <div className="container">
          <div className="psot_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutMain;
