import { Context } from "https://edge.netlify.com";

export default async (request, context) => {
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     latitude?: number;
  //     longitude?: number;
  //     timezone?: string;
  //   }
  // }

  return new Response(JSON.stringify({
    geo: context.geo,
  }), {
    headers: { "content-type": "application/json" },
  });
};
