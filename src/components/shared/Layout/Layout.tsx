import { FC, ReactElement } from "react";
import { Footer, Header } from "@/components/widget";
import styles from "./Layout.module.css";

interface Props {
  children: ReactElement;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
