export const getArtist = async (artistId: string) => {
  try {
    const req = await fetch(
      `https://www.skiddle.com/api/v1/artist/${artistId}/?api_key=${process.env.NEXT_PUBLIC_SKIDDLE_KEY}`
    );
    if (!req.ok) throw new Error(req?.statusText);
    const res = await req.json();
    return res;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unknown error fetching events");
  }
};
