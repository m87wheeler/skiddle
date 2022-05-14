import * as React from "react";
import { StyleContext } from "../context/style-context";
import EventsSection from "../components/events/events-section/events-section";
import Page from "../components/layout/page/page";
import { getEvents } from "../queries/get-events";
import Head from "../components/layout/head/head";

type Props = {
  events: any;
};

const Home = ({ events }: Props) => {
  const { setHeaderColor } = React.useContext(StyleContext);
  React.useEffect(() => setHeaderColor("white"), [setHeaderColor]);

  return (
    <Page>
      <Head
        title="Discover Great Events"
        description="The leading Ticket Sales, Clubs Listings, Events &amp; What's On Guide website in the UK.  Skiddle: discover great events"
      />
      <EventsSection initialData={events} />
    </Page>
  );
};

export default Home;

export async function getStaticProps() {
  const events = await getEvents(0);
  return { props: { events } };
}
