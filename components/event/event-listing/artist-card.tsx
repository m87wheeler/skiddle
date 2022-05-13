import Link from "next/link";
import * as React from "react";
import { ArtistCardContainer } from "./styles";

interface Props {
  name?: string;
  img?: string;
  href: string;
}

const ArtistCard = ({ name, img, href }: Props) => {
  return (
    <Link href={href}>
      <ArtistCardContainer src={img}>
        <p>{name}</p>
      </ArtistCardContainer>
    </Link>
  );
};

export default ArtistCard;
