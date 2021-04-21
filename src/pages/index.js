import { Post, Header } from "components";
import { getPostsData } from "lib";

export default function Home({ postsData }) {
  return (
    <>
      <Header />
      <Post>
        {postsData.map((post) => (
          <Post.Item key={post.id}>
            <Post.Title>{post.title}</Post.Title>
            <Post.Body>{post.body}</Post.Body>
          </Post.Item>
        ))}
      </Post>
    </>
  );
}

export async function getStaticProps() {
  const postsData = await getPostsData();
  return {
    props: { postsData },
  };
}
