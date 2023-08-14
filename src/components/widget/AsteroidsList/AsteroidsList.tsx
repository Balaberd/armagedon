"use client";

import { FC, useEffect, useState } from "react";
import { IAsteroid, TSizeType } from "@/lib/api/types";
import { AsteroidCard } from "@/components/block";
import styles from "./AsteroidsList.module.css";
import cn from "classnames";
import { getAsteroids } from "@/lib/api/api";

interface Props {
  classNames?: string;
  asteroidsList: IAsteroid[];
  nextAsteroidsListLink: string;
}

export const AsteroidList: FC<Props> = ({
  classNames,
  asteroidsList,
  nextAsteroidsListLink,
}) => {
  const [asteroids, setAsteroids] = useState<IAsteroid[]>(asteroidsList);
  const [sizeType, setSizeType] = useState<TSizeType>("kilometers");
  const [link, setLink] = useState(nextAsteroidsListLink);

  let isLoading = false;

  const createHandlerChangeSizeType = (newSizeType: TSizeType) => () => {
    if (sizeType !== newSizeType) setSizeType(newSizeType);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      console.log("2");
      isLoading = true;
      const data = fetch(link);
      data
        .then((res) => res.json())
        .then((data) => {
          const date = Object.keys(data.near_earth_objects)[0];
          const newAsteroidsList = data.near_earth_objects[date];
          setLink(data.links.next);
          setAsteroids([...asteroids, ...newAsteroidsList]);
          console.log("END");
          console.log(asteroids.length);
          isLoading = false;
        });
    }
  };

  useEffect(() => {
    console.log("USE EFFECT!");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [asteroids]);

  return (
    <div className={cn(styles.AsteroidList, classNames)}>
      <div>
        <h3 className={styles.title}>Ближайшие подлёты астероидов</h3>

        <div className={styles.subtitle}>
          <label
            className={cn(styles.sizeType, {
              [styles.sizeType_checked]: sizeType === "kilometers",
            })}
          >
            <input
              className={styles.radio}
              type="radio"
              name="size"
              checked={sizeType === "kilometers"}
              onChange={createHandlerChangeSizeType("kilometers")}
            />
            <span>в километрах</span>
          </label>
          |
          <label
            className={cn(styles.sizeType, {
              [styles.sizeType_checked]: sizeType === "lunar",
            })}
          >
            <input
              className={styles.radio}
              type="radio"
              name="size"
              checked={sizeType === "lunar"}
              onChange={createHandlerChangeSizeType("lunar")}
            />
            <span>в лунных орбитах</span>
          </label>
        </div>
      </div>

      <div className={styles.list}>
        {asteroids.map((asteroid) => (
          <AsteroidCard
            sizeType={sizeType}
            key={asteroid.id}
            asteroid={asteroid}
          />
        ))}
      </div>
    </div>
  );
};
