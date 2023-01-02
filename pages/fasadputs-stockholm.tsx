import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/FATADSPUTS.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { CheckSquareOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import Link from "next/link";

const Fasadputs: NextPage = () => {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState<boolean>();

  const list = [
    "cementbruk",
    "kalkcementbruk",
    "hydrauliskt kalkbruk",
    "kalkputs",
    "bruk",
    "gipsputs",
    "lerklining terrasitputs ",
    "organisk tunnputs",
  ];

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
        <title>Artas Bygg l Fasadputs Stockholm</title>
        <meta
          name="description"
          content="Behöver du hjälp med fasadputs på bostaden i Stockholm? Då har
          du hittat rätt! Kontakta oss för en kostnadsfri offert så hjälper vi dig."
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "black" }}>
                {t("common:services_Items.rendering_works")}
              </span>
            }
            classBackground={`url(${sky.src})`}
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
            <h2 style={{ textAlign: "center" }}>Fasadputs Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Fasadputs Stockholm </h2>
            </Divider>
          )}
          Har ni ett hus med en fasad som behöver en riktigt fin renovering? I
          så fall kan vi rekommendera att lägga på en fasadputs. I Stockholm
          finns ARTAS Bygg AB och vi arbetar med fasadputs i Stockholm på en
          befintlig fasad. Antingen lägger på vi på ny fasadputs, eller så
          renoverar vi befintlig fasadputs. Om ni redan har fasadputs på er
          villa eller radhus i Stockholm har ni möjlighet att använda er av rot
          avdraget för renoveringen av ert hus. Rot avdraget är en förkortning
          av renovering, ombyggnad och tillbyggnad, vilket kan sänka kostnaderna
          för arbetsinsatsen, med så mycket som 50 000 kronor, eller som mest ⅓
          del av arbetskostnaderna. Vi uppfyller alla krav för rot avdrag. Vi
          betalar alla skatter och moms som krävs och erbjuder tjänsteavtal för
          vår personal.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Arbete med fasadputs i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Arbete med fasadputs i Stockholm</h2>{" "}
            </Divider>
          )}
          När vi renoverar fasadputs tar vi hänsyn till putsen, som består av
          bindemedel, ballast och vatten, medan ballasten vanligtvis består av
          sand och bindemedlet av cement, gips, kalk eller helt enkelt av plast.
          Här ser vi att det finns olika slags blandningar av puts gällande
          hårdhet och mjukhet på putsen. Beroende på vilken slags puts som
          fasaden består av, så anpassar vi renoveringen efter det. Vi lägger
          endast på samma slag av puts som redan finns på er putsfasad.
          <div style={{ marginBottom: "20px" }}>
            De olika slags puts som finns är:
          </div>
          <ul
            style={{
              textAlign: "left",
              marginBottom: "30px",
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
          När vi renoverar en befintlig putsfasad använder vi samma slags puts.
          Därför analyserar vi alltid först vilken slags puts det är som ni har
          på er fasad. Är det så att ni önskar en helt ny puts på er fasad, så
          bestämmer ni vilken slags puts som ni önskar till er fasad. Om ni
          önskar det så kan vi rekommendera en puts som passar ert hus avseende
          arkitektur, ålder på huset och vad som passar er stil, färger och
          design.
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
            <Divider style={{ marginTop: "40px" }} plain>
              <h2>Om ARTAS Bygg</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg är ett ansvarsfullt bygg- och renoveringsföretag och vi
          arbetar med hög kvalitet när vi utför renovering av fasadputs. I
          Stockholm har vi arbetat ända sedan 2007 och erbjuder bl a
          totalentreprenad, markarbeten och anläggningsarbeten. Vi förverkligar
          er dröm om ett nytt hus, nytt komplex, markanläggning
          lägenhetsrenovering, som plåtmästare och med takrenovering, bygge av
          tillbyggnad i Stockholm. För att säkerställa att allt blir som ni
          önskar det så håller vi gärna kontinuerlig kontakt med er som är
          beställare. Vi ansvarar för att byggprojektet drivs framåt och blir
          klart i tid, i enlighet med det avtal som vi har tecknat.
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar fasadputs på er fasad, eller
              önskar en renovering av fasadputs på ert hus!
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

export default Fasadputs;
