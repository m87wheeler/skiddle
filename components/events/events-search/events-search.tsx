import * as React from "react";
import Button, { ButtonGroup } from "../../form/button/button";
import Input from "../../form/input/input";
import { EventsSearchContainer } from "./styles";

interface Props {
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleReset: () => void;
}

const EventsSearch = ({
  searchTerm,
  handleChange,
  handleSearch,
  handleReset,
}: Props) => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    function handleKeypress(e: KeyboardEvent) {
      if (e.code === "Enter") handleSearch();
    }
    window.addEventListener("keydown", handleKeypress);
    return () => window.removeEventListener("keydown", handleKeypress);
  }, [handleSearch]);

  return (
    <EventsSearchContainer>
      <Input
        name="keywords"
        value={searchTerm}
        placeholder="Artist, venue or keyword"
        onChange={handleChange}
      />
      <ButtonGroup>
        <Button variant="white" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="primary" border onClick={handleReset}>
          Reset
        </Button>
      </ButtonGroup>
    </EventsSearchContainer>
  );
};

export default EventsSearch;
