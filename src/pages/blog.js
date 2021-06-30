import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.id}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
        id
      }
    }
  }
`;
export default Blog;
