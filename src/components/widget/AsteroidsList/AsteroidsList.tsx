import { FC, useState } from "react";
import { IAsteroid } from "@/lib/api/types";
import { AsteroidCard } from "@/components/block";
import styles from "./AsteroidsList.module.css";
import cn from "classnames";


interface Props {
  classNames?: string;
  asteroidsList: IAsteroid[];
}

export const AsteroidList: FC<Props> = ({ classNames, asteroidsList }) => {
  return (
    <div className={cn(styles.AsteroidList, classNames)}>
      <div>
        <h3 className={styles.title}>Ближайшие подлёты астероидов</h3>
        <div className={styles.subtitle}>в километрах | в лунных орбитах</div>
      </div>

      <div className={styles.list}>
        {asteroidsList.map((asteroid) => (
          <AsteroidCard key={asteroid.id} asteroid={asteroid} />
        ))}
      </div>
    </div>
  );
};
