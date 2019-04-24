import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Container } from '../Container/Container';
import { Article } from '../Article/Article';
import { BlogRoster } from '../BlogRoster/BlogRoster';
import { Subscribe } from '../Subscribe/Subscribe';
import './BlogPost.css';

export default ({ data: { post, recommended } }) => {
  return (
    <Container className="blog_post">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featureImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Article
        className="post__article"
        title={post.title}
        tags={post.tags}
        featureImage={post.featureImage}
        publishDate={post.publishDate}
        excerpt={post.excerpt}
        html={post.html}
      />
      <BlogRoster
        title="Рекомендованные статьи"
        posts={recommended.posts}
        limit={6}
      />
      <Subscribe />
    </Container>
  );
};

export const postFragment = graphql`
  fragment PostFragment on GhostPost {
    id
    slug
    title
    excerpt
    publishDate: published_at
    featureImage: feature_image
    tags {
      ...PostTagsFragment
    }
    authors {
      id
      slug
      name
    }
  }
`;

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    post: ghostPost(slug: { eq: $slug }) {
      ...PostFragment
      html
    }
    recommended: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: 3
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`;
