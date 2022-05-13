export const getEvents = async (page: number = 0, keyword?: string) => {
  try {
    const req = await fetch(
      `https://www.skiddle.com/api/v1/events/search/?api_key=${
        process.env.NEXT_PUBLIC_SKIDDLE_KEY
      }&offset=${page * 20}&keyword=${keyword}`
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
