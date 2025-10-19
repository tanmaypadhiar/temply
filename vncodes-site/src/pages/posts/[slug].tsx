import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import { Post } from '../../types';

interface PostProps {
  post: Post;
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();

  // If the page is not found, show a 404 error
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: {
      post,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
};

export default PostPage;