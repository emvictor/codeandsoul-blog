import {
  Container,
  Link,
  Logo,
  Text,
} from "../../styles/components/footer.styles";

export default function Footer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Footer.Logo = function FooterLogo({ children, ...props }) {
  return <Logo {...props}>{children}</Logo>;
};

Footer.Text = function FooterText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
