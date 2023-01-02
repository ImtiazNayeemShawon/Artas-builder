import { Button } from "antd";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./style.module.scss";
import "animate.css";
import clsx from "clsx";
import { useRouter } from "next/router";

const InfoCard = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className={styles.maxWidth}>
      <div className={styles.container}>
        <div className={clsx(styles.content, styles.right)}>
          <h4 className={styles.header}>{t("about:bygg_and_design.header")}</h4>
          <div className={styles.divider}></div>
          <p>{t("about:bygg_and_design.paragraph1")}</p>
          <p>
            <b>{t("about:bygg_and_design.paragraph2")}</b>
          </p>
          <div>
          <Button className={styles.button} style={{ marginTop: "30px" }} onClick={()=>{ router.push({ pathname: '/contact' })}}>
            {t("about:bygg_and_design.button")}
          </Button>
          </div>
        </div>
        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__flipInX"
          animateOnce={true}
        >
          <div className={clsx(styles.image, styles.right)}>
            <Image
              src="/kuchnia.png"
              alt="home"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__flipInX"
          animateOnce={true}
        >
          <div className={styles.imageMobile}>
            <Image
              src="/kuchniaSx.png"
              alt="home"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default InfoCard;
