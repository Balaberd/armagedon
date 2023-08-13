import { getTestData } from "@/lib/api/api";
import { IAsteroidResponse } from "@/lib/api/types";
import { AsteroidList } from "@/components/widget";

export default async function Home() {
  const data: IAsteroidResponse = await getTestData();

  const date = Object.keys(data.near_earth_objects)[0];
  const asteroids = data.near_earth_objects[date];

  return <AsteroidList asteroidsList={asteroids} />;
}
