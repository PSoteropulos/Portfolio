import React from "react";

const Intro = ({changeTab}) => {
  const introContent = {
    image: "assets/img/slider/2.jpg",
    name: "Paul Soteropulos II",
    designation: "Software Developer",
    text: (
      <>
        <p>
          Hey! My name is Paul Soteropulos. Ever since I can remember I have had an unquenchable thirst for knowledge, in nearly every form. Whether it is attempting to understand the experiences of a fellow human being, the inner workings of some mechanical or electrical device, or the natural questions of our everyday existence- why is grass green and the sky blue (chlorophyll and light scattering, of course)?! Being driven by curiosity, logic, learning, and conquering new challenges led me to the very natural and enjoyable fit that is the world of software and web development!
        </p>
        <p>
          I fell in love with coding and development almost immediately after I started in 2021. It was something I had been interested in for a while, but the birth of my first daughter in early 2022 really poured gasoline on the fire. Soon after that I quit my job as a Distributions Director and enrolled in Web Development bootcamp at Coding Dojo. I put in the work and soaked in the docs, and earned top marks in each of my courses. Fast-forward a year and a half later and I was working at Coding Dojo as part of the Instruction team. This position afforded me many new and wonderful relationships, lots of time debugging code, and learning learning learning. I am now certified at an Instructor Mastery level in full stack JavaScript (MERN stack), full stack Python, full stack Java, full stack C#/.NET, Web Fundamentals (HTML, CSS, and JavaScript), and Programming Basics.
        </p>
        <p>
          Get in touch with me <span style={{cursor:"pointer", textDecoration:"underline", color:"grey"}} onClick={()=>changeTab(3)}>here</span>, or on <a style={{color:"grey"}} href="https://www.linkedin.com/in/paulsoteropulos/">LinkedIn</a>, and let's strike up a conversation about code, life, or any other worthwhile endeavor! Thank you for your time and interest in my personal and professional development. Make yourself at home, and don't be a stranger.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
