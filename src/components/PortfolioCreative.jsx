import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Modal from "react-modal";
import ProjectList from "../data/ProjectData";
// import ModalVideo from "react-modal-video";
// import Social from "./Social";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(0)

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
                      {ProjectList.map((project) => (
                        <li
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <img
                                src={`${project.thumbnail}`}
                                alt="Details"
                                data-tip
                                data-for="detail5"
                                onClick={() => setOpenModal(project.id)}
                              />
                              <ReactTooltip
                                id="detail5"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                              >
                                <div>
                                  <h5>{project.name}</h5>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      {ProjectList.filter((project) => project.categories.includes("javascript")).map((project) => (
                        <li
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <img
                                src={`${project.thumbnail}`}
                                alt="Details"
                                data-tip
                                data-for="detail5"
                                onClick={() => setOpenModal(project.id)}
                              />
                              <ReactTooltip
                                id="detail5"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                              >
                                <div>
                                  <h5>{project.name}</h5>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      {ProjectList.filter((project) => project.categories.includes("python")).map((project) => (
                        <li
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <img
                                src={`${project.thumbnail}`}
                                alt="Details"
                                data-tip
                                data-for="detail5"
                                onClick={() => setOpenModal(project.id)}
                              />
                              <ReactTooltip
                                id="detail5"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                              >
                                <div>
                                  <h5>{project.name}</h5>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      {ProjectList.filter((project) => project.categories.includes("java")).map((project) => (
                        <li
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <img
                                src={`${project.thumbnail}`}
                                alt="Details"
                                data-tip
                                data-for="detail5"
                                onClick={() => setOpenModal(project.id)}
                              />
                              <ReactTooltip
                                id="detail5"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                              >
                                <div>
                                  <h5>{project.name}</h5>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      {ProjectList.filter((project) => project.categories.includes("c#")).map((project) => (
                        <li
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <img
                                src={`${project.thumbnail}`}
                                alt="Details"
                                data-tip
                                data-for="detail5"
                                onClick={() => setOpenModal(project.id)}
                              />
                              <ReactTooltip
                                id="detail5"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                              >
                                <div>
                                  <h5>{project.name}</h5>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      {ProjectList.filter((project) => project.categories.includes("misc")).map((project) => (
                        <li
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <img
                                src={`${project.thumbnail}`}
                                alt="Details"
                                data-tip
                                data-for="detail5"
                                onClick={() => setOpenModal(project.id)}
                              />
                              <ReactTooltip
                                id="detail5"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                              >
                                <div>
                                  <h5>{project.name}</h5>
                                </div>
                              </ReactTooltip>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>

                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>

      {ProjectList.map((project) => (
        <Modal
          key={project.id}
          isOpen={openModal === project.id}
          onRequestClose={() => setOpenModal(0)}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
            <button className="close-modal" onClick={() => setOpenModal(0)}>
              <img src="assets/img/svg/cancel.svg" alt="close icon" />
            </button>
            <div className="box_inner">
              <div className="description_wrap scrollable">
                <div className="image">
                  <img src={`${project.mainImage}`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${project.mainImage})`,
                    }}
                  ></div>
                </div>
                <div className="portfolio_main_title">
                  <h3>{project.name}</h3>
                  <span>{project.tech}</span>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      {project.paragraph1()}
                    </p>
                    <p>
                      {project.paragraph2()}
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">{project.rightCategory1}</span>
                        <span>{project.rightInfo1()}</span>
                      </li>
                      <li>
                        <span className="first">{project.rightCategory2}</span>
                        <span>{project.rightInfo2()}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="additional_images">
                  <ul className="gallery_zoom">
                    {
                      project.modalImage1 &&
                      <li>
                        <div className="list_inner">
                          <div className="my_image">
                            <img src={`${project.modalImage1}`} alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${project.modalImage1})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    }
                    {
                      project.modalImage2 &&
                      <li>
                        <div className="list_inner">
                          <div className="my_image">
                            <img src={`${project.modalImage2}`} alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${project.modalImage2})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    }
                    {
                      project.modalImage3 &&
                      <li>
                        <div className="list_inner">
                          <div className="my_image">
                            <img src={`${project.modalImage3}`} alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${project.modalImage3})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ))}

    </>
  );
};

export default Portfolio;
