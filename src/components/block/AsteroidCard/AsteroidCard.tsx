import { AsteroidImage } from "@/components/shared";
import styles from "./AsteroidCard.module.css";
import { IAsteroid, TSizeType } from "@/lib/api/types";
import { FC } from "react";

const SIZE_TYPE_DESCRIPTION_MAP = {
  kilometers: "километров",
  lunar: "лунных орбит",
};

interface Props {
  asteroid: IAsteroid;
  sizeType: TSizeType;
}

export const AsteroidCard: FC<Props> = ({ asteroid, sizeType }) => {
  const missDistance = asteroid.close_approach_data[0].miss_distance[sizeType];

  const iconAsteroidType =
    asteroid.estimated_diameter.meters.estimated_diameter_max > 200 ? "L" : "S";

  return (
    <div className={styles.AsteroidCard}>
      <div className={styles.date}>
        {asteroid.close_approach_data[0].close_approach_date}
      </div>

      <div className={styles.descriptionBlock}>
        <div className={styles.size}>
          {(+missDistance).toFixed(1)} {SIZE_TYPE_DESCRIPTION_MAP[sizeType]}
        </div>
        <AsteroidImage size={iconAsteroidType} />
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
