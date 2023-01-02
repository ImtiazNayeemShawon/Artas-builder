import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/stenlagging.jpg";
import skySx from "../public/stone_sx.jpg";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import Link from "next/link";
import { CheckSquareOutlined } from "@ant-design/icons";

const list = [
  "Skiffer. Dessa stensorter kommer i oregelbundna former. Dem kan du lägga som en gång i trädgården och som bildar ett vackert mönster med sin oregelbundna form. Skiffer är mycket populära som stenläggningar och man ser dem i de allra flesta trädgårdar i Sverige. ",
  " Marksten. Dessa stensorter har seglat upp som en av de mest populära sorterna. Du kan välja mellan en mängd olika färger och nyanser. Marksten passar också väldigt bra som avgränsare mot en rabatt eller mot gångbana med grus i trädgården. ",
  "Släta plattor. Om du väljer släta plattor får du som namnet antyder, en väldigt slät yta, som passar väldigt bra, exempelvis för terrasser och även till gångbanor och som uppfart till hus.",
];

const Stenlaggning: NextPage = () => {
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
        <title>Artas Bygg l Stenläggning Stockholm</title>
        <meta
          name="description"
          content="Har ni bestämt er för en stenläggning, antingen i en park eller
          trädgård? Kontakta oss så hjälper vi er med en vacker stenläggning i Stockholm!"
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.stone_works")}
              </span>
            }
            classBackground={`url(${sky.src})`}
            classBackgroundSx={skySx.src}
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
            <h2 style={{ textAlign: "center" }}>Stenläggning Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Stenläggning Stockholm</h2>
            </Divider>
          )}
          Har ni bestämt er för en stenläggning, antingen i en park eller
          trädgård? I Stockholm arbetar ARTAS Bygg och utför en fin stenläggning
          för privata fastighetsägare, kommuner och bostadsrättsföreningar.
          Kontakta oss när ni önskar er en vacker stenläggning i Stockholm! Att
          ha en fin stenläggning i trädgården gör mycket för trivseln för alla
          som bor i området. En stenläggning kan ni sedan använda som terass och
          bli en plats för umgänge grannar emellan, om det är så att ni bor i en
          BRF och önskar få en fin stenläggning på er innergård eller på
          uppfarten till era fastigheter. En stenläggning kan också vara ett
          sätt att rama in er trädgård och som gör trädgården fin och estetisk.
          En stenläggning kan också göra en parkering fin eller vägen till er
          fastighet trivsam och fin. Istället för att lägga asfalt är en
          stenläggning ett fint sätt att bygga en uppfart till ett hus.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Hur önskar ni er stenläggning i Stockholm?
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Hur önskar ni er stenläggning i Stockholm?</h2>{" "}
            </Divider>
          )}
          Att få en fin stenläggning i er innergård, park eller trädgård, gör
          lyfter utseendet och skapar trivsel i området. ARTAS Bygg arbetar med
          fina stenläggningar, markarbeten och anläggningsarbeten i Stockholm.
          Vi har grävmaskiner och markarbetare som kan göra fina stenläggningar.
          Vilken stensort önskar ni till er stenläggning? Genom att välja
          stensort påverkar ni utseendet på stenläggningen, och även genom att
          välja regelbundna eller oregelbundna stensorter kan ni påverka
          användningen av stenläggningen. Vill ni ha en stenläggning som en
          avgränsare mot gräsmatta, gångbana eller parkeringsplats? Med hjälp av
          stenläggningen kan ni använda stenläggningen som ett “golv” utomhus.
          Allt fler villa- och radhusägare önskar sig en stenläggning där ni kan
          möblera med utemöbler och ha en grill. På den stenläggningen kan ni
          umgås med vänner och familjen, och vi ser till att anpassa
          stenläggningen efter era önskemål och de behov som ni har.
          <br></br>
          <br></br>
          Välj material till stenläggningen såsom:
          <ul
            style={{
              textAlign: "left",
              marginBottom: "30px",
              marginTop: "30px",
              listStyleType: "none",
            }}
          >
            {list.map((element) => {
              return (
                <li key={element}>
                  <CheckSquareOutlined
                    style={{ color: "#423FE8", marginRight: "10px" }}
                  />
                  {element}
                </li>
              );
            })}
          </ul>
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Om ARTAS Bygg
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Om ARTAS Bygg</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg har funnits ända sedan 2007 i Stockholm och vi har stor
          erfarenhet av markarbete för stenläggning i bostadsrättsföreningar,
          parker, trädgårdar och parkeringar. Vi arbetar noggrant och anpassar
          stenläggningen efter alla era önskemål och arbetar med hög kvalitet i
          alla led. När ni anlitar oss arbetar vi för att förverkliga er dröm om
          nytt hus, markanläggning eller renovering av er bostad. Vi arbetar för
          att säkerställa att allt blir som ni önskar, därför håller vi en
          kontinuerlig kontakt med er som är beställare och ansvarar för att
          stenläggningen blir precis som ni önskar den och att den blir klar i
          tid. Anlita oss när ni behöver en fin stenläggning i Stockholm!
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar en fin stenläggning i Stockholm!
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

export default Stenlaggning;
