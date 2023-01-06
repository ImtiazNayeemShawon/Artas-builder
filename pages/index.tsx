import type { NextPage } from "next";
import React, { Suspense } from "react";
import { MainBaner } from "../conponents/mainBaner/mainBaner";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import InfoCardLeft from "../conponents/infoCard/infoCardLeft";
import InfoCardRight from "../conponents/infoCard/infoCardRight";
import useTranslation from "next-translate/useTranslation";
import Job from "../conponents/Job/job";
import { Button } from "antd";
import Slider from '../conponents/slider/slider';
import styles from "../conponents/infoCard/style.module.scss";
import { ContactMainPage } from "../conponents/contact/contactMainPage";
import Footer from "../conponents/footer/footer";
import {
  InstagramOutlined, FacebookOutlined
} from '@ant-design/icons';
import Link from "next/link";
const Home: NextPage = () => {
  let router = useRouter();

  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <div style={{position: 'relative'}}>
        <div className="stickySocial">
           <Link href="https://www.facebook.com/profile.php?id=100087368812278">
             <FacebookOutlined />
          </Link>
        </div>
        <div className="stickySocial2">
           <Link href="https://instagram.com/artasbyggab?igshid=YmMyMTA2M2">
            <InstagramOutlined />
            </Link>
        </div>
        <header>
          <MainBaner />
        </header>
        <main>
          <InfoCardLeft
            imgSrcMobile="/homeS.png"
            imgSrc="/home.png"
            altImg="home"
            headerText={t("about:arts_team.header")}
            content={
              <>
                <p>{t("about:arts_team.paragraph1")}</p>
                <p>
                  <b>{t("about:arts_team.paragraph2")}</b>
                </p>
                <p>{t("about:arts_team.paragraph3")}</p>
                <Button className={styles.button} onClick={()=>{ router.push({ pathname: '/referenser' })}}>
                  {t("about:arts_team.button")}
                </Button>
              </>
            }
          />
          <InfoCardRight />
          <InfoCardLeft
            content={
              <>
                <p className={styles.pSmall}>{t("about:construction_mashinery.paragraph1")}</p>
                <p>
                  <b>{t("about:construction_mashinery.paragraph2")}</b>
                </p>
                <p className={styles.pSmall}>{t("about:construction_mashinery.paragraph3")}</p>
                <Button className={styles.button} onClick={()=>{ router.push({ pathname: '/realization' })}}>
                  {t("about:construction_mashinery.button")}
                </Button>
              </>
            }
            imgSrcMobile="/machineS.jpg"
            imgSrc="/machine.png"
            altImg="machine"
            headerText={t("about:construction_mashinery.header")}
          />
          <Job />
          <div className="RealizationHedaer"> We take care of you 	&hearts; </div>
          <Slider />
          <ContactMainPage/>
          <div style={{width:"100%", height: "100px"}}></div>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </Suspense>
  );
};

export default Home;
