import { Post, Header } from "components";
import { getPostsData } from "lib";
import Link from "next/link";

export default function Home({ postsData }) {
  return (
    <>
      <Header />
      <Post>
        {postsData.map((post) => (
          <Post.Item key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Post.Title>{post.title}</Post.Title>
            </Link>
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
