// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useStudyList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query StudyListQuery {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "study"}, draft: {ne: true}}}) {
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

export default useStudyList;