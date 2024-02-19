import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Languages",
      progress: [
        // {
        //   id: 1,
        //   skillName: "WordPress",
        //   skillValue: "95",
        // },

        {
          id: 4,
          skillName: "C#",
        },
        {
          id: 3,
          skillName: "Java",
        },
        {
          id: 2,
          skillName: "Python",
        },
        {
          id: 5,
          skillName: "HTML5 + CSS3",
        },
        {
          id: 1,
          skillName: `JavaScript and TypeScript`,
        },
        {
          id: 6,
          skillName: "SQL",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Frameworks and Libraries",
      progress: [
        // {
        //   id: 1,
        //   skillName: "English",
        //   skillValue: "90",
        // },

        {
          id: 4,
          skillName: ".NET Core, ASP.NET, Entity Framework, Razor",
        },
        {
          id: 3,
          skillName: "Spring Boot, Spring MVC, JSP",
        },
        {
          id: 2,
          skillName: "Django, Flask, Jinja2, Django Template Language",
        },
        {
          id: 5,
          skillName: "Bootstrap, TailwindCSS, ARIA, DOM",
        },
        {
          id: 1,
          skillName: "React, NextJS, Express, Mongoose, Redux, Axios, React-router-dom, jQuery, Socket.io",
        },
      ],
    },
  ];
  return (
    <>
      {skillsContent.map((item) => (
        // <div key={item.id}>
          <div className={item.colClass} key={item.id}>
          <div className="psot_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="psot_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  {/* <span className="number">{skill?.skillValue}%</span> */}
                </span>
                {/* <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
