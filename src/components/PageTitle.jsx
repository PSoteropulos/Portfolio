import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Paul Soteropulos Developer Portfolio</title>
    </Helmet>
  );
};

export default PageTitle;
