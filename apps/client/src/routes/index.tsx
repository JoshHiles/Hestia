import {  createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { LatestPosts } from "../components/LatestPosts";

export const Route = createFileRoute("/")({
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
