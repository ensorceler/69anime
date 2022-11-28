import styled from "styled-components";
import colorTheme from "../../styles/Colors";
import { BiMenu } from "react-icons/bi";

export const NavContainer = styled.div`
  height: 60px;
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  border: none;
  z-index: 100;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoContainer = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  color: ${colorTheme.buttonColor};
`;

export const HamburgerMenu = styled(BiMenu)`
  &:hover {
    color: ${colorTheme.buttonColor};
    cursor: pointer;
  }
`;

export const SignInButton = styled.button`
  background-color: ${colorTheme.buttonColor};
  height: 50px;
  padding: 0 20px;
  border-radius: 30px;
  min-width: 120px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 5px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
