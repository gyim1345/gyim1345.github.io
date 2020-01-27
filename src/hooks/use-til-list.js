// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useTilList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TilListQuery {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "til"}, draft: {ne: true}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
              parent {
                ... on File {
                  modifiedTime
                  mtime(difference: "milliseconds")
                }
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark;
};

export default useTilList;