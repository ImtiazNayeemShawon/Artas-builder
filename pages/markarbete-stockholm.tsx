import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/MARKERBETE.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";
import Link from "next/link";

const list = [
  "schaktning",
  "grävning ",
  "dränering",
  "sanering ",
  "bygge av tunnlar",
  "grävning för att bygga husgrund för fastigheter",
  "markarbete för anläggning av park",
  "markarbete för bygge av vägar eller broar",
];

const Markarbete: NextPage = () => {
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
        <title>Artas Bygg l Markarbete Stockholm</title>
        <meta
          name="description"
          content="Artas Bygg är en bygg- och renoveringsfirma som utför allt slags
          markarbete i Stockholm. Kontakta oss för en kostnadsfri offert idag!"
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.groundworks")}
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
            <h2 style={{ textAlign: "center" }}>Markarbete Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Markarbete Stockholm</h2>
            </Divider>
          )}
          Välkomna till ARTAS Bygg AB som finns i Stockholm! Vi är en bygg- och
          renoveringsfirma som utför allt slags markarbete i Stockholm, såsom
          schaktning och gräver för att bygga husgrunder för nybyggnationer. Vi
          gör även dräneringar kring fastigheter, och om ni behöver maskinister
          för markarbete i Stockholm kan vi hjälpa er med alla de delarna. Vi
          hyr även ut grävmaskiner, caterpillar och maskinister som arbetar med
          markarbeten. Det är bara att ta kontakt med oss så kommer vi ut och
          tittar på ert arbetsprojekt. Tillsammans kan vi sedan planera
          markarbetet i Stockholm och ange en tidsplan för när markarbetet kan
          vara klart.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Erbjuder markarbete i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Erbjuder markarbete i Stockholm</h2>{" "}
            </Divider>
          )}
          Vi erbjuder breda tjänster inom markarbete och då arbetar vi med:
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            {list.map((element) => {
              return (
                <div key={element}>
                  <CheckSquareOutlined
                    style={{ color: "#423FE8", marginRight: "10px" }}
                  />
                  {element}
                </div>
              );
            })}
          </div>
          av vägar eller broar Kontakta oss så kommer vi ut och tittar på ert
          projekt! Vi arbetar i hela Stockholm och i och kring Stockholm. Här
          vänder vi oss både till andra företag som behöver hjälp med
          markarbetet och till privatpersoner som vill bygga nytt och behöver
          markarbete på nya tomter. Eftersom ARTAS Bygg är måna om sin personal
          har vi ansvarsförsäkring för alla våra maskinister och hantverkare.
          När ni anlitar oss ska ni som är våra kunder inte drabbas om något,
          mot förmodan, skulle ske. Vi tar ansvar för vår personal, och för ert
          markarbete. Vi arbetar med alla delar inom markarbete, så behöver ert
          företag maskinister och hantverkare som arbetar med markarbete för en
          ny väg, ny bro, hus eller trädgård, park tunnlar och liknande. Om det
          är så att ni behöver dylika tjänster så erbjuder vi personal för
          grävmaskiner, lastbilar och andra schaktningsarbeten och som kan
          hantera grävmaskiner, ångvält, asfaltsbilar, betongbilar och som kan
          frakta material för det specifika markarbetet.
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
          Anlita ett ansvarsfullt bygg- och renoveringsföretag och kontakta oss
          på ARTAS Bygg. Vi ser till att arbeta med hög kvalitet i allt som vi
          utför. När ni anlitar oss ser vi till att alla maskinister gör det som
          de ska för att markarbetet ska gå framåt. Vi tar hand om
          koordineringen av alla de olika tjänster som ingår i markarbetet i
          Stockholm och förverkligar er dröm om ett nytt hus, nytt komplex eller
          markanläggning. För att säkerställa att allt blir som ni önskar, så
          håller vi en kontinuerlig kontakt med er som är beställare. Vi
          ansvarar för att markarbetet drivs framåt och blir klart i tid, i
          enlighet med det avtal som vi har tecknat.
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar ett fint markarbete i Stockholm!
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

export default Markarbete;
