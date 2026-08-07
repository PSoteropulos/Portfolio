const Intro = ({ changeTab }) => {
  const introContent = {
    image: "assets/img/slider/2.jpg",
    name: "Paul Soteropulos II",
    designation: "Software Engineer | Full Stack Developer",
    text: (
      <>
        <p>
          Hey! My name is Paul Soteropulos. Ever since I can remember I have had an unquenchable thirst for knowledge, in nearly every form. Whether it is attempting to understand the experiences of a fellow human being, the inner workings of some mechanical or electrical device, or the natural questions of our everyday existence- why is grass green and the sky blue (chlorophyll and light scattering, of course)?! Being driven by curiosity, logic, learning, and conquering new challenges led me to the very natural and enjoyable fit that is the world of software and web development!
        </p>
        <p>
          I fell in love with coding and development almost immediately after I started in 2021. It was something I had been interested in for a while, but the birth of my first daughter in early 2022 really poured gasoline on the fire. Soon after that I quit my job as a Distributions Director and enrolled in a Web Development bootcamp at Coding Dojo. I put in the work and soaked in the docs, and earned top marks in each of my courses. Fast-forward a year later and I was working at Coding Dojo as part of the instruction team &mdash; teaching full-stack fundamentals across JavaScript, Python, Java, and C#, and collaborating with the curriculum team to modernize the MERN stack curriculum &mdash; while building out passion projects like moodRING and taking on freelance/collaborative work on the side.
        </p>
        <p>
          That role at Coding Dojo turned into a launchpad: in 2024 I joined a small team as a founding engineer building a distributed, microservices-based auction platform from the ground up &mdash; architecting a custom real-time bidding system, a multi-vertical inventory taxonomy, and a bidder-registration kiosk, among other things. These days I'm splitting my time between collaborating on <a style={{ color: "grey" }} target="_blank" href="https://hunt-sync.com">HuntSync</a>, a hunting-club safety/management platform, and tinkering with my own homelab &mdash; self-hosting projects (including this one!) on Docker Compose and Cloudflare Tunnels across a segmented home network.
        </p>
        <p>
          Get in touch with me <span style={{ cursor: "pointer", textDecoration: "underline", color: "grey" }} onClick={() => changeTab(3)}>here</span>, or on <a style={{ color: "grey" }} target="_blank" href="https://www.linkedin.com/in/paulsoteropulos/">LinkedIn</a>, and let's strike up a conversation about code, life, or any other worthwhile endeavor! Thank you for your time and interest in my personal and professional development. Make yourself at home, and don't be a stranger.
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
