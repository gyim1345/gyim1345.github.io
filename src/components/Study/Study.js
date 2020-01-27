// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Study.module.scss';
import type { Node } from '../../types';

type Props = {
  study: Node
};

const Study = ({ study }: Props) => {
  const { html } = study;
  const { tagSlugs, slug } = study.fields;
  const { tags, title, date } = study.frontmatter;

  return (
    <div className={styles['study']}>
      <Link className={styles['study__home-button']} to="/study">Study Home</Link>

      <div className={styles['study__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['study__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['study__comments']}>
        <Comments postSlug={slug} postTitle={study.frontmatter.title} />
      </div>
    </div>
  );
};

export default Study;