import DOMAIN from '../../services/endpoint';
import React from 'react';
import axios from 'axios';
import { ArticleCardImage } from '../../components/misc/ArticleCardImage';
import { SimpleGrid, Container, Loader } from '@mantine/core';
import { useLoaderData, Await, defer } from 'react-router-dom';
import { useViewportSize } from '@mantine/hooks';

export const PostPage = () => {
  const loader = useLoaderData();
  const { height, width } = useViewportSize();
  return (
    <Container h={height}>
      <React.Suspense fallback={<Loader color="blue" />}>
        <Await resolve={loader.data} errorElement={<p>Error loading posts!</p>}>
          {(posts) => (
            <SimpleGrid cols={3}>
              {posts.map((post) => (
                <ArticleCardImage key={post.title} {...post} />
              ))}
            </SimpleGrid>
          )}
        </Await>
      </React.Suspense>
    </Container>
  );
};

export const postsLoader = async () => {
  return defer({
    data: axios.get(`${DOMAIN}/api/posts`).then((res) => res.data),
  });
};
