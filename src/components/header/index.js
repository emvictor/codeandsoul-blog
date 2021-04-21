import { HeaderContainer, Logo, Title } from "./styles/header.styles";

export default function Header(children, ...props) {
  return (
    <HeaderContainer>
      <Logo src="images/profile.jfif"></Logo>
      <Title>Emival Santos</Title>
    </HeaderContainer>
  );
}
