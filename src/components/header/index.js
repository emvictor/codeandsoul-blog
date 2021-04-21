import {
  HeaderContainer,
  Logo,
  Title,
} from "../../styles/components/header.styles";
import Link from "next/link";

export default function Header(children, ...props) {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Logo src="/images/profile.jfif"></Logo>
      </Link>
      <Link href={"/"}>
        <Title>Emival Santos</Title>
      </Link>
    </HeaderContainer>
  );
}
