import { Button } from "antd";
import useTranslation from "next-translate/useTranslation";
import { Header } from "../MainMenu/header";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clsx from "clsx";


const ContactBaner = () => {
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
    <div className={styles.containerContact}>
      <Header sticky={true} />
      <div className={styles.banerContent}>
        <h1 className={clsx(styles.mainHeader, styles.contactHeader)}>
          {t("contact:main_header1")} <br /> {t("contact:main_header2")}
        </h1>
        <button className={styles.contactButton} onClick={()=>{ router.push({ pathname: '/referenser' })}}>
          {t("contact:our_realization")}
        </button>
      </div>
    </div>
  );
};

export { ContactBaner };
