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
          id: 1,
          skillName: "JavaScript and TypeScript",
        },
        {
          id: 2,
          skillName: "Python",
        },
        {
          id: 3,
          skillName: "Go",
        },
        {
          id: 6,
          skillName: "SQL and NoSQL",
        },
        {
          id: 5,
          skillName: "HTML5 + CSS3",
        },
        {
          id: 4,
          skillName: "Java, C#",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Frameworks and Libraries",
      progress: [
        {
          id: 1,
          skillName: "React, Next.js, Redux, Vite, TailwindCSS, Sass/SCSS",
        },
        {
          id: 2,
          skillName: "Django, Django REST Framework, Flask, Express, Node.js",
        },
        {
          id: 3,
          skillName: "Socket.io, custom WebSocket/SSE clients",
        },
        {
          id: 6,
          skillName: "PostgreSQL (PostGIS, pgbouncer), MongoDB, Redis",
        },
        {
          id: 4,
          skillName: "Spring Boot/MVC, .NET Core, ASP.NET",
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
