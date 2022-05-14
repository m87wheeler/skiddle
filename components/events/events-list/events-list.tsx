import * as React from "react";
import EventCard from "../event-card/event-card";
import { EventAPIType } from "../../../types";
import { EventsListContainer, EventsListItems } from "./styles";
import Button, { ButtonGroup } from "../../form/button/button";
import EventsLoading from "./events-loading";

interface Props extends React.ComponentPropsWithoutRef<"section"> {
  events: EventAPIType[];
  handlePage: (i: number) => React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}

const EventsList = ({ events, handlePage, loading, ...props }: Props) => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!loading) window.scrollTo(0, 0);
  }, [loading]);

  return (
    <EventsListContainer {...props}>
      {loading ? (
        <EventsLoading />
      ) : (
        <>
          <EventsListItems>
            {events?.length &&
              events.map((event, i) => (
                <li key={event?.id ?? i}>
                  <EventCard {...event} />
                </li>
              ))}
          </EventsListItems>
          {events?.length > 20 && (
            <ButtonGroup>
              <Button invert onClick={handlePage(-1)}>
                Prev
              </Button>
              <Button invert onClick={handlePage(1)}>
                Next
              </Button>
            </ButtonGroup>
          )}
        </>
      )}
    </EventsListContainer>
  );
};

export default EventsList;
