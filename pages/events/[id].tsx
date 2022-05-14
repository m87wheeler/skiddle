import * as React from "react";
import { StyleContext } from "../../context/style-context";
import EventListing from "../../components/event/event-listing/event-listing";
import Page from "../../components/layout/page/page";
import { getEvent } from "../../queries/get-event";
import Head from "../../components/layout/head/head";

interface Props {
  event: any;
}

const EventPage = ({ event }: Props) => {
  const { setHeaderColor } = React.useContext(StyleContext);
  React.useEffect(() => setHeaderColor("primary"), [setHeaderColor]);

  return (
    <Page>
      <Head
        title={event?.results?.eventname}
        description={event?.results?.description}
      />
      <EventListing initialData={event} />
    </Page>
  );
};

export default EventPage;

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const event = await getEvent(id);
  return { props: { event } };
}
