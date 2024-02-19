import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education and Certifications",
      resume: [
        {
          id: 1,
          year: "April 2023 - Jan 2024",
          institute: "Coding Dojo (Colorado Technical University)",
          degree: "Certificate of Instructor Mastery (Programming Basics, Web Fundamentals, Python, MERN, Java, C#/.NET, Projects and Algorithms)",
        },
        {
          id: 2,
          year: "June 2022 - Jan 2023",
          institute: "Coding Dojo (Colorado Technical University)",
          degree: "Certificate of Student Competancy (Web Fundamentals, Python, MERN, Projects and Algorithms)",
        },
        {
          id: 3,
          year: "2004 - 2006",
          institute: "University of Louisiana at Lafayette",
          degree: "Mechanical Engineering",
        },
        {
          id: 4,
          year: "2004",
          institute: "Fontainebleau High School",
          degree: "High School Diploma",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "May 2023 - Current",
          institute: "Sojourn Creations (Startup)",
          degree: "Full Stack Software Engineer",
        },
        {
          id: 2,
          year: "March 2023 - Current",
          institute: "Salish Marine Charters",
          degree: "Lead Full Stack Software Engineer",
        },
        {
          id: 3,
          year: "April 2023 - Feb 2024",
          institute: "Coding Dojo (Colorado Technical University)",
          degree: "Developer / Instruction Team",
        },
        {
          id: 4,
          year: "June 2020 - June 2022",
          institute: "Fox Press",
          degree: "Distributions Director",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="psot_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="psot_portfolio_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
