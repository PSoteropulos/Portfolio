import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="container">
          <div className="psot_portfolio_portfolio">
            <div className="psot_portfolio_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Minimal Portfolio</h3>
                </div>
              </div>
            </div>

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>Vimeo</Tab>
                  <Tab>Youtube</Tab>
                  <Tab>Photography</Tab>
                  <Tab>Details</Tab>
                </TabList>

                <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Vimeo"
                              onClick={() => setOpen2(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Teresa Butler</h3>
                            <span>Vimeo</span>
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
                              src="assets/img/portfolio/2.jpg"
                              alt="Youtube"
                              onClick={() => setOpen(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Ashely Flores</h3>
                            <span>Youtube</span>
                          </div>
                        </div>
                      </li>
                      <SRLWrapper>
                        <li
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="200"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <a href="assets/img/portfolio/4.jpg">
                                <img
                                  src="assets/img/portfolio/4.jpg"
                                  alt="Childhood"
                                />
                              </a>
                            </div>
                            <div className="mobile_title">
                              <h3>Derek Smith</h3>
                              <span>Photo shoot</span>
                            </div>
                          </div>
                        </li>
                        <li
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          data-aos-delay="300"
                        >
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <a href="assets/img/portfolio/3.jpg">
                                <img
                                  src="assets/img/portfolio/3.jpg"
                                  alt="Besh Award"
                                />
                              </a>
                            </div>
                            <div className="mobile_title">
                              <h3>Gloria Genkins</h3>
                              <span>Photo shoot</span>
                            </div>
                          </div>
                        </li>
                      </SRLWrapper>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/6.jpg"
                              alt="Details"
                              onClick={toggleModalThree}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Selena Gomez</h3>
                            <span> Details</span>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/7.jpg"
                              alt="Details"
                              onClick={toggleModalFour}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Ave Simone</h3>
                            <span> Details</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Vimeo"
                              onClick={() => setOpen2(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Teresa Butler</h3>
                            <span>Vimeo</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/2.jpg"
                              alt="Youtube"
                              onClick={() => setOpen(true)}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Ashely Flores</h3>
                            <span>Youtube</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <SRLWrapper>
                        <li data-aos="fade-right" data-aos-duration="1200">
                          <div className="inner">
                            <div className="entry psot_portfolio_portfolio_animation_wrap">
                              <a href="assets/img/portfolio/4.jpg">
                                <img
                                  src="assets/img/portfolio/4.jpg"
                                  alt="Childhood"
                                />
                              </a>
                            </div>
                            <div className="mobile_title">
                              <h3>Derek Smith</h3>
                              <span>Photo shoot</span>
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
                              <a href="assets/img/portfolio/3.jpg">
                                <img
                                  src="assets/img/portfolio/3.jpg"
                                  alt="Besh Award"
                                />
                              </a>
                              <div className="mobile_title">
                                <h3>Gloria Genkins</h3>
                                <span>Photo shoot</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </SRLWrapper>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry psot_portfolio_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/6.jpg"
                              alt="Details"
                              onClick={toggleModalThree}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Selena Gomez</h3>
                            <span> Details</span>
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
                              src="assets/img/portfolio/7.jpg"
                              alt="Details"
                              onClick={toggleModalFour}
                            />
                          </div>
                          <div className="mobile_title">
                            <h3>Ave Simone</h3>
                            <span> Details</span>
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
      </SimpleReactLightbox>

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      /> */}

      {/* <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      /> */}

      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
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
                <h3>Selena Gomez</h3>
                <span>Details</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/8.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
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
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="psot_portfolio_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              <div className="portfolio_main_title">
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
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
    </>
  );
};

export default Portfolio;
