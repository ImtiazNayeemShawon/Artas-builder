import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/HUSGRUND.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import Link from "next/link";

const Husgrund: NextPage = () => {
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
        <title>Artas Bygg l Husgrund Stockholm</title>
        <meta
          name="description"
          content="Är ni i behov av mark- och anläggningsarbete för en husgrund i
          Stockholm? Anlita oss på Artas Bygg för byggandet av er nya husgrund."
          key="desc"
        />
      </Head>

      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.house_foundations")}
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
            <h2 style={{ textAlign: "center" }}>Husgrund Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Husgrund Stockholm</h2>
            </Divider>
          )}
          Behöver ni markarbete och anläggningsarbete för en husgrund i
          Stockholm? ARTAS Bygg arbetar i Stockholm och vi erbjuder mark- och
          anläggningsarbete när ni behöver bygga en ny husgrund. I Stockholm har
          vi funnits ända sedan 2007 och har stor erfarenhet av allt slags
          arbete med att bygga en gedigen husgrund. Vi arbetar noggrant och
          anpassar arbetet efter de behov som ni har gällande en ny husgrund i
          Stockholm. Vi kan hyra ut grävmaskin i Stockholm och erbjuder
          markarbete och anläggningsarbete för er husgrund. Hos oss arbetar
          maskinister och markarbetare, vi kan bygga den viktiga husgrunden som
          ska bestå i flera år. Anlita oss för bygget av eran husgrund! Ta
          kontakt med oss så kan vi berätta mer om hur vi kan hjälpa er!
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Vi bygger er husgrund i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vi bygger er husgrund i Stockholm</h2>{" "}
            </Divider>
          )}
          När ni ska bygga ett nytt hus så är husgrunden den viktigaste delen på
          hela huset. Om husgrunden blir fel, blir resten av huset fel. Om
          husgrunden blir sned, eller ger vika, så rasar resten av huset och
          står snett. Därför är husgrunden den viktigaste delen i ett husbygge.
          1. Vi schaktar på den plats där din husgrund ska stå. Det innebär
          bland annat att vi gräver för att husgrunden ska stå så stabilt som
          det bara går. 2. Vi lägger dräneringsrör kring husgrunden. 3. Sedan
          lägger vi VA-rör som ska gå till huset. 4. Vi lägger på en fiberduk
          och ett dränerande lager med grus och makadam. 5. Efter det mäter vi
          alla vinklar och diagonaler i husgrunden så att allt blir rätt. 6. Vi
          mäter var sockeln ska stå för en komplett grund. 7. Vi lägger på
          sockeln för en första skikt för husgrunden. 8. Sedan lägger vi ut en
          första bottenplatta och det gör vi med hjälp av cellplast. Plattorna
          måste ligga så plant det bara går och utan glipor. 9. Efter det rullar
          vi ut plastfolie som ska täcka hela ytan. möjligtvis ska kommunen
          komma ut och kontrollera att allt är som det ska med husgrunden så här
          långt. 10. Vi lägger på cellplastlager nummer 2 och 3 11. Sedan lägger
          vi på en frostisolering, isoleringen ska sluta väl mot sockelns
          undersida. 12. Efter det lägger vi på en motfyllning. 13. Vi gör en
          armering och lägger på ett armeringsnät över hela husgrunden. 14.
          Efter det tjuter vi en första kantbalk. Efter det gjuter vi hela
          plattan så att husgrunden har en rejäl och väl isolerad betongplatta
          där huset ska stå. Givetvis anpassar vi arbetet med husgrund efter era
          önskemål och vad ni behöver.
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
              <h2>Vi tar ansvar för ert projekt i alla led</h2>{" "}
            </Divider>
          )}
          Vi är ett ansvarsfullt bygg- och renoveringsföretag och alla vi som
          arbetar på ARTAS Bygg arbetar med hög kvalitet. Anlitar ni oss så ser
          vi till att alla hantverkare finns på plats där det behövs. Då arbetar
          vi med allt som har med projekteringen och utförandet av
          nybyggnationen att göra. Vi arbetar för att förverkliga er dröm för
          ett nytt hus, nytt komplex och markanläggning. Och för att säkerställa
          att allt blir som ni önskar så håller vi en kontinuerlig kontakt med
          er som är beställare, och ansvarar för att byggprojektet drivs framåt.
          Anlitar ni oss så ser vi till att allt blir klart i tid, i enlighet
          med det avtal som vi har tecknat.
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar önskar få en fin husgrund i
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

export default Husgrund;
