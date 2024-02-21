import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      {/* <title>{title} - Paul Soteropulos Portfolio</title> */}
      <title>Paul Soteropulos Developer Portfolio</title>
    </Helmet>
  );
};

export default PageTitle;
