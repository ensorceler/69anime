import React from "react";
import * as StyleSheet from "./SeaonalAnimeCards.styles";
import AnimeCard from "../../components/cards/AnimeCard";
import { dummyData } from "../../utils/SampleAnimeData";

export default function SeasonalAnimeCards() {
  return (
    <StyleSheet.Container>
      <StyleSheet.Header>Recently Added</StyleSheet.Header>
      <StyleSheet.CardsContainer>
        {dummyData.map((anime) => (
          <>
            <AnimeCard
              name={anime.title}
              image_url={anime.images.jpg.image_url}
            />
          </>
        ))}
      </StyleSheet.CardsContainer>
    </StyleSheet.Container>
  );
}
