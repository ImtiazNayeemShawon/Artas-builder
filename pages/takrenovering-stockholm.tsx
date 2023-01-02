import type { NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import Footer from "../conponents/footer/footer";
import sky from "../public/Takrenovering.png";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import Head from "next/head";
import Link from "next/link";
import { Divider } from "antd";
import { CheckSquareOutlined } from "@ant-design/icons";

const list = [
  " tegelpannor – kostar mellan 130-200 kronor/kvadratmeter",
  " betongpannor – kostar mellan 100-140 kronor/kvadratmeter",
  " plåttak – kostar mellan 70-150 kronor/kvadratmeter",
  " papptak – kostar mellan 50-100 kronor/kvadratmeter",
  " shingeltak – kostar mellan 90-140 kronor/kvadratmeter",
];

const checklist = [
  " När ni tar kontakt med oss så kommer vi gärna ut på ett första platsbesök så att vi ser omfattningen av takrenoveringen och kan ge en realistisk offert och tidsangivelse för när takrenoveringen kan vara klar.",
  " Sedan kan vi skriva avtal så att ni vet vad ni kan förvänta er av oss och så att vi har möjligheten att uppfylla alla krav och förväntningar på er takrenovering i Stockholm.",
  " Vi informerar alla som bor i fastigheterna så att de vet vad som kommer att hända de närmaste månaden, eller månaderna, beroende på hur många fastigheter det handlar om.",
  " Efter det monterar vi byggställningar och påbörjar arbetet med takrenoveringen.",
  " När takrenoveringen är klar, så gör vi gärna en slutbesiktnin tillsammans med er så att vi vet att ni är nöjda med er takrenovering.",
];

const Takrenovering: NextPage = () => {
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
        <title>Artas Bygg l Takrenovering Stockholm</title>
        <meta
          name="description"
          content="Har ni behov av en fin takrenovering på er villa eller radhus?
          Kontakta oss idag för en kostnadsfri offert för er takrenovering i Stockholm."
          key="desc"
        />
      </Head>
      <div>
        <header>
          <GlobalBaner
            header={
              <span style={{ color: "#423FE8" }}>
                {t("common:services_Items.roof_renovations")}
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
            <h2 style={{ textAlign: "center" }}>Takrenovering Stockholm</h2>
          ) : (
            <Divider
              orientation="left"
              plain
              style={{ borderColor: "#423FE8", fontSize: "20px" }}
            >
              <h2>Takrenovering Stockholm</h2>
            </Divider>
          )}
          Har ni behov av en fin takrenovering på er villa eller radhus och bor
          i Stockholm? ARTAS Bygg AB finns i Stockholm och erbjuder fin
          takrenovering för villor, radhus, större fastigheter och byggnader.
          Sitter ni med i en styrelse för en bostadsrättsförening? Att ha ansvar
          för flera fastigheter innebär det ofta ett ganska tungt ansvar. Det
          förstår vi och därför kan vi erbjuda oss att ta hand om alla delarna
          av en takrenovering för era fastigheter. Om vi får ta hand om allt som
          gäller en takrenovering av era fastigheter så kommer vi ut, monterar
          byggställningar, informerar de boende om hela processen med
          takrenoveringen och ser till så att taket får en riktigt fin och säker
          yta som tål vinter, såväl som sommar och håller i många år framöver.
          Och vi ser till så att de boende blir så lite störda som möjligt och
          arbetar för att alla ska få en takrenovering som är så smidig som
          möjligt. Takrenovering Stockholm
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Takrenovering i Stockholm för privat villa
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Takrenovering i Stockholm för privat villa</h2>{" "}
            </Divider>
          )}
          Om ni är villa- eller radhusägare, så har ni alltid möjlighet till
          rot-avdrag för er takrenovering i Stockholm. En takrenovering eller
          takbyte där ni får möjlighet till rot avdrag på arbetskostnaderna,
          kommer att sänka priset på er takrenovering på ett betydligt sätt. Rot
          avdraget är skattefinansierat och något som alla fastighetsägare har
          möjlighet att söka. Avdraget är så mycket som upp till ⅓ del av
          arbetskostnaderna eller upp till 50 000 kronor/år. Vilket slags tak
          önskar ni? När vi utför takrenovering på er villa eller radhus har ni
          alltid möjligheten att även byta tak. Här har ni möjlighet att välja
          mellan tegeltak, tak med betongpannor, plåttak, papptak eller tak med
          Shingel. Dessa material kommer med ganska olika prislapp, utseende och
          hållbarhet.
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
          Priset varierar ganska mycket beroende på hållbarheten på de olika
          materialen. Kort sammanfattat kan man säga att ju längre hållbarhet,
          desto högre pris. Tegelpannor, som exempel går ju i princip aldrig
          sönder. De tillverkas för att bestå i över 40-50 år. Betongpannor och
          plåttak kan också bestå i så många år. Därför är priset som högst på
          dessa material till tak. Papptak och shingeltak håller i högst 20-25
          år och sedan bör takmaterialet bytas ut. Och priset är ju lägre på
          dessa typer av takmaterial. Så om ni inte vill anlita takläggare så
          ofta, så kan det vara värt att lägga tak med material av tegel- eller
          betongpannor. Om ni inte vill byta ut takmaterialet, renoverar vi
          taket genom att gå igenom alla delarna av yttertaket, takpappen,
          läkten, takstolar och ersätter de delarna på taket som är utslitna. Vi
          kan måla om taket och lägga om plåt som ofta sitter i skarvar mellan
          tak och hängrännor, tak och skorsten och taket och stuprör.
          {mobile ? (
            <h2
              style={{
                textAlign: "center",
                margin: "24px 0px",
                lineHeight: "35px",
              }}
            >
              Takrenovering i Stockholm för BRF
            </h2>
          ) : (
            <Divider style={{ marginTop: "35px" }} plain>
              <h2>Takrenovering i Stockholm för BRF</h2>{" "}
            </Divider>
          )}
          ARTAS Bygg är ett ansvarsfullt bygg- och renoveringsföretag som
          erbjuder er att ta hand om hela takrenoveringen för era fastigheter.
          Om ni anlitar oss behöver ni inte oroa er mer över takrenoveringen i
          Stockholm. Vi tar hand om att ge information till alla som bor i era
          fastigheter. Att få information om vad som pågår i den egna
          fastigheten anser vi är mycket viktigt, eftersom det skapar trygghet
          att veta vad som pågår i ens omedelbara närhet. Medan ni väljer
          material och omfattning av takrenoveringen. Så går det till att anlita
          oss för er takrenovering:
          <ul
            style={{
              textAlign: "left",
              marginBottom: "30px",
              marginTop: "30px",
              listStyleType: "none",
            }}
          >
            {checklist.map((element) => {
              return (
                <li key={element} style={{ padding: "10px" }}>
                  <CheckSquareOutlined
                    style={{ color: "#423FE8", marginRight: "10px" }}
                  />
                  {element}
                </li>
              );
            })}
          </ul>
          För att vi ska säkerställa att allt blir som ni önskar så kommer vi
          att hålla en kontinuerlig kontakt med er, som är beställare, och
          ansvarar för att takrenoveringen drivs framåt och blir klar i tid, i
          enlighet med det avtal som vi tecknar med er.
          <p>
            <Link href="/kontakt">
              Ta kontakt med oss när ni önskar en fin takrenovering i Stockholm!
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

export default Takrenovering;
