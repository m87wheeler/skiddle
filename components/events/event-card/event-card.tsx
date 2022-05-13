import * as React from "react";
import dayjs from "dayjs";
import {
  EventCardContainer,
  EventContent,
  EventImage,
  EventName,
  EventDescription,
} from "./styles";
import { EventAPIType } from "../../../types";
import Animate from "../../animate/animate";
import Link from "next/link";

const EventCard = ({ ...props }: EventAPIType) => {
  const imageSrc: string = React.useMemo(() => {
    if (props?.xlargeimageurlWebP) return props.xlargeimageurlWebP;
    if (props?.xlargeimageurl) return props.xlargeimageurl;
    return "";
  }, [props.xlargeimageurl, props.xlargeimageurlWebP]);

  return (
    <Animate threshold={0.25}>
      <Link href={`/events/${props?.id}`}>
        <EventCardContainer>
          <EventImage src={imageSrc} />
          <EventContent>
            <EventName>{props?.eventname}</EventName>
            <EventDescription>{props?.description}</EventDescription>
            <p>
              {props?.venue?.name} {props?.venue?.town}
            </p>
            <p>{dayjs(props?.date).format("dddd D MMM")}</p>
          </EventContent>
        </EventCardContainer>
      </Link>
    </Animate>
  );
};

export default EventCard;
