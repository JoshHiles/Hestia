const server = Bun.serve({
  routes: {
    "/api/topics": new Response("OK"),
  },
});

console.log(`Server running at ${server.url}`);