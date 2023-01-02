import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./style.module.scss";
import "animate.css";
import { FC } from "react";

interface IProps {
  imgSrc: string;
  altImg: string;
  imgSrcMobile: string;
  headerText: string;
  content: JSX.Element;
}

const InfoCard: FC<IProps> = (props) => {

  return (
    <div className={styles.maxWidth}>
      <div className={styles.container}>
        <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__backInLeft"
          animateOnce={true}
        >
          <div className={styles.image}>
            <Image
              src={props.imgSrc}
              alt={props.altImg}
              objectFit="contain"
              layout="fill"
            />
          </div>
        </AnimationOnScroll>

        <div className={styles.content}>
          <div className={styles.contentCenter}>
            <h4 className={styles.header}>{props.headerText}</h4>
            <div className={styles.divider}></div>
            <>{props.content}</>
          </div>
        </div>
        <div className={styles.mobile}>
          <AnimationOnScroll
             animateOnce={true}
            initiallyVisible={false}
            animateIn="animate__shakeY"
          >
            <div className={styles.imageMobile}>
              <Image
                src={props.imgSrcMobile}
                alt={props.altImg}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
