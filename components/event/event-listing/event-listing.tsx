import Image from "next/image";
import * as React from "react";
import { EventAPIType, QueryType } from "../../../types";
import Container from "../../layout/container/container";
import dayjs from "dayjs";
import { HeaderImage, EventContent } from "./styles";
import { useQuery } from "react-query";
import { getEvent } from "../../../queries/get-event";
import { useRouter } from "next/router";
import Link from "next/link";

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
        <p>{dayjs(event?.date).format("dddd D MMM")}</p>
        <p>{event?.description}</p>
        <p>£{event?.entryprice}</p>
        <p>{event?.openingtimes?.doorsopen}</p>
        <div>
          {event?.artists?.map((artist: any, i: number) =>
            artist?.artistid ? (
              <Link
                key={artist?.artistid ?? i}
                href={`/artists/${artist?.artistid}`}
              >
                <div>
                  <p>{artist?.name}</p>
                  <img src={artist?.image} alt={artist?.name} />
                </div>
              </Link>
            ) : (
              <p>No artist Id</p>
            )
          )}
        </div>
      </EventContent>
    </Container>
  );
};

export default EventListing;
