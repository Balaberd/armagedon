import { Layout } from "@/components/shared";
import styles from "./MainPage.module.css";
import { AsteroidCard } from "@/components/block";

export const MainPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>Ближайшие подлёты астероидов</h3>
          <div className={styles.subtitle}>subtitle</div>
        </div>
        <div className={styles.list}>
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
          <AsteroidCard />
        </div>
      </div>
    </Layout>
  );
};
