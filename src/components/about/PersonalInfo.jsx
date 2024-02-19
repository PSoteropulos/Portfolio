import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        // {
        //   id: 1,
        //   name: "Birthday",
        //   content: "01.07.1990",
        // },
        // {
        //   id: 2,
        //   name: "Age",
        //   content: "32",
        // },
        {
          id: 3,
          name: "Location",
          content: "Greater New Orleans Area, LA",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:psoteropulos@gmail.com">psoteropulos@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+1 985 789 1690">+1 985 789 1690</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Expertise",
          content: "Web Development",
        },
        // {
        //   id: 3,
        //   name: "Degree",
        //   content: "Master",
        // },
        // {
        //   id: 4,
        //   name: "Interest",
        //   content: "Playing Football",
        // },
        {
          id: 5,
          name: "Freelance",
          content: "Some Availability",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="psot_portfolio_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
