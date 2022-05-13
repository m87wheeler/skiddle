import * as React from "react";
import { ArtistCardContainer } from "./styles";

interface Props {
  name?: string;
  img?: string;
}

const ArtistCard = ({ name, img }: Props) => {
  return (
    <ArtistCardContainer>
      <p>{name}</p>
      <img src={img} alt={name} />
    </ArtistCardContainer>
  );
};

export default ArtistCard;
