import React, { useEffect, useState } from "react";
import {
  Container,
  ImageCover,
  ImageSlider,
  PopularAnimeInfo,
  PopularAnimeInfoSynopsis,
  PopularAnimeInfoTitle,
  WatchNowButton,
  PopularAnimeInfoTextContainer,
  SliderButton,
  ArrowButtonLogoLeft,
  ArrowButtonLogoRight,
} from "./PopularAnimeSlider.styles";

const apiUrl = "https://api.jikan.moe/v4/seasons/now";

export default function PopularAnimeSlider() {
  // data fetching inside
  const [popularAnimeData, setPopularAnimeData] = useState([]);
  const [shownAnimeIndex, setShownAnimeIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  function slideForward() {
    setShownAnimeIndex((shownAnimeIndex + 1 + 10) % 10);
  }
  function slideBackward() {
    setShownAnimeIndex((shownAnimeIndex - 1 + 10) % 10);
  }

  async function fetchAnimeData() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result.data);
    setPopularAnimeData(result.data.slice(0, 10));
    setLoading(false);
  }

  useEffect(() => {
    console.log(shownAnimeIndex);
  }, [shownAnimeIndex]);
  useEffect(() => {
    console.log(popularAnimeData);
  }, [popularAnimeData]);

  useEffect(() => {
    setLoading(true);
    fetchAnimeData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        <ImageSlider>
          <SliderButton onClick={slideBackward} direction="left">
            <ArrowButtonLogoLeft />
          </SliderButton>
          <SliderButton onClick={slideForward} direction="right">
            <ArrowButtonLogoRight />
          </SliderButton>
          <ImageCover
            src={
              popularAnimeData[shownAnimeIndex]?.trailer?.images
                ?.maximum_image_url
            }
          />
        </ImageSlider>
        <PopularAnimeInfo>
          <PopularAnimeInfoTextContainer>
            <PopularAnimeInfoTitle>
              {popularAnimeData[shownAnimeIndex]?.title}
            </PopularAnimeInfoTitle>
            <PopularAnimeInfoSynopsis>
              {popularAnimeData[shownAnimeIndex]?.synopsis}
            </PopularAnimeInfoSynopsis>
          </PopularAnimeInfoTextContainer>
          <WatchNowButton>Watch Now</WatchNowButton>
        </PopularAnimeInfo>
      </Container>
    );
  }
}
