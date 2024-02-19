import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Tooltip as ReactTooltip } from 'react-tooltip'
// import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  // for popup video for youtube
  // const [isOpen, setOpen] = useState(false);

  // popup video for vimeo
  // const [isOpen2, setOpen2] = useState(false);

  // for modal details
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);

  // for modal details method
  const toggleModal1 = () => {
    setIsOpen1(!isOpen1);
  }

  const toggleModal2 = () => {
    setIsOpen2(!isOpen2);
  }

  const toggleModal3 = () => {
    setIsOpen3(!isOpen3);
  }

  const toggleModal4 = () => {
    setIsOpen4(!isOpen4);
  }

  const toggleModal5 = () => {
    setIsOpen5(!isOpen5);
  }

  const toggleModal6 = () => {
    setIsOpen6(!isOpen6);
  }

  const toggleModal7 = () => {
    setIsOpen7(!isOpen7);
  }

  const toggleModal8 = () => {
    setIsOpen8(!isOpen8);
  }

  const toggleModal9 = () => {
    setIsOpen9(!isOpen9);
  }

  const toggleModal10 = () => {
    setIsOpen10(!isOpen10);
  }

  const toggleModal11 = () => {
    setIsOpen11(!isOpen11);
  }

  const toggleModal12 = () => {
    setIsOpen12(!isOpen12);
  }

  const toggleModal13 = () => {
    setIsOpen13(!isOpen13);
  }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="psot_portfolio_portfolio">
            <div className="psot_portfolio_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Projects</h3>
                </div>
              </div>
            </div>

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>JavaScript/TypeScript</Tab>
                  <Tab>Python</Tab>
                  <Tab>Java</Tab>
                  <Tab>C#</Tab>
                  <Tab>Misc</Tab>
                </TabList>
                <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div data-tip data-for="detail" className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/moodring/moodringhome.png"
                              alt="Details"
                              data-tip
                              data-for="detail1"
                              onClick={toggleModal1}
                            />
                            <ReactTooltip
                              id="detail1"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>moodRing</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/aisop/aisophome.png"
                              alt="Details"
                              data-tip
                              data-for="detail2"
                              onClick={toggleModal2}
                            />
                            <ReactTooltip
                              id="detail2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Aisop</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/cookbook/cookbookhome.png"
                              alt="Details"
                              data-tip
                              data-for="detail3"
                              onClick={toggleModal3}
                            />
                            <ReactTooltip
                              id="detail3"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>CookBook</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/Salish/salishhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail4"
                              onClick={toggleModal4}
                            />
                            <ReactTooltip
                              id="detail4"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Salish</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/AlgoPractice/githubhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail5"
                              onClick={toggleModal5}
                            />
                            <ReactTooltip
                              id="detail5"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Algos</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail6"
                              onClick={toggleModal6}
                            />
                            <ReactTooltip
                              id="detail6"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Python 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail7"
                              onClick={toggleModal7}
                            />
                            <ReactTooltip
                              id="detail7"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Python 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail8"
                              onClick={toggleModal8}
                            />
                            <ReactTooltip
                              id="detail8"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>MERN 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail9"
                              onClick={toggleModal9}
                            />
                            <ReactTooltip
                              id="detail9"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>MERN 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail10"
                              onClick={toggleModal10}
                            />
                            <ReactTooltip
                              id="detail10"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Java 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail11"
                              onClick={toggleModal11}
                            />
                            <ReactTooltip
                              id="detail11"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Java 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail12"
                              onClick={toggleModal12}
                            />
                            <ReactTooltip
                              id="detail12"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>C# 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail13"
                              onClick={toggleModal13}
                            />
                            <ReactTooltip
                              id="detail13"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>C# 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div data-tip data-for="detail" className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/moodring/moodringhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail1"
                              onClick={toggleModal1}
                            />
                            <ReactTooltip
                              id="detail1"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>moodRing</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div data-tip data-for="detail" className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/aisop/aisophome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail1"
                              onClick={toggleModal2}
                            />
                            <ReactTooltip
                              id="detail1"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Aisop</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div data-tip data-for="detail" className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/CookBook/cookbookhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail1"
                              onClick={toggleModal3}
                            />
                            <ReactTooltip
                              id="detail1"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>CookBook</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/Salish/salishhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail4"
                              onClick={toggleModal4}
                            />
                            <ReactTooltip
                              id="detail4"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Salish</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/AlgoPractice/githubhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail5"
                              onClick={toggleModal5}
                            />
                            <ReactTooltip
                              id="detail5"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Algos</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail8"
                              onClick={toggleModal8}
                            />
                            <ReactTooltip
                              id="detail8"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>MERN 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail9"
                              onClick={toggleModal9}
                            />
                            <ReactTooltip
                              id="detail9"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>MERN 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/aisop/aisophome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail3"
                              onClick={toggleModal2}
                            />
                            <ReactTooltip
                              id="detail3"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Aisop</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/AlgoPractice/githubhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail5"
                              onClick={toggleModal5}
                            />
                            <ReactTooltip
                              id="detail5"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Algos</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail6"
                              onClick={toggleModal6}
                            />
                            <ReactTooltip
                              id="detail6"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Python 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail7"
                              onClick={toggleModal7}
                            />
                            <ReactTooltip
                              id="detail7"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Python 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail10"
                              onClick={toggleModal10}
                            />
                            <ReactTooltip
                              id="detail10"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Java 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail11"
                              onClick={toggleModal11}
                            />
                            <ReactTooltip
                              id="detail11"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Java 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail12"
                              onClick={toggleModal12}
                            />
                            <ReactTooltip
                              id="detail12"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>C# 1</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/coming_soon.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail13"
                              onClick={toggleModal13}
                            />
                            <ReactTooltip
                              id="detail13"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>C# 2</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="/public/assets/img/app_screenshots/AlgoPractice/githubhome.PNG"
                              alt="Details"
                              data-tip
                              data-for="detail5"
                              onClick={toggleModal5}
                            />
                            <ReactTooltip
                              id="detail5"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Algos</h5>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>

      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModal1}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal1}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/app_screenshots/moodring/moodringhome.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/app_screenshots/moodring/moodringhome.png)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>moodRING</h3>
                <span>MERN</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    This is one of my first real fully fledged passion projects. Built with full stack JavaScript (MERN), Spotify APIs, and Bootstrap, <a href="https://moodring.net"><b>moodRING</b></a> allows users to experience something that harkens back to the golden age of social media. It is the juxtaposition of music, mood tracking, and light social media fun. Users can search for a song, input a verbal description of how the song makes them feel, then adjust some sliders to dial in a color that they associate with that mood and/or song. On The Feed, all entries are displayed, and if logged in a user can click another user's name to see all of the moods they have posted. A logged user can also interact with their own moods to edit or delete them.
                  </p>
                  <p>
                    <b>Technologies utilized: </b> ReactJS, NodeJS, ExpressJS, Mongoose, MongoDB, Spotify Web API, Spotify Embed API, Axios, React ContextAPI, React-Router-DOM, Bootstrap, JSON Web Token, Date-FNS, bcrypt, CORS, dotenv, npm, AWS EC2, Google DNS, SSL, Visual Studio Code, git, GitHub
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span><a href="https://moodring.net">moodRING</a></span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span><a href="https://github.com/psoteropulos/moodRING">Repo</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/moodring/moodring1.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/moodring/moodring1.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/moodring/moodring2.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/moodring/moodring2.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/moodring/moodring3.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/moodring/moodring3.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal2}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/app_screenshots/aisop/aisophome.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/app_screenshots/aisop/aisophome.png)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Aisop</h3>
                <span>React + Flask</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Sojourn Creations collaboration <a href="https://aisop.io"><b>Aisop</b></a>. Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized: </b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span><a href="https://aisop.io">Aisop</a></span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Private Repo. Sorry!</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/aisop/aisopgameplay.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/aisop/aisopgameplay.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/aisop/aisopabout.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/aisop/aisopabout.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/aisop/aisop1.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/aisop/aisop1.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModal3}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal3}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/app_screenshots/cookbook/cookbookhome.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/app_screenshots/cookbook/cookbookhome.png)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>CookBook</h3>
                <span>MERN</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Four member group collaboration, <a href="https://cookbookapp.net"><b>CookBook</b></a>. Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized: </b> Coming Soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span><a href="https://cookbookapp.net">CookBook</a></span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span><a href="https://github.com/CookBook-Group-Project/CookBook">Repo</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/cookbook/cookbook1.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/cookbook/cookbook1.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/cookbook/cookbook2.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/cookbook/cookbook2.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/cookbook/cookbook4.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/cookbook/cookbook4.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModal4}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal4}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/app_screenshots/salish/salishhome.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/app_screenshots/salish/salishhome.png)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Salish</h3>
                <span>MERN</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    App summary
                  </p>
                  <p>
                    <b>Technologies utilized:</b>
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Private App</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Private Repo</span>
                    </li>
                    {/* <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li> */}
                    {/* <li>
                      <span className="first">Share</span>
                      <Social />
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/salish/salishnew.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/salish/salishnew.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/salish/salishinvoices.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/salish/salishinvoices.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/salish/salishadmin.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/salish/salishadmin.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModal5}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal5}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/app_screenshots/AlgoPractice/githubhome.PNG" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/app_screenshots/AlgoPractice/githubhome.PNG)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Algos</h3>
                <span>Misc</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">LeetCode Profile</span>
                      <span><a href="https://leetcode.com/Paulsoteropulos/">LeetCode</a></span>
                    </li>
                    <li>
                      <span className="first">GitHub Repo</span>
                      <span><a href="https://github.com/psoteropulos/AlgoPractice">GitHub</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/algopractice/leetcode.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/algopractice/leetcode.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/algopractice/leetcodeproblem.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/algopractice/leetcodeproblem.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/app_screenshots/algopractice/repo.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/app_screenshots/algopractice/repo.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModal6}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal6}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
              <img src="/public/assets/img/coming_soon.jpg" alt="thumb"/>
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Python1</h3>
                <span>Flask</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen7}
        onRequestClose={toggleModal7}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal7}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
              <img src="/public/assets/img/coming_soon.jpg" alt="thumb"/>
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Python2</h3>
                <span>Flask</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen8}
        onRequestClose={toggleModal8}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal8}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
              <img src="/public/assets/img/coming_soon.jpg" alt="thumb"/>
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>MERN 1</h3>
                <span>MERN</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen9}
        onRequestClose={toggleModal9}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal9}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>MERN 2</h3>
                <span>MERN</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen10}
        onRequestClose={toggleModal10}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal10}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
              <img src="/public/assets/img/coming_soon.jpg" alt="thumb"/>
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Java 1</h3>
                <span>Java</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen11}
        onRequestClose={toggleModal11}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal11}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Java 2</h3>
                <span>Java</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen12}
        onRequestClose={toggleModal12}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal12}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>C# 1</h3>
                <span>C#</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen13}
        onRequestClose={toggleModal13}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModal13}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>C# 2</h3>
                <span>C#</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Description coming soon.
                  </p>
                  <p>
                    <b>Technologies utilized:</b> Coming soon.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">URL</span>
                      <span>Coming soon</span>
                    </li>
                    <li>
                      <span className="first">Code</span>
                      <span>Coming soon</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="/public/assets/img/coming_soon.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(/public/assets/img/coming_soon.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
