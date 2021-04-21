import { Post, Header } from "components";
import { getPostData, getPostsID } from "lib";

export default function PostContent({ postsData }) {
  return (
    <>
      <Header />
      <Post>
        <Post.Item key={postsData.id}>
          <Post.Title>{postsData.title}</Post.Title>
          <Post.Body>{postsData.body}</Post.Body>
        </Post.Item>
      </Post>
    </>
  );
}

export async function getStaticPaths() {
  const postsId = await getPostsID();
  const paths = postsId.map((id) => ({
    params: { id: id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsData = await getPostData(params.id);
  return {
    props: { postsData },
  };
}
