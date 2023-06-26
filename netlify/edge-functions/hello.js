export default async (request, context) => {
  console.log("tests")
  return new Response("Hello, World!!", {
    headers: { "content-type": "text/plain" },
  });
};

export const config = { path: "/tests" };



