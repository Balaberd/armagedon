import { FC } from "react";
import { Layout } from "@/components/shared";
import { AsteroidCard } from "@/components/block";
import { IAsteroidResponse } from "@/lib/api/types";
import styles from "./MainPage.module.css";

interface Props {
  data: IAsteroidResponse;
}

export const MainPage: FC<Props> = ({ data }) => {
  const subtitle = <div className={styles.subtitle}>subtitle</div>;

  const date = Object.keys(data.near_earth_objects)[0];
  const asteroids = data.near_earth_objects[date];

  return (
    <Layout
      contentTitle="Ближайшие подлёты астероидов"
      contentSubtitle={subtitle}
      contentWrapperClassNames={styles.content}
    >
      <div className={styles.list}>
        {asteroids.map((asteroid) => {
          return <AsteroidCard asteroid={asteroid} key={asteroid.id} />;
        })}
      </div>
    </Layout>
  );
};
