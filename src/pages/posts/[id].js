import { Post, Header, ReadMore } from "components";
import { getPostData, getPostsID, getFilteredPosts } from "lib";
import Link from "next/link";
export default function PostContent({ postsData, filteredPosts }) {
  return (
    <>
      <Header />
      <Post>
        <Post.Item key={postsData.id}>
          <Post.Title>{postsData.title}</Post.Title>
          <Post.Container>
            <Post.Body>{postsData.body}</Post.Body>
          </Post.Container>
        </Post.Item>
      </Post>

      <div className="readmore-container">
        <ReadMore.Text>Read More:</ReadMore.Text>
        <ReadMore>
          {filteredPosts.map((post) => (
            <ReadMore.Inner key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <ReadMore.Post>{post.title}</ReadMore.Post>
                </a>
              </Link>
            </ReadMore.Inner>
          ))}
        </ReadMore>
      </div>
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
  const filteredPosts = await getFilteredPosts(parseInt(params.id));
  return {
    props: { postsData, filteredPosts },
  };
}

