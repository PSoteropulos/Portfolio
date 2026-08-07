const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/paulsoteropulos/",
  },
  {
    iconName: "github",
    link: "https://github.com/PSoteropulos",
  },
];

const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
