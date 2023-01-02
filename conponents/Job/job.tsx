import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";

const Job = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__tada"
        >
          <div className={styles.textBox}>
            <h3>24/7</h3>
            <h3>{t("about:title1.header")}</h3>
            <div>{t("about:title1.text")}</div>
          </div>
        </AnimationOnScroll>
        <div className={styles.textBox}>
          <h3 style={{ color: "rgba(0,0,0,0.7)" }}>{t("about:title2.header")}</h3>
          <div>{t("about:title2.text")}</div>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.image}>
          
          <Image
            src="/worker.png"
            alt="worker"
            height={300}
            width={300}
            layout="fixed"
          />
        </div>
        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__tada"
        >
          <div className={styles.textBoxBig}>
            <h3>{t("about:title3.header")}</h3>
            <div>{t("about:title3.text")}</div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Job;
