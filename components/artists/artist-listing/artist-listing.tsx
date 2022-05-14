import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useQuery } from "react-query";
import { getArtist } from "../../../queries/get-artist";
import { QueryType } from "../../../types";
import ContentBlock from "../../layout/content-block/content-block";
import Container from "../../layout/container/container";
import Liked from "../../ui/liked/liked";
import { HeaderImage, ArtistContent } from "./styles";

interface Props {
  initialData?: any;
}

const ArtistListing = ({ initialData }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const routeId: string = React.useMemo(() => {
    return Array.isArray(id) ? id[0] : id ?? "";
  }, [id]);

  const { status, data, error, isFetching, isPreviousData } = useQuery(
    [QueryType.artist],
    () => getArtist(routeId),
    { initialData, refetchOnWindowFocus: false, refetchOnMount: true }
  );

  const artist: any = React.useMemo(() => data?.results ?? [], [data?.results]);

  return (
    <Container>
      <HeaderImage src={artist?.imageurl ?? ""} />
      <ArtistContent>
        <h1>{artist?.name}</h1>
        <Liked likes={artist?.favouritesCount} />
        <ContentBlock paragraph={artist?.description} />
      </ArtistContent>
    </Container>
  );
};

export default ArtistListing;
