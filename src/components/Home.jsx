import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="psot_portfolio_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Paul Soteropulos</h3>
            <p className="job">
              Meticulous, logic-loving software developer with a passion for solving problems and implementing ideas with code.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
