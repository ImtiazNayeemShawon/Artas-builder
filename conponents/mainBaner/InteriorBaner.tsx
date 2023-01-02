import { Button } from "antd";
import useTranslation from "next-translate/useTranslation";
import { Header } from "../MainMenu/header";
import styles from "./InteriorStyles.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clsx from "clsx";

const InteriorBaner = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [sticky, setStickyHeader] = useState<boolean>();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setStickyHeader(position > 45);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.containerInterior}>
      <Header sticky={true} />
      <div className={styles.InteriorBanerContent}>
        <h1 className={clsx(styles.InteriorMainHeader, styles.InteriorHeader)}>
          {t("Interior Design ")}
        </h1>
        <button className={styles.InteriorButton}>{t("Kontakt")}</button>
      </div>
    </div>
  );
};

export { InteriorBaner };
