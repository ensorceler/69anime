import styled from "styled-components";
import colorTheme from "../../styles/Colors";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Container = styled.div`
  max-width: 891px;
  display: flex;
  flex-direction: column;
  height: 400px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  // outline: 1px solid white;
`;

export const ImageSlider = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 75%;
  position: relative;
  background-size: cover;
`;
export const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const PopularAnimeInfo = styled.div`
  background-color: ${colorTheme.buttonColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 25%;
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  padding: 15px;
`;

export const PopularAnimeInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const PopularAnimeInfoTitle = styled.p`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: -5px;
  margin-top: 10px;
`;
export const PopularAnimeInfoSynopsis = styled.p`
  //outline: 1px solid green;
  font-size: 13px;
  color: #c4ace6;
  margin-bottom: 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const WatchNowButton = styled.button`
  height: 70px;
  width: 240px;
  background-color: #fff;
  color: #212121;
  padding: 0;
  border-radius: 40px;
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  height: 100px;
  width: 40px;
  top: 100px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.direction === "left") {
      return `left:0px; 
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
      
      `;
    } else {
      return `right:0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
      `;
    }
  }}

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
export const ArrowButtonLogoLeft = styled(FaAngleLeft)`
  font-size: 40px;
  line-height: 80px;
  color: #5a2e98;
  font-weight: 900;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ArrowButtonLogoRight = styled(FaAngleRight)`
  font-size: 40px;
  line-height: 80px;
  color: #5a2e98;
  font-weight: 900;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export const SliderPagination = styled.div``;
