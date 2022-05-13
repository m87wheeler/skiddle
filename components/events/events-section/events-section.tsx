import * as React from "react";
import { useQuery } from "react-query";
import { getEvents } from "../../../queries/get-events";
import { EventAPIType, QueryType } from "../../../types";
import EventsList from "../events-list/events-list";
import EventsSearch from "../events-search/events-search";
import Container from "../../layout/container/container";
import Error from "../../ui/error/error";

interface Props {
  initialData: EventAPIType[];
}

const EventsSection = ({ initialData = [] }: Props) => {
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [keyword, setKeyword] = React.useState("");

  const { data, error, isFetching } = useQuery(
    [QueryType.events, page, keyword],
    () => getEvents(page, keyword),
    { initialData }
  );

  // Handle pagination
  const handlePage = React.useCallback(
    (i: number) => () => {
      setPage((n) => {
        if (n + i < 0) return n;
        if (n + i > 100) return n;
        return n + i;
      });
    },
    []
  );

  // Handle input change for search bar
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchTerm(value);
    },
    []
  );

  // Handle query submit for search bar
  const handleSearch = React.useCallback(() => {
    if (!searchTerm) return;
    setKeyword(searchTerm);
  }, [searchTerm]);

  // Handle reset search and refetch
  const handleReset = React.useCallback(() => {
    setKeyword("");
    setSearchTerm("");
  }, []);

  return (
    <Container>
      <EventsSearch
        handleSearch={handleSearch}
        handleChange={handleChange}
        handleReset={handleReset}
        searchTerm={searchTerm}
      />
      {error ? (
        <Error error={`${error}`} />
      ) : (
        <EventsList
          events={data?.results}
          handlePage={handlePage}
          loading={isFetching}
        />
      )}
    </Container>
  );
};

export default EventsSection;
