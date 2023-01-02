import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import tlo from "../public/lagen.jpg";
import tloSx from "../public/lagen_sx.jpg";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";
import Link from "next/link";

const Lagenhetsrenovering: NextPage = () => {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState<boolean>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.innerWidth + 100 <= window.innerHeight) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  return (
    <Suspense fallback="loading">
      <Head>
        <title>Artas Bygg l Lägenhetsrenovering Stockholm</title>
        <meta
          name="description"
          content="Går du i tankarna på att renovera lägenheten i Stockholm? Anlita
          oss på Artas Bygg! Låt oss hjälpa er få en fräsch och fin lägenhet."
          key="desc"
        />
      </Head>

      <div>
        <header>
          <GlobalBaner
            classBackgroundSx={tloSx.src}
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.flat_renovations")}
              </span>
            }
            classBackground={`url(${tlo.src})`}
          />
        </header>

        <main
          style={{
            padding: "10% 10%",
            fontSize: "18px",
            textAlign: mobile ? "justify" : "left",
          }}
        >
          {mobile ? (
            <h2 style={{ textAlign: "center" }}>
              Lägenhetsrenovering Stockholm
            </h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Lägenhetsrenovering Stockholm</h2>
            </Divider>
          )}
          Drömmer ni om en fin lägenhetsrenovering och bor i Stockholm? Kontakta
          oss när ni behöver få tag i en bra hantverkarfirma som utför
          lägenhetsrenovering i Stockholm. Vi arbetar i Stockholm och erbjuder
          renovering av er lägenhet till rimliga priser och med hög kvalitet och
          kompetens. Vi arbetar för att er lägenhet ska bli renoverad så som ni
          önskar er den. Skulle ni behöva en arkitektritning för att
          lägenhetsrenovering ska bli så snygg som möjligt så kan vi hjälpa er
          även med det. Vårt företag har ett brett nätverk av hantverkare,
          arkitekter och inredningsdesigner så därför kan vi hjälpa er att få en
          fin ritning för er lägenhetsrenovering i Stockholm. Att ha slitna ytor
          i en lägenhet ger en trist känsla och kan irritera den som önskar att
          ha fina ytor på väggar och golv. Ta kontakt med oss på ARTAS Bygg så
          kommer vi ut och berättar om hur vi kan hjälpa er få en fräsch och fin
          lägenhet!
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Vi erbjuder lägenhetsrenovering i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vi erbjuder lägenhetsrenovering i Stockholm</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg har hantverkare med kompetenser att genomföra
          badrumsrenovering i Stockholm och köksrenovering i Stockholm samt måla
          eller tapetsera alla rum. Vi har hantverkare som kan montera köks- och
          badrumsinredning, lägga nya golv och elektriker som kan dra nya
          elledningar. Om ni vill ändra plats för era handfat, toaletter,
          diskbänk med mera, så har vi VVS-montörer som kan dra VA-rör.
          <div style={{ textAlign: "left" }}>
            <div>
              <CheckSquareOutlined
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#423FE8",
                  marginRight: "10px",
                }}
              />{" "}
              Totalrenovering{" "}
            </div>
          </div>
          En totalrenovering inbegriper renovering av hela lägenheten, såsom
          väggar, golv och en omfattande rivning samt tapetsering, golvslipning,
          eller så lägger vi helt nya golv och montering av inredning i kök och
          badrum. I de fall att vi utför en totalrenovering kan ni behöva bo i
          en annan lägenhet någon eller några dygn, då vi river ut samtliga
          tapeter, golv och avlägsnar köksinredning och badrumsinredning för att
          byta ut eller flytta på samtliga vitvaror i lägenheten.
          <div style={{ textAlign: "left" }}>
            <div>
              <CheckSquareOutlined
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#423FE8",
                  marginRight: "10px",
                }}
              />{" "}
              Renovering av ytor{" "}
            </div>
          </div>
          Om ni inte behöver en totalrenovering så erbjuder vi en renovering av
          ytorna i er lägenhet, vilket inbegriper renovering av väggar och golv.
          Då river vi ut gammal tapet och slipar om golv, alternativt lägger nya
          golv. Vi kan sprutmåla om köksinredning och byta ut vitvaror, montera
          ny köksfläkt med mera. I badrum kan vi montera ny badrumsinredning,
          och i så fall byta ut handfat och toalett, men då räknar vi med att
          inte behöva kakla om badrumsväggar eller lägga på nytt klinker i
          badrumsgolvet.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Vi tar fullt ansvar för renoveringen
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vi tar fullt ansvar för renoveringen</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg är ett ansvarsfullt bygg- och renoveringsföretag och vi kan
          även erbjuda totalentreprenad. Det innebär att vi kan ta ansvar i alla
          led, allt från ansökan om bygglov, rot avdrag till arkitektritning,
          teknisk rapport, utförande och slutbesiktning. Vi ser vi till så att
          alla hantverkare finns på plats i rätt tid och vi koordinerar alla de
          olika tjänster som ingår i en totalrenovering av er lägenhet och gör
          allt för att förverkliga er dröm om renovering av er lägenhet. För att
          säkerställa att allt blir som ni önskar det, så håller vi en
          kontinuerlig kontakt med er som är beställare. Då ansvarar vi för att
          byggprojektet drivs framåt och blir klart i tid, i enlighet med det
          avtal som vi har tecknat.{" "}
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar en fin lägenhetsrenovering i
              Stockholm!
            </Link>
          </p>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Suspense>
  );
};

export default Lagenhetsrenovering;
