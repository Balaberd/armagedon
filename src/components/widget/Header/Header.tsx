import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <h2 className={styles.title}>ARMAGEDON 2023</h2>
      <p className={styles.description}>
        ООО “Команда им. Б. Уиллиса”.
        <br />
        Взрываем астероиды с 1998 года.
      </p>
    </div>
  );
};
