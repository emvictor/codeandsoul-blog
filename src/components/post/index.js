import {
  Inner,
  Item,
  Title,
  Body,
  Container,
} from "../../styles/components/post.styles";

export default function Posts({ children, ...props }) {
  return (
    <Item {...props}>
      <Inner>{children}</Inner>
    </Item>
  );
}

Posts.Item = function PostsItem({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};

Posts.Inner = function PostsInner({ children, ...props }) {
  return <Inner {...props}>{children}</Inner>;
};
Posts.Title = function PostsTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};
Posts.Body = function PostsBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>;
};
Posts.Container = function PostsContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};
