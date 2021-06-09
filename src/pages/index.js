import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://soyunperro.com/wp-content/uploads/2019/03/pitbulls.jpg"
        alt="Pitbull puppies"
        loading="eager"
        placeholder="blurred"
        layout="fixed"
      />
      <StaticImage
        src="../images/BennieHandsome.jpg"
        alt="Bennie the pittbull"
        placeholder="tracedSVG"
        layout="fullWidth"
      />
    </Layout>
  );
};

export default IndexPage;
