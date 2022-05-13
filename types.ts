export enum QueryType {
  artist = "artist",
  event = "event",
  events = "events",
}

export type EventAPIType = {
  id?: string;
  listingid?: string;
  uniquelistingidentifier?: string;
  hascollapsedresults?: boolean;
  countcollapsedresults?: number;
  EventCode?: string;
  eventname?: string;
  cancelled?: string;
  cancellationDate?: string;
  cancellationType?: string;
  cancellationReason?: string;
  rescheduledDate?: string;
  venue?: {
    id?: string;
    name?: string;
    address?: string;
    town?: string;
    postcode_lookup?: string;
    postcode?: string;
    country?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
    type?: string;
    rating?: number;
    reviewCount?: number;
  };
  imageurl?: string;
  largeimageurl?: string;
  xlargeimageurl?: string;
  xlargeimageurlWebP?: string;
  link?: string;
  date?: string;
  startdate?: string;
  enddate?: string;
  description?: string;
  openingtimes?: {
    doorsopen?: string;
    doorsclose?: string;
    lastentry?: string;
  };
  minage?: string;
  imgoing?: null;
  goingtos?: number;
  goingtocount?: string;
  tickets?: boolean;
  entryprice?: string;
  eventvisibility?: string;
  ticketUrl?: string;
  rep?: {
    enabled?: boolean;
    eligible?: boolean;
    minCommission?: number;
    maxCommission?: number;
  };
  headerHex?: string;
  healthAndSafety?: any[];
  artists?: {
    artistId?: string;
    image?: string;
    name?: string;
    spotifyartisturl?: string;
    spotifymp3url?: string;
  }[];
};

export type VariantType = "primary" | "secondary" | "white";

type PaletteType = {
  [variant in VariantType]: {
    _: string;
    contrast: string;
  };
};

type FontSizeType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";
type FontSizeMappedType = {
  [size in FontSizeType]: string;
};

export interface ITheme {
  palette: PaletteType;
  font: {
    family: {
      sans: string;
      serif?: string;
    };
    size: FontSizeMappedType;
  };
  ui: {
    shadow: string;
    shadow2?: string;
    shadowHover?: string;
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    maxWidth: number;
  };
}
