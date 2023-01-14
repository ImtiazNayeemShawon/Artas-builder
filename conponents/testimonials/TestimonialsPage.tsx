import React from "react";
import { TestimonialTile } from "./TestimonialTile";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import svJSON from "../../locales/sv/testimonials.json" assert { type: "json" };

export const TestimonialsPage: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.testimonialsPage}>
      <Title />
      <TilesContainer />
      <button
        className={styles.contactButton}
        onClick={() => {
          router.push({ pathname: "/contact" });
        }}
      >
        {t("common:contact_us")}
      </button>
    </div>
  );
};

const TilesContainer = () => {
  const textsArrayMaker = () => {
    const textsCount = svJSON.texts.length;
    const textsArray = [];
    for (let i = 0; i < textsCount; i++) {
      textsArray.push(i);
    }
    return textsArray;
  };
  const TEXTS: Array<number> = textsArrayMaker();
  const { t } = useTranslation();

  return (
    <div className={styles.tilesContainer}>
      {TEXTS.map((item) => (
        <TestimonialTile
          key={item}
          person={t(`testimonials:texts.${item}.person`)}
          description={t(`testimonials:texts.${item}.description`)}
        />
      ))}
    </div>
  );
};

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.heading}>
      <h3> {t(`Våra tidigare kunder berättar`)}</h3>
    </div>
  );
};
