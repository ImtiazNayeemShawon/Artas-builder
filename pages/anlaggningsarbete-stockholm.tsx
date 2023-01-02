import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/Anläggningsarbete.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import { Divider } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";
import Head from "next/head";

const Anlaggningsarbete: NextPage = () => {
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
        <title>Artas Bygg l Anläggningsarbete Stockholm</title>
        <meta
          name="description"
          content="Behöver ni hjälp med ett anläggningsarbete? Anlita oss på ARTAS
          Bygg AB som utför anläggningsarbete i Stockholm. Kontakta oss redan idag!"
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.supplay_works")}
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
            <h2 style={{ textAlign: "center" }}>
              Anläggningsarbete Stockholm{" "}
            </h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Anläggningsarbete Stockholm </h2>
            </Divider>
          )}
          Behöver ni få tag i en firma som kan arbeta med anläggning? I
          Stockholm är ni välkomna till ARTAS Bygg AB som utför
          anläggningsarbete i Stockholm. Vi arbetar med alla delar för en ny
          anläggning, såsom markarbete, anläggningsarbete och grävning av tomt
          och grund för nybyggnationer. Om ni planerar en kommande anläggning i
          Stockholm kan vi hjälpa er med alla delar som ni behöver till er
          anläggning. Vi har grävmaskiner, caterpillar och personal så att ni
          får den slags anläggning som ni önskar. Om ni behöver det kan vi komma
          ut och utföra ert anläggningsarbete i Stockholm.
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
              <h2>Vi erbjuder anläggningsarbete i Stockholm</h2>{" "}
            </Divider>
          )}
          <div style={{ marginBottom: "35px" }}>
            Vi erbjuder breda tjänster inom anläggningsarbete och då arbetar vi
            med:
          </div>
          <div style={{ textAlign: "left" }}>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              schaktning, vi gräver för att lägga grund{" "}
            </div>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              markarbete och förstärker bärlager och ytskikt
            </div>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              montering av prefabricerade material
            </div>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              inredning och installation av utrustning
            </div>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              renovering av äldre fastigheter
            </div>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              underhåll av fastigheter
            </div>
            <div>
              <CheckSquareOutlined
                style={{ color: "#423FE8", marginRight: "10px" }}
              />{" "}
              dränering
            </div>
            <div>
              <CheckSquareOutlined
                style={{
                  color: "#423FE8",
                  marginRight: "10px",
                  marginBottom: "40px",
                }}
              />{" "}
              sanering
            </div>
          </div>
          Tar ni kontakt med oss så kan vi berätta mer om hur vi arbetar! Vi
          vänder oss i hela Stockholms förorter och orter i och kring Stockholm.
          Här vänder vi oss både till andra företag som behöver hjälp med
          anläggningsarbete. Även privatpersoner som ska bygga nytt är välkomna
          som våra kunder. Om ni är tomtägare och behöver anläggningsarbete i
          Stockholm, så hjälper vi gärna er. Eftersom ARTAS Bygg är en noggrann
          bygg- och renoveringsfirma har vi ansvarsförsäkring för alla våra
          maskinister och hantverkare. När ni anlitar oss ska ni som är våra
          kunder inte drabbas om något, mot förmodan, skulle ske. Vi tar ansvar
          för vår personal, och för ert anläggningsarbete.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              {" "}
              Vi tar ansvar för ert projekt i alla led
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              {" "}
              <h2>Vi tar ansvar för ert projekt i alla led</h2>
            </Divider>
          )}
          Vi arbetar med alla delar inom anläggning, så behöver ert företag
          maskinister och hantverkare som arbetar med anläggningsarbete för en
          ny väg, ny bro, hus eller trädgård, park tunnlar och liknande. Om det
          är så att ni behöver dylika tjänster så erbjuder vi personal för
          grävmaskiner, lastbilar och andra schaktningsarbeten och som kan
          hantera grävmaskiner, ångvält, asfaltsbilar, betongbilar och som kan
          frakta material för det specifika anläggningsarbetet.
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
              {" "}
              <h2>Vi tar ansvar för ert projekt i alla led</h2>
            </Divider>
          )}
          Vi som arbetar på ARTAS Bygg är ansvarsfulla och ser till att alltid
          arbeta med hög kvalitet i alla led. Vi förverkligar er dröm om ett
          nytt hus, nytt komplex, markanläggning när vi utför anläggningsarbetet
          i Stockholm. För att säkerställa att allt blir som ni önskar så har vi
          kontinuerlig kontakt med er som är beställare. Vi ansvarar för att
          anläggningsarbetet drivs framåt och blir klart i tid, i enlighet med
          det avtal som vi har tecknat. Ta kontakt med oss när ni önskar ett
          fint anläggningsarbete i Stockholm!
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Suspense>
  );
};

export default Anlaggningsarbete;
