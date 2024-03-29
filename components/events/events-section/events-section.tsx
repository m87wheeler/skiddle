import * as React from "react";
import { usePage } from "../../../hooks/use-page";
import { useQuery } from "react-query";
import { getEvents } from "../../../queries/get-events";
import { useLastKeyword } from "../../../hooks/use-last-keyword";
import { EventAPIType, QueryType, StorageKeys } from "../../../types";
import EventsList from "../events-list/events-list";
import EventsSearch from "../events-search/events-search";
import Container from "../../layout/container/container";
import Error from "../../ui/error/error";

interface Props {
  initialData: EventAPIType[];
}

const EventsSection = ({ initialData = [] }: Props) => {
  const [maxPage, setMaxPage] = React.useState(1);
  const { page, setPage } = usePage(maxPage);

  const lastKeyword = useLastKeyword();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [keyword, setKeyword] = React.useState(lastKeyword);

  const { data, error, isFetching } = useQuery(
    [QueryType.events, page, keyword],
    () => getEvents(page, keyword),
    { initialData, refetchOnWindowFocus: false, refetchOnMount: true }
  );

  // Set search and keyword to last searched entry
  React.useEffect(() => {
    if (lastKeyword) {
      setSearchTerm(lastKeyword);
      setKeyword(lastKeyword);
    }
  }, [lastKeyword]);

  // Set maximum page offset based on data returned
  React.useEffect(() => {
    setMaxPage((state) => Number(data?.totalcount / data?.pagecount ?? state));
  }, [data]);

  // Handle input change for search bar
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      sessionStorage.setItem(StorageKeys.search, value);
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
    sessionStorage.removeItem(StorageKeys.search);
    sessionStorage.setItem(StorageKeys.page, `${0}`);
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
          handlePage={setPage}
          // handlePage={handlePage}
          loading={isFetching}
        />
      )}
    </Container>
  );
};

export default EventsSection;
