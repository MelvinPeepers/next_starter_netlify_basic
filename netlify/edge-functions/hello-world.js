// the default export contains the handler function that runs when you make requests to the edge function. It often contains logic to modify requests and responses
export default () => new Response("Hello World!");

// 
export const config = { path: "/test" };