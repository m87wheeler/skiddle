import * as React from "react";
import { EventAPIType, QueryType } from "../../../types";
import dayjs from "dayjs";
import {
  EventContainer,
  HeaderImage,
  EventContent,
  ArtistContent,
} from "./styles";
import { useQuery } from "react-query";
import { getEvent } from "../../../queries/get-event";
import { useRouter } from "next/router";
import ArtistCard from "./artist-card";
import ContentBlock from "../../layout/content-block/content-block";

interface event {
  initialData: EventAPIType[];
}

const EventListing = ({ initialData = [] }: event) => {
  const router = useRouter();
  const { id } = router.query;

  const routeId: string = React.useMemo(() => {
    return Array.isArray(id) ? id[0] : id ?? "";
  }, [id]);

  const { status, data, error, isFetching, isPreviousData } = useQuery(
    [QueryType.event],
    () => getEvent(routeId),
    { initialData }
  );

  const event = React.useMemo(() => data?.results ?? [], [data?.results]);

  return (
    <EventContainer>
      <HeaderImage src={event?.largeimageurl ?? ""} />
      <EventContent>
        <h1>{event?.eventname}</h1>
        <p>{dayjs(event?.date).format("dddd D MMM")}</p>
        <ContentBlock paragraph={event?.description} />
        {event?.entryprice && <p>{event?.entryprice}</p>}
        <p>
          <span>Doors open @</span> {event?.openingtimes?.doorsopen}
        </p>
      </EventContent>
      <ArtistContent>
        {event?.artists?.map((artist: any, i: number) => {
          return artist?.artistid ? (
            <ArtistCard
              key={artist?.artistid ?? i}
              href={`/artists/${artist?.artistid}`}
              name={artist?.name}
              img={artist?.image}
            />
          ) : (
            <p>No artist Id</p>
          );
        })}
      </ArtistContent>
    </EventContainer>
  );
};

export default EventListing;
