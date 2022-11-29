import React from "react";
import {
  CardContainers,
  AnimePoster,
  AnimeName,
  AnimePosterContainer,
} from "./AnimeCard.style";
import { dummyData } from "../../utils/SampleAnimeData";

export default function AnimeCard({ name, image_url }) {
  return (
    <CardContainers>
      <AnimePosterContainer>
        <AnimePoster alt={name} src={image_url} />
      </AnimePosterContainer>
      <AnimeName>{name}</AnimeName>
    </CardContainers>
  );
}
