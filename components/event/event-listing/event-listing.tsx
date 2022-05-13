import Image from "next/image";
import * as React from "react";
import { EventAPIType, QueryType } from "../../../types";
import Container from "../../layout/container/container";
import dayjs from "dayjs";
import { HeaderImage, EventContent, EventDate, EventDoors } from "./styles";
import { useQuery } from "react-query";
import { getEvent } from "../../../queries/get-event";
import { useRouter } from "next/router";
import Link from "next/link";
import ArtistCard from "./artist-card";

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
    <Container>
      <HeaderImage src={event?.largeimageurl ?? ""} />
      <EventContent>
        <h1>{event?.eventname}</h1>
        <EventDate>{dayjs(event?.date).format("dddd D MMM")}</EventDate>
        <p>{event?.description}</p>
        <p>{event?.entryprice}</p>
        <EventDoors>
          <span>Doors open @</span> {event?.openingtimes?.doorsopen}
        </EventDoors>
        <>
          <h2>Featuring</h2>
          {event?.artists?.map((artist: any, i: number) =>
            artist?.artistid ? (
              <Link
                key={artist?.artistid ?? i}
                href={`/artists/${artist?.artistid}`}
              >
                <ArtistCard name={artist?.name} img={artist?.image} />
              </Link>
            ) : (
              <p>No artist Id</p>
            )
          )}
        </>
      </EventContent>
    </Container>
  );
};

export default EventListing;
