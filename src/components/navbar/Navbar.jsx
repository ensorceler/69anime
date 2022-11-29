import {
  NavContainer,
  HamburgerMenu,
  LeftSection,
  LogoContainer,
  SignInButton,
} from "./Navbar.styles";

export default function Navbar() {
  return (
    <NavContainer>
      <LeftSection>
        <HamburgerMenu size={40} />
        <LogoContainer>
          <h1>69anime</h1>{" "}
        </LogoContainer>
      </LeftSection>
      <SignInButton>
        <p>Sign In</p>
      </SignInButton>
    </NavContainer>
  );
}
