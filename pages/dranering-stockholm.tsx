import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/realization1.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import Link from "next/link";

const Dranering: NextPage = () => {
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
        <title>Artas Bygg l Dränering Stockholm</title>
        <meta
          name="description"
          content="Är ni i behov av att dränera bostaden? När ni behöver en
          välbehövlig dränering i Stockholm, finns ARTAS Bygg AB till ert förfogande. Kontakta
          oss idag!"
          key="desc"
        />
      </Head>

      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.drainage_works")}
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
            <h2 style={{ textAlign: "center" }}>Dränering Stockholm </h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Dränering Stockholm</h2>
            </Divider>
          )}
          Behöver ni dränera kring ert hus i Stockholm? När ni behöver en
          välbehövlig dränering i Stockholm, finns ARTAS Bygg AB till ert
          förfogande. Vi arbetar med dränering i Stockholm och har rätt redskap
          och personal för dräneringsarbetet. Att lägga nya dräneringsrör och
          dräneringsskivor kring sitt hus är väldigt viktigt och framför allt
          att det sker med viss regelbundenhet. Om ni är villaägare,
          fastighetsägare, bor i en bostadsrättsförening i Stockholm,och vet att
          det är mer än 25-30 år sedan som en dränering senast gjordes för ert
          hus, är det dags att utföra en dränering på er tomt. En dränering i
          Stockholm kring er villa eller radhus säkerställer så att inte
          fastigheten drabbas av fukt. Har ni dränerat kring huset, visar det på
          ett ansvarsfullt förvaltarskap och att huset är välskött och håller
          för ännu längre tid framåt.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              {" "}
              Så genomför vi en dränering i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2> Så genomför vi en dränering i Stockholm</h2>{" "}
            </Divider>
          )}
          1. För att vi ska dränera på bästa tänkbara sätt så kommer vi ut till
          ett platsbesök inför offertgivning. På så sätt kan vi ge en realistisk
          offert för er dränering. 2. Vi skriver avtal så att vi vet vad som
          förväntas av oss. 3. Vi kommer ut med grävmaskiner och byggmaterial
          och inleder arbetet med dräneringen. 4. När dräneringen är klar, gör
          vi en besiktning av den tillsammans med er och ni kan ge feedback på
          vårt arbete. Vi är noggranna med att ni får en dränering som ni
          behöver, och ansvarar för att dräneringsarbetet inte ska störa er som
          bor i huset alltför mycket. När vi dränerar gräver vi så djupt som det
          behövs för att antingen dräneringsrören eller dräneringsskivorna ska
          komma på plats och göra största möjliga nytta. Våra maskinister har
          gjort detta många gånger och har rätt kunskap för arbetet. Vi är
          stolta över våra maskinister som utför ett jobb med dränering tills ni
          är nöjda med våra tjänster. Och vi anser att nöjda kunder är den bästa
          marknadsföringen. Därför har vi inte behövt lägga stora summor på
          marknadsföring, då våra nöjda kunder har utfört det
          marknadsföringsarbetet åt oss. Och vi har funnits ända sedan 2007, och
          vi växer kontinuerligt. Så genomför vi en dränering i Stockholm
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              {" "}
              Vi erbjuder anläggningsarbete i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vi tar ansvar för ert projekt i alla led</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg är ett ansvarsfullt bygg- och renoveringsföretag som alltid
          arbetar med hög kvalitet. Vi förverkligar er dröm om ett nytt hus,
          nytt komplex, markanläggning eller en renovering av ert nuvarande hus.
          För att säkerställa att allt blir som ni önskar, så har vi
          kontinuerlig kontakt med er som är beställare och ansvarar för att
          byggprojektet drivs framåt och blir klart i tid, i enlighet med det
          avtal som vi har tecknat.{" "}
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar få en dränering runt ert hus i
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

export default Dranering;
