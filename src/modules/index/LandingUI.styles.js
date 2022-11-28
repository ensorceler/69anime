import styled from "styled-components";
import colorTheme from "../../styles/Colors";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const LogoContainer = styled.div`
  font-size: 28px;
  color: ${colorTheme.buttonColor};
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SearchInput = styled.input`
  height: 35px;
  width: 375px;
  background-color: ${colorTheme.greyColor};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: #fff;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
export const SearchButton = styled.button`
  height: 65px;
  width: 65px;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${colorTheme.buttonColor};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const GotoHomePageButton = styled(Link)`
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  background-color: ${colorTheme.buttonColor};
  &:active {
    transform: scale(0.95);
  }
`;

export const SearchIcon = styled(BiSearchAlt2)``;
