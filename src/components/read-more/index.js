import {
  Container,
  Text,
  Post,
  Inner,
} from "../../styles/components/readmore.styles";

export default function ReadMore({ children, ...props }) {
  return (
    <Container {...props}>{children}</Container>
  );
}

ReadMore.Text = function ReadMoreText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

ReadMore.Post = function ReadMorePost({ children, ...props }) {
  return <Post {...props}>{children}</Post>;
};

ReadMore.Inner = function ReadMoreInner({ children, ...props }) {
  return <Inner {...props}>{children}</Inner>;
};