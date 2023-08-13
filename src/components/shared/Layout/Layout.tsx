import { FC, ReactElement } from "react";
import { Footer, Header } from "@/components/widget";
import cn from "classnames";
import styles from "./Layout.module.css";

interface Props {
  children: ReactElement;
  contentWrapperClassNames?: string;
  contentTitle?: string | ReactElement;
  contentSubtitle?: string | ReactElement;
}

export const Layout: FC<Props> = ({
  children,
  contentWrapperClassNames,
  contentTitle,
  contentSubtitle,
}) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={cn(styles.content, contentWrapperClassNames)}>
        <div>
          <h3 className={styles.title}>{contentTitle}</h3>
          <div className={styles.subtitle}>{contentSubtitle}</div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};
