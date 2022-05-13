import * as React from "react";
import ArtistListing from "../../components/artists/artist-listing/artist-listing";
import { getArtist } from "../../queries/get-artist";
import { StyleContext } from "../../context/style-context";
import Page from "../../components/layout/page/page";

interface Props {
  artist: any;
}

const EventPage = ({ artist }: Props) => {
  const { setHeaderColor } = React.useContext(StyleContext);
  React.useEffect(() => setHeaderColor("primary"), [setHeaderColor]);

  return (
    <Page>
      <ArtistListing initialData={artist} />
    </Page>
  );
};

export default EventPage;

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const artist = await getArtist(id);
  return { props: { artist } };
}
