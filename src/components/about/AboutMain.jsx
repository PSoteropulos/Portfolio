import Intro from "./Intro";
import Resume from "./Resume";
import Skills from "./Skills";
import Modal from "react-modal";
import PersonalInfo from "./PersonalInfo";
import KnowledgeInterest from "./KnowledgeInterest";

Modal.setAppElement("#root");

const AboutMain = ({ changeTab }) => {

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'assets/docs/Paul_Soteropulos_Resume_Master.pdf';
    link.download = 'Paul_Soteropulos_Resume_Master.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          <Intro changeTab={changeTab} />
          <div className="psot_portfolio_short_info">
            <PersonalInfo />
          </div>

          <div className="psot_portfolio_button" data-position="left">
            <p id="button" onClick={handleDownloadClick} style={{ cursor: 'pointer' }}>
              <span>
                Download Resume
              </span>
            </p>
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

      {/* <div className="psot_portfolio_testimonials">
        <div className="container">
          <div className="psot_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div> */}

    </>
  );
};

export default AboutMain;
