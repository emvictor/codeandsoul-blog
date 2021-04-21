import { HeaderContainer, Logo, Title } from "./styles/header.styles";

export default function Header(children, ...props) {
  return (
    <HeaderContainer>
      <Logo src="images/logo.svg"></Logo>
      <Title>BATATA BLOG</Title>
    </HeaderContainer>
  );
}
