import { AsteroidImage } from "@/components/shared";
import styles from "./AsteroidCard.module.css";

export const AsteroidCard = () => {
  return (
    <div className={styles.AsteroidCard}>
      <div className={styles.date}>12 сент 2023</div>

      <div className={styles.descriptionBlock}>
        <div className={styles.size}>12 лунных орбит</div>
        <AsteroidImage size="L" />
        <div>
          <div className={styles.name}>2021 FQ</div>
          <div className={styles.radius}>Ø 85 м</div>
        </div>
      </div>

      <div className={styles.actionBlock}>
        <button className={styles.button}>ЗАКАЗАТЬ</button>
        <div className={styles.danger}>
          <span>⚠️</span> Опасен
        </div>
      </div>
    </div>
  );
};
