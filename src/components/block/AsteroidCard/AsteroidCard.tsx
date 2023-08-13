import { AsteroidImage } from "@/components/shared";
import styles from "./AsteroidCard.module.css";
import { IAsteroid } from "@/lib/api/types";
import { FC } from "react";

interface Props {
  asteroid: IAsteroid;
}

export const AsteroidCard: FC<Props> = ({ asteroid }) => {
  return (
    <div className={styles.AsteroidCard}>
      <div className={styles.date}>
        {asteroid.close_approach_data[0].close_approach_date}
      </div>

      <div className={styles.descriptionBlock}>
        <div className={styles.size}>
          {(+asteroid.close_approach_data[0].miss_distance.lunar).toFixed(1)}{" "}
          лунных орбит
        </div>
        <AsteroidImage size="L" />
        <div>
          <div className={styles.name}>{asteroid.name}</div>
          <div className={styles.radius}>
            Ø{" "}
            {(+asteroid.estimated_diameter.meters
              .estimated_diameter_max).toFixed(2)}{" "}
            м
          </div>
        </div>
      </div>

      <div className={styles.actionBlock}>
        <button className={styles.button}>ЗАКАЗАТЬ</button>
        {asteroid.is_potentially_hazardous_asteroid && (
          <div className={styles.danger}>
            <span>⚠️</span> Опасен
          </div>
        )}
      </div>
    </div>
  );
};
