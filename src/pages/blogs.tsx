import { GetServerSideProps } from 'next';
import { fetch } from 'src/shared/utils/fetch';
import { BlogPost } from 'src/shared/types/blog-post';
import { FC } from 'react';
import Link from 'next/link';

type Props = {
  blogPosts: BlogPost[];
};

const Blog: FC<Props> = ({ blogPosts = [] }) => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const blogPosts = await fetch('/api/blog-posts');

  return { props: { blogPosts } };
};

export default Blog;
