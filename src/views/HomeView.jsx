import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/about/AboutMain";
import Portfolio from "../components/PortfolioCreative";
// import News from "../components/News";
// import ServiceMain from "../components/service/ServiceMain";
import Contact from "../components/Contact";
import CopyRight from "../components/CopyRight";
import PageTitle from "../components/PageTitle";

const HomeView = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeTab = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Home" />

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
        <TabList>
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link>
              </div>

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/setting.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">Service</span>
                  </Tab> */}
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">News</span>
                  </Tab> */}
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content">Contact</span>
                  </Tab>
                </ul>
              </div>

              <CopyRight />
            </div>
          </div>
        </TabList>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="psot_portfolio_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About changeTab={changeTab}/>
                </div>
              </TabPanel>

              {/* <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <ServiceMain />
                </div>
              </TabPanel> */}

              <TabPanel>
                <Portfolio />
              </TabPanel>

              {/* <TabPanel>
                <News />
              </TabPanel> */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default HomeView;
