// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Til.module.scss';
import type { Node } from '../../types';

type Props = {
  til: Node
};

const Til = ({ til }: Props) => {
  const { html } = til;
  const { tagSlugs, slug } = til.fields;
  const { tags, title, date } = til.frontmatter;

  return (
    <div className={styles['til']}>
      <Link className={styles['til__home-button']} to="/til">Til Home</Link>

      <div className={styles['til__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['til__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['til__comments']}>
        <Comments postSlug={slug} postTitle={til.frontmatter.title} />
      </div>
    </div>
  );
};

export default Til;