import {
  GotoHomePageButton,
  LogoContainer,
  SearchBarContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
  UIContainer,
  Wrapper,
} from "./LandingUI.styles";

export default function LandingUI() {
  return (
    <Wrapper>
      <UIContainer>
        <LogoContainer>
          <h1>69anime</h1>
        </LogoContainer>
        <SearchBarContainer>
          <SearchInput placeholder="Enter anime name..." />
          <SearchButton>
            <SearchIcon size={30} />
          </SearchButton>
        </SearchBarContainer>
        <GotoHomePageButton to="/home">Go to home page</GotoHomePageButton>
      </UIContainer>
    </Wrapper>
  );
}

// 9anime.to
/***
 * 
 * 9anime.to - Just a better place to watch anime online for free!
  add this  
 */
