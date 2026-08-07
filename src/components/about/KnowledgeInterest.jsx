const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Development Tools",
      content: [
        "IDEs and Editors: Visual Studio Code, Vim, IntelliJ, Rider",
        "AI-Assisted Development: Claude Code (agentic dev workflows), LLM API integration (OpenAI)",
        "Version Control & CI/CD: Git, GitHub, GitHub Actions",
        "Containerization & IaC: Docker, Docker Compose, Terraform",
        "Code Quality: ESLint, Prettier, ruff, pytest, Vitest, pre-commit hooks",
        "Package Managers and Build Tools/SDKs: npm, vite, pip, dotnet, Maven",
        "Database Management Tools: pgAdmin4, MongoDB Atlas and Compass, MySQL Workbench",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Web Tech and Collaboration",
      content: [
        "Infra & Deployment: AWS (EC2, S3), Cloudflare Tunnels, Nginx, ELK Stack",
        "Project Management: Jira, Agile/Scrum",
        "Security Tools: JSON Web Token (JWT), bcrypt, CertBot/SSL",
        "APIs and Real-Time: REST API, Socket.io, custom WebSocket/SSE clients, Postman",
        "Communication: Slack, Discord",
        "Wireframing Tools: Whimsical, Figma, Balsamiq",
      ],
    },
  ];

  return (
    <>
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
