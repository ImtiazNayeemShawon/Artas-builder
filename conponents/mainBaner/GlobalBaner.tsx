import useTranslation from "next-translate/useTranslation";
import { Header } from "../MainMenu/header";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import clsx from "clsx";

interface IProps {
   header: JSX.Element,
   classBackground: string
   classBackgroundSx?: string
}

const GlobalBaner :  FC<IProps> = (props) => {
  const router = useRouter();
  const [sticky, setStickyHeader] = useState<boolean>();
  const { t } = useTranslation();


  const handleScroll = () => {
    const position = window.pageYOffset;
    setStickyHeader(position > 45);
};

const [mobile, setMobile] = useState<boolean>();

useEffect(() => {
  if (window.innerWidth + 100 <= window.innerHeight) {
    setMobile(true);
  } else {
    setMobile(false);
  }

  function handleResize() {
    if (window.innerWidth + 100 <= window.innerHeight) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className={styles.containerContact} style={{backgroundImage:  !mobile ?  props.classBackground : props.classBackgroundSx}}>
      <Header sticky={true} />
      <div className={styles.banerContent}>
        <h1 className={clsx(styles.mainHeader, styles.contactHeader)}>
           {props.header}
        </h1>
        <button className={styles.contactButton} onClick={()=>{ router.push({ pathname: '/kontakt' })}}>
           {t("common:contact_us")}
        </button>
      </div>
    </div>
  );
};

export { GlobalBaner };
