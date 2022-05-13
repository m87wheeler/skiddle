import * as React from "react";
import { EventsLoadingContainer } from "./styles";

type Props = {
  text?: string;
  invert?: boolean;
};

const EventsLoading = ({
  text = "Finding more events...",
  invert = false,
}: Props) => {
  return (
    <EventsLoadingContainer invert={invert}>
      <svg
        width="297"
        height="583"
        viewBox="0 0 297 583"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M296.62 6.72839e-05L0.833008 170.773V231.832L81.409 278.349L0.833008 324.872V582.703L296.62 411.933V350.871L216.044 304.353L296.62 257.831V6.72839e-05ZM81.2917 226.553L37.5557 201.3L251.818 77.596V128.099L81.2917 226.553ZM126.206 304.216L171.358 330.287L45.6303 402.875V350.739L126.206 304.216ZM216.161 356.155L259.897 381.403L45.6303 505.111V454.604L216.161 356.155ZM251.818 231.968L171.246 278.487L126.089 252.416L251.818 179.828V231.968" />
      </svg>
      <p>{text}</p>
    </EventsLoadingContainer>
  );
};

export default EventsLoading;
