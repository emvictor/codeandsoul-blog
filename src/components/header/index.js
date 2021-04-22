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
        <a>
          <Logo src="/images/logo.svg"></Logo>
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <Title>Code and Soul</Title>
        </a>
      </Link>
    </HeaderContainer>
  );
}
