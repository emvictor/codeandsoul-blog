
import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/posts";

export async function getPostsData() {
  const posts = await axios.get(apiURL);
  return posts.data;
}

export async function getPostsID() {
  const ids = await getPostsData();
  return ids.map((i) => String(i.id));
}

export async function getPostData(postID) {
  const posts = await getPostsData();
  const { id, title, body } = posts[postID - 1];
  return {
    id,
    title,
    body,
  };
}

export async function getFilteredPosts(id) {
  const posts = await getPostsData();
  const filteredPosts = posts.filter((post) => post.id !== id).slice(0, 4);
  return filteredPosts;
}

