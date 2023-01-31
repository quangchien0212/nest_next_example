import { GetServerSideProps } from 'next';
import { fetch } from 'src/shared/utils/fetch';
import { BlogPost } from 'src/shared/types/blog-post';
import { FC } from 'react';
import Link from 'next/link';

type THomeProps = {
  blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts = [] }) => {
  return (
    <div>
      <h1>Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const blogPosts = await fetch('/api/blog-posts');

  return { props: { blogPosts } };
};

export default Home;
