import axios from "axios";

export async function getPostsData() {
  const apiURL = "https://jsonplaceholder.typicode.com/posts";

  const posts = await axios.get(apiURL);
  return posts.data;
}
