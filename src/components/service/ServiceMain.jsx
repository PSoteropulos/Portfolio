import React from "react";
import FunFact from "./FunFact";
import Partners from "./Partners";
import Pricing from "./Pricing";
import Services from "./Services";

const ServiceMain = () => {
  return (
    <>
      {/* SERVICE */}

      <div className="container">
        <div className="psot_portfolio_services">
          <div className="psot_portfolio_title">
            <div className="title_flex">
              <div className="left">
                <span>Services</span>
                <h3>What I Do</h3>
              </div>
            </div>
          </div>
          {/* End psot_portfolio_title */}

          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      <div className="psot_portfolio_partners">
        <div className="container">
          <div className="psot_section_title">
            <h3>Partners</h3>
          </div>
          <div className="partners_inner">
            <ul>
              <Partners />
            </ul>
          </div>
        </div>
      </div>
      {/* End partners */}

      <div className="psot_portfolio_facts">
        <div className="container">
          <div className="psot_section_title">
            <h3>Fun Facts</h3>
          </div>
          <div className="list">
            <ul>
              <FunFact />
            </ul>
          </div>
        </div>
      </div>
      {/* End funfacts */}

      <div className="psot_portfolio_pricing">
        <div className="container">
          <div className="psot_section_title">
            <h3>Pricing</h3>
          </div>
          <div className="list">
            <ul>
              <Pricing />
            </ul>
          </div>
        </div>
      </div>
      {/* End pricing */}

      {/* /SERVICE */}
    </>
  );
};

export default ServiceMain;
