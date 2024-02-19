import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Development Tools",
      content: [
        "IDEs and Editors: Visual Studio Code, VIM, IntelliJ, Eclipse/Spring Tool Suite, Rider, Visual Studio",
        "Version Control: Git, GitHub, GitBash",
        "Containerization: Docker",
        "Package Managers and Build Tools/SDKs: npm, yarn, vite, pip, dotnet, JDK, Maven",
        "Database Management Tools: MySQL Workbench, MongoDB Atlas and Compass, pgAdmin4",
        "Deployment Tools: AWS, Google DNS, pm2"
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Web Tech and Collaboration",
      content: [
        "Project Management: Jira, Kanban",
        "Web Servers: nginx, Apache",
        "Security Tools: bcrypt, CertBot/SSL, JSON Web Token (JWT)",
        "APIs and Protocols: REST API, Postman",
        "Web Technologies: AJAX",
        "Communication: Slack, Discord",
        "Wireframing Tools: Whimsical, Figma, Balsamiq"
      ],
    },
  ];

  return (
    <>
      {/* <h3 style={{display:"flex", textAlign:"center"}}>Tools</h3> */}
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="psot_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="psot_portfolio_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
