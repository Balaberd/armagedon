import { MainPage } from "@/components/pages";
import { getTestData } from "@/lib/api/api";
import { IAsteroidResponse } from "@/lib/api/types";

export default async function Home() {
  const data: IAsteroidResponse = await getTestData();

  return (
    <main>
      <MainPage data={data} />
    </main>
  );
}
