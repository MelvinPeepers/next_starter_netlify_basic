import { Context } from "https://edge.netlify.com";

export default async (req: Request, { geo }: Context) => {
    // Bypassing if the request is not from Portugal.
    if (geo.country.code !== "US") {
      return;
    }
  
    return new Response("Hello USA!");
  };