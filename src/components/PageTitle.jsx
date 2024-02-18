import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      {/* <title>{title} - Paul Soteropulos Portfolio</title> */}
      <title>PSoteropulos Portfolio</title>
    </Helmet>
  );
};

export default PageTitle;
