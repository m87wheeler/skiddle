import * as React from "react";
import EventsLoading from "../../events/events-list/events-loading";
import Page from "../../layout/page/page";

const PageTransition = () => {
  return (
    <Page>
      <EventsLoading />
    </Page>
  );
};

export default PageTransition;
