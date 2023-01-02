import useTranslation from "next-translate/useTranslation";
import { Header } from "../MainMenu/header";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainBaner = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [sticky, setStickyHeader] = useState<boolean>();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setStickyHeader(position > 45);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className={styles.christmas}>
      {/* <Header sticky={sticky ?? false} /> */}
      <Header sticky={true} />
      <div
        className={
          styles.christmasStar
          // Math.floor(Math.random() * 11) > 3 ? styles.building : styles.building
        }
      ></div>
          <div
        className={
          styles.christmasStar2
          // Math.floor(Math.random() * 11) > 3 ? styles.building : styles.building
        }
      ></div>
      <div className={styles.banerContentChristmas}>
        {/* <h3 className={styles.topHeader}>{t("common:top_header")}</h3> */}
        {/* <div className={styles.divider}></div> */}
        {/* <h1 className={styles.mainHeader}>
          {router.locale === "en" ? (
            <>
              {" "}
              {t("common:main_header1")} <br /> {t("common:main_header2")}
            </>
          ) : (
            <>{t("common:main_header2")}</>
          )}
        </h1> */}
        {/* <div className={styles.bottomHeader}>{t("common:bottom_header")}</div> */}
        {/* style = contactButton */}
        <button className={styles.contactButtonChrsitmas} onClick={()=>{ router.push({ pathname: '/kontakt' })}}>
          {t("common:contact_us")}
        </button>
      </div>
    </div>
  );
};

export { MainBaner };
