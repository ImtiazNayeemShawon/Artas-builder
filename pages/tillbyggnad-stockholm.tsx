import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/extenstion.jpg";
import skySx from "../public/extenstion_sx.jpg";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";
import Link from "next/link";

const list = [
  "Att bygga ut huset vid ena gaveln på huset, är ofta bland det lättaste sättet att bygga en tillbyggnad. Då bygger vi ut grunden, bygger reglar, bygger fasaden och bygger ut taket på tillbyggnaden. Vi monterar fönster, bygger inredningen, såsom exempelvis gipsväggar, vi lägger golv och inredning så som ni önskar. Vi har elektriker som kan dra nya elledningar och bygger in värme i tillbyggnaden.",
  "Bygger vi ut och tar tillvara vinden på ert hus, får ni ett högre hus och ytterligare en våning. Vi kan höja taket installera nya fönster, isolera befintliga väggar och inreder med fina golv. Om ni vill det kan vi bygga för nya fönster på vinden och inreda vinden med tapeter, lägga nytt golv och isolera den så att ni trivs i tillbyggnaden.",
];

const Tillbyggnad: NextPage = () => {
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
        <title>Artas Bygg l Tillbyggnad Stockholm</title>
        <meta
          name="description"
          content="Behöver ni en tillbyggnad av ert hus i Stockholm? Vi bygger
          tillbyggnad för både större hus och mindre hus och med rot avdrag. Kontakta oss
          idag!"
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.house_extensions")}
              </span>
            }
            classBackground={`url(${sky.src})`}
            classBackgroundSx={`url(${skySx.src})`}
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
            <h2 style={{ textAlign: "center" }}>Tillbyggnad Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Tillbyggnad Stockholm</h2>
            </Divider>
          )}
          Behöver ni en tillbyggnad av ert hus i Stockholm? ARTAŞ Bygg bygger
          tillbyggnad för både större hus och mindre hus och med rot avdrag. Vi
          är en bygg- och renoveringsfirma som arbetar på ett ansvarsfullt sätt
          och vi jobbar för att hålla en hög kvalitet i alla led. När ni anlitar
          oss så arbetar vi för att förverkliga den dröm som ni har om ett nytt
          hus, fastighet, markanläggning eller renovering av ert nuvarande hus.
          För att vi ska veta att det blir som ni önskar, så håller vi en
          kontinuerlig kontakt med er som är beställare. Under det att arbetet
          fortgår med en tillbyggnad i Stockholm, så ansvarar vi för att
          byggprojektet drivs framåt och blir klart i tid och i enlighet med det
          avtal som vi tecknar med er, om ni bestämmer er för att anlita oss.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Hur önskar ni er tillbyggnad i Stockholm?
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Hur önskar ni er tillbyggnad i Stockholm?</h2>{" "}
            </Divider>
          )}
          För att er tillbyggnad ska bli så fin som möjligt kan det vara bra att
          anlita en arkitekt som ritar tillbyggnaden av ert hus. Om ni anlitar
          oss, så kan vi hjälpa er få den arkitektritning som gör tillbyggnaden
          riktigt fin och som passar ert hus. Dessutom behöver ni bygglov,
          teknisk ritning och andra viktiga dokument inför tillbyggnaden.
          <br></br>
          <br></br>
          Vi arbetar även med totalentreprenad och har kompetens att inhämta
          alla de slags dokument som krävs innan vi kan sätta igång med arbetet
          med tillbyggnad för ert hus.
          <br></br>
          <br></br>
          Ni vet väl om att det går att utföra en tillbyggnad antingen som en
          tillbyggnad på ena gaveln av huset, eller som en tillbyggnad genom att
          ta till vara vinden på ert hus. Båda alternativen har olika fördelar
          och beroende på husets arkitektur är de bäst ur olika synpunkter.
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
                <li key={element} style={{ padding: "10px" }}>
                  <CheckSquareOutlined
                    style={{
                      color: "#423FE8",
                      marginRight: "10px",
                    }}
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
              Rot avdrag för er tillbyggnad
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Rot avdrag för er tillbyggnad</h2>{" "}
            </Divider>
          )}
          Vid en tillbyggnad har ni alltid möjlighet att nyttja rot avdraget.
          Att utnyttja rot avdraget sänker priset på arbetskostnaden med som
          mest 50 000 kronor, eller ⅓ del av arbetskostnaderna. Storleken på rot
          avdraget är beroende av hur mycket ni har utnyttjat det under det år
          som ni ansöker om det. Och om ni tycker att ansökan om rot avdraget är
          krångligt, så kan vi hjälpa er med det. Säg gärna till om ni önskar få
          hjälp med det, så gör vi det åt er. I så fall ser ni rot avdraget
          direkt på fakturan med avdrag från oss.
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar tillbyggnad av ert hus i
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

export default Tillbyggnad;
