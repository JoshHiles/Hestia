import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { Hero } from "../components/Hero";
import { LatestPosts } from "../components/LatestPosts";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <LatestPosts />
    </>
  );
}
