import { fetch } from "https://cdnjs.cloudflare.com/ajax/libs/node-fetch/2.6.1/index.js";

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

  const response = await fetch("https://edge.netlify.com", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      request: request,
      context: context,
    }),
  });

  const responseBody = await response.json();

  return responseBody;
};

