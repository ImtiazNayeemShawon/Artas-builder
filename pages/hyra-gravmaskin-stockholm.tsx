import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/hyra.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import Link from "next/link";

const Hyra: NextPage = () => {
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
        <title>Artas Bygg l Hyra Grävmaskin Stockholm</title>
        <meta
          name="description"
          content="Behöver ni hyra en grävmaskin i Stockholm? Välkomna till oss på
          Artas bygg! Vi har flertalet grävmaskiner som kan passa ert byggprojekt."
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "black" }}>
                {t("common:services_Items.mashines_rental")}
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
            <h2 style={{ textAlign: "center" }}>Hyra grävmaskin Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Hyra grävmaskin Stockholm</h2>
            </Divider>
          )}
          Behöver ni hyra grävmaskin i Stockholm? När ni behöver hyra en
          grävmaskin för er dränering, markanläggning, markarbete eller ska
          bygga en ny husgrund, så är ni välkomna till ARTAS Bygg som arbetar
          med att hyra ut grävmaskin i Stockholm. Hos oss hittar ni alla slags
          grävmaskiner som ni kan behöva för att gräva tunnlar, lägga
          dräneringsrör eller förbereda marken för bygget av en ny husgrund. Vi
          har flertalet grävmaskiner som kan passa ert byggprojekt som ni har i
          Stockholm.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Hyra grävmaskin i Stockholm med maskinist
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Hyra grävmaskin i Stockholm med maskinist</h2>{" "}
            </Divider>
          )}
          Behöver ni en maskinist när ni ska hyra er grävmaskin i Stockholm? Då
          kan ni enkelt även hyra en grävmaskinist hos oss som hjälper er gräva,
          dränera, bearbeta marken och förbereda den för exempelvis en husgrund.
          Att hantera en stor grävmaskin är inte alltid lätt. Det krävs att man
          vet hur grävmaskinen fungerar och känner till inom vilken radie som
          grävmaskinen kan röra sig på. I synnerhet gäller detta om grävmaskinen
          ska röra sig i närheten av en fastighet. Känner man inte till
          grävmaskinens svängradie kan man skada fastigheten där man arbetar,
          och det vill man ju inte.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Vilken slags grävmaskin behöver ni?
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vilken slags grävmaskin behöver ni?</h2>{" "}
            </Divider>
          )}
          Beroende på vilket slags byggprojekt som ni har, kan olika slags
          grävmaskiner krävas. Vi har större och mindre grävmaskiner för olika
          ändamål. Om ni ska gräva på en begränsad yta, så kan en minigrävare
          räcka för ert byggprojekt. Vi har även olika slags grävskopor,
          lyftklor, glaslyftare och korgar med mera. Har ni ett stort
          byggprojekt kan ni till och med behöva en caterpillar för bygget. Vi
          har olika grävmaskiner för entreprenader och mindre grävmaskiner för
          dräneringsarbeten. Ange gärna vilket slags arbete som ni behöver
          utföra när ni bestämt er för att hyra grävmaskin i Stockholm. Ta
          kontakt med oss, vi berättar gärna om våra grävmaskiner som du kan
          hyra i Stockholm!
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Vi tar ansvar för ert projekt i alla led
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vi tar ansvar för ert projekt i alla led</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg är ett ansvarsfullt bygg- och renoveringsföretag och vi
          väljer att alltid arbeta med hög kvalitet. När ni anlitar oss för en
          uthyrning av grävmaskin eller uthyrning av maskinist så tar vi hand om
          de olika tjänster som ingår i det arbetet. Vi kör ut grävmaskinen åt
          er, då det krävs särskilda fordon för frakten av en grävmaskin. Detta
          har vi gjort många gånger och vi ser till så att arbetet med
          grävmaskinen kan utföras på rätt sätt. Av den anledningen är det bäst
          att anlita ARTAS Bygg när ni behöver erfarna maskinister för ert
          schaktnings-, markarbete och anläggningsarbete i Stockholm.{" "}
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss på ARTAS Bygg när ni behöver hyra grävmaskin i
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

export default Hyra;
