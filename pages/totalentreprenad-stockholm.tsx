import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/TOTALENTREPRENAD.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import { Divider } from "antd";
import Link from "next/link";
import { CheckSquareOutlined } from "@ant-design/icons";

const list = [
  "När du tar kontakt med oss, vill vi gärna att nuberättar utförligt om ert renoverings- eller byggprojekt. Vi åtar ossbåde större och mindre nybyggnationer och renoveringar och kan så fortsom möjligt planera ert kommande projekt tillsammans med er",
  "Om nibestämmer er för att anlita oss för er totalentreprenad i Stockholm,så skriver vi avtal så att alla parter vet vad var och en ska göra ochvad som ska uppnås och inom en ungefärlig tidsram.",
  "Vi inhämtar allaviktiga och nödvändiga dokument för nybyggnationen, såsom bygglov,arkitektritningar, tekniska rapporter, byggplan eller andra viktigadokument.",
  "Vi anlitar nödvändiga hantverkare, byggare och fackmän,som krävs för att genomföra byggnationen eller renoveringen. ",
  "Underhela den tiden håller vi kontakten med er och förmedlar allinformation till er, så att ni kan fatta beslut angående alla kontraktsom behöver skrivas och arkitektritningar och andra viktiga dokumentsom hör till projektet.",
  "När ni har fattat beslut och kontrolleratalla bygglov, ritningar och dylikt är det sedan upp till oss attverkställa det som ni har godkänt.",
  "Vi gör ett byggschema för deolika projekteringarna, hantverkarna och installatörerna och ansvararför varje del tills allt bygg- eller renoveringsmaterial finns påplats.",
  "Ni är fortfarande byggherrar men vi ansvarar förgenomförandet och verkställigheten i projektet.",
  "När vi närmar ossslutet av bygg- eller renoveringsprojektet så går vi igenom allt,redovisar allt som vi utfört och för slutbesiktningar tillsammans meder, så att vi ser att ni är nöjda med resultatet.",
];

const Totalentreprenad: NextPage = () => {
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
        <title>Artas Bygg l Totalentreprenad Stockholm</title>
        <meta
          name="description"
          content="Är ni ute efter en erfaren firma för totalentreprenad i Stocholm? Då
          har ni kommit rätt. Kontakta oss på Artas Bygg så hjälper vi er!"
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "white" }}>
                {t("common:services_Items.general_contractor")}
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
            <h2 style={{ textAlign: "center" }}>Totalentreprenad Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Totalentreprenad Stockholm</h2>
            </Divider>
          )}
          Vid större nybyggnationer som äger rum i Stockholm, är vi behjälpliga
          med att utföra en totalentreprenad åt både mindre och större byggbolag
          och privata kunder. ARTAS Bygg AB finns i Stockholm och här erbjuder
          vi totalentreprenader för byggnationer och renoveringar. När vi utför
          totalentreprenad i Stockholm, arbetar vi så att bygg- eller
          renoveringsprojektet drivs framåt och blir klart i tid. Vi anlitar de
          hantverkare, maskinister och arkitekter, om det behövs, och de som
          krävs för att bygget eller renoveringen ska förverkligas.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Så arbetar vi med totalentreprenad i Stockholm
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Så arbetar vi med totalentreprenad i Stockholm</h2>{" "}
            </Divider>
          )}
          Inför ett uppdrag med totalentreprenad vill vi gärna träffa er som är
          uppdragsgivare för att vi gemensamt ska kunna planera arbetet, lägga
          upp en tidsplan samt budget för alla de olika delarna som ska ingå i
          en totalentreprenad. För oss är det viktigt att kommunikationen mellan
          oss är direkt och tydlig så att vi blir så insatta som möjligt i allt
          som rör ert bygge eller renovering. Vi är måna om alla våra kunder och
          vill få rätt information om allt som rör bygg- eller
          renoveringsprojektet. Eftersom vi är måna om att utföra
          totalentreprenaden med hög kvalitet, så är det viktigt med
          kontinuerlig kontakt genom hela projektet. Ni som beställer
          totalentreprenaden får en kontaktperson som ger all nödvändig
          information. Så går det till när ni anlitar ARTAS Bygg för er
          totalentreprenad:
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
              Vi tar ansvar för totalentreprenaden
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Vi tar ansvar för totalentreprenaden</h2>{" "}
            </Divider>
          )}
          Vi som arbetar på ARTAS Bygg arbetar med hög kvalitet i alla led för
          den totalentreprenad som ni anlitar oss för och vi arbetar för att
          förverkliga er dröm om ett nytt hus, eller för den renovering som ni
          önskar av ert nuvarande hus. För att säkerställa att allt blir som ni
          önskar er en totalentreprenad så håller vi kontinuerlig kontakt med er
          som är beställare. Vi ansvarar för att byggprojektet drivs framåt och
          blir klart i tid, i enlighet med det avtal som vi har tecknat.
          <p>
            <Link href="/kontakt">
              När ni önskar anlita en driven och duktig bygg- och
              renoveringsfirma för er totalentreprenad i Stockholm – ta kontakt
              med oss!
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

export default Totalentreprenad;
