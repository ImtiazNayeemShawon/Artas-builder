import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/roof.jpg";
import skySx from "../public/roof_sx.jpg";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import Link from "next/link";

const Platstagre: NextPage = () => {
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
        <title>Artas Bygg l Plåtslagare Stockholm</title>
        <meta
          name="description"
          content="Behöver ni få tag i en plåtslagare för fina plåtarbeten i Stockholm?
          Då är ni välkomna till oss som erbjuder alla slags tjänster inom plåtslageri."
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            classBackgroundSx={skySx.src}
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.steel_smith_works")}
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
            <h2 style={{ textAlign: "center" }}>Plåtslagare Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Plåtslagare Stockholm</h2>
            </Divider>
          )}
          Behöver ni få tag i en plåtslagare för fina plåtarbeten i Stockholm? I
          så fall är ni välkomna till ARTAS Bygg AB som erbjuder alla slags
          tjänster som plåtslagare i Stockholm. Vi är hantverkare med många
          olika kompetenser och arbetar med markarbeten, anläggningsarbeten,
          bygger husgrund och erbjuder totalentreprenad, med mera. När ni
          behöver tjänster av takläggare och plåtmästare är ni välkomna att ta
          kontakt med oss. Vi är plåtslagare som arbetar med plåt – precis som
          namnet säger – och arbetar med takläggning, takrenovering och takbyte.
          Våra plåtmästare lägger även plåt kring skorsten på taket, kring
          stuprör och hängrännor, och lägger även hela tak med plåt. Vi anser
          att plåttak är ganska underskattade, vilket vi tycker är synd då
          plåttak är mycket bra tak som är hållbara ända upp till 50 år. Det är
          många år för en husägare och då vet man att taket är intakt. Dessutom
          är plåttak lätta att måla om och skotta bort snö från.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Erbjuder tjänster som plåtslagare i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Erbjuder tjänster som plåtslagare i Stockholm</h2>{" "}
            </Divider>
          )}
          Vi erbjuder våra tjänster som plåtslagare till fastighetsbolag och
          villa- och radhusägare med möjlighet till rot avdrag och som behöver
          takläggning eller takrenovering på sina villor eller radhus i
          Stockholm. Som privatperson finns alltid möjligheten till rot avdrag
          vid en takrenovering eller takbyte. Vi uppfyller alla villkor för rot
          avdrag, så om ni behöver takrenovering eller takbyte till fina
          plåttak; ta kontakt med oss så kommer vi ut och ser på ert nuvarande
          tak och ger ett prisförslag. Det finns många fördelar med ett plåttak.
          De är mycket hållbara, går att måla om hur många gånger som helst och
          är lätta att skotta bort snön från. De är också snygga, anser vi. När
          ni behöver erfarna plåtslagare i Stockholm så finns vi till ert
          förfogande. ARTAS Bygg är ett ansvarsfullt bygg- och
          renoveringsföretag och vi arbetar med hög kvalitet i alla led. När ni
          anlitar oss ser vi till så att ta hand om hela takrenoveringen eller
          takbytet för ert hus. För att säkerställa att takrenoveringen – eller
          takbytet – blir som ni önskar, så vill vi hålla en kontinuerlig
          kontakt med er som är beställare. Vi ansvarar för att
          renoveringsprojektet drivs framåt och blir klart i tid, i enlighet med
          det avtal som vi har tecknat.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Utbildade plåtslagare i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Utbildade plåtslagare i Stockholm</h2>{" "}
            </Divider>
          )}
          Vi som arbetar på ARTAS Bygg är utbildade plåtmästare, vilket innebär
          att vi innehar gesällbrev som plåtmästare, har rätt
          arbetslivserfarenhet, rätt utbildning till plåtslagare, är lämpliga
          för arbetet som plåtmästare och innehar rätt dokumentation. Så
          kontakta oss när ni behöver takrenovering eller takbyte, Väljer ni en
          takläggning eller takbyte till plåttak, kan vi ge garantier på
          takrenoveringen och takbytet på upp till 20 år.
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar tjänster av plåtslagare i
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

export default Platstagre;
