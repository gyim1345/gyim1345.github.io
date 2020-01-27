// @flow strict
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import moment from 'moment';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useTilList } from '../hooks';


const TilIndexTemplate = () => {
  const { edges } = useTilList();
  
  edges.sort((a, b) => a.node.frontmatter.title.localeCompare(b.node.frontmatter.title));

  return (
    <Layout title={'TIL'}>
        <Sidebar />
      <Page title="TIL">
        <ul>
          {[...edges].reverse().map((edge) => (
            <li key={edge.node.fields.slug}>
              <Link to={edge.node.fields.slug}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TilIndexTemplate;