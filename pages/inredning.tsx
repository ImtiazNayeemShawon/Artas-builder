import type { NextPage } from "next";
import { Suspense } from "react";
import Footer from "../conponents/footer/footer";
import { InteriorBaner } from "../conponents/mainBaner/InteriorBaner";
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Style from "../conponents/mainBaner/InteriorStyles.module.scss";
import Image from "next/image";
//Image imported from public folder

import Section2i from "../public/section2i.png";
import Section2ii from "../public/section2ii.png";
import Section2iii from "../public/section2iii.png";
import Section2iv from "../public/section2iv.png";

import Section3i from "../public/section3i.png";
import Section3ii from "../public/section3ii.png";
import Section3iii from "../public/section3iii.png";

import Section4i from "../public/section4i.png";
import Section4ii from "../public/section4ii.png";
import Section4iii from "../public/section4iii.png";

import Section5i from "../public/section5i.png";
import Section5ii from "../public/section5ii.png";
import Section5iii from "../public/section5iii.png";
import Section5iv from "../public/section5iv.png";
import Section5v from "../public/section5v.png";
import Section5vi from "../public/section5vi.png";
import Section5vii from "../public/section5vii.png";

const Interior: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <Head>
        <title>Inredning | Artas Bygg</title>
        <meta
          name="description"
          content="Vi tar inredning till en ny nivå tack vare våra inredningsarkitekter. Läs mer om vad som gör oss unika och kontakta oss idag för förverkligande av er dröm."
          key="desc"
        />
      </Head>
      <div>
        {/*Interior banner Component*/}
        <header>
          <InteriorBaner />
        </header>
        {/*Interior banner Component*/}

        <main>
          <div className={Style.Body}>
            {/* Interior Column 1  */}
            <div className={Style.InteriorSection1}>
              <div className={Style.SectionData}>
                <h2>OMFATTANDE UTFORMNING</h2> <br />
                <p>
                  I samarbete med arkitekter och inredningsarkitekter
                  specialiserar vi oss på komplexa projekt för bostäder, hus,
                  villor och lägenheter. Vi utför även kommersiella projekt,
                  t.ex. kontorslokaler, pensionat, spa och hotell. Innan vi
                  påbörjar designprocessen tar vi ett möte med kunden för att
                  djupdyka och förstå deras önskemål och förväntningar fullt ut.
                  Sedan består projektet av fyra delar: Förslag till funktionell
                  layout Utformning av konceptet Framtagande av
                  konstruktionsritningar samt Möbelritningar.
                </p>
              </div>
            </div>
            <div className={Style.InteriorSection2}>
              <div className={Style.img1}>
                <Image src={Section2i} height={400} alt="section images" />
              </div>
              <div className={Style.img2}>
                <Image src={Section2ii} height={400} alt="section images" />
              </div>
              <div className={Style.responsiveimg}>
                <Image src={Section2iii} height={500} alt="section images" />
              </div>
              <div className={Style.img3}>
                <Image src={Section2iii} height={400} alt="section images" />
              </div>
              <div className={Style.img4}>
                <Image src={Section2iv} height={400} alt="section images" />
              </div>
            </div>

            {/* Interior Column 2  */}
            <div className={Style.InteriorSection1}>
              <div className={Style.SectionData2}>
                <h2>SERVICE FRÅN A TILL Ö</h2> <br />
                <p>
                  Vi erbjuder också en tjänst för byggnadsövervakning. För vem
                  skulle en sådan tjänst vara idealisk? För de som inte vill
                  eller kan ägna sin tid åt renovering eller kontrollmoment. För
                  dem som bor långt bort och inte kan resa till
                  byggarbetsplatsen ﬂera gånger i veckan. Passar perfekt om du
                  vill undvika att själv agera samordnare, byggledare och
                  arbetsledare i en och samma person. Till dig som föredrar att
                  ägna sin tid åt sitt andra saker såsom karriär eller
                  familjeliv och vet att det är en svår process att bygga ett
                  hus eller renovera ett hus. Passar dig som förmodligen
                  föredrar att låta proffsen själva ta hand om projektet.
                </p>
              </div>
            </div>
            <div className={Style.InteriorSectionImg1}>
              <div className={Style.imgSection2i}>
                <Image src={Section3i} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection2}>
                <Image src={Section3ii} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection2}>
                <Image src={Section3iii} height={400} alt="section images" />
              </div>
            </div>

            {/* Interior Column 3  */}
            <div className={Style.InteriorSection1}>
              <div className={Style.SectionData}>
                <h2> INKÖP </h2> <br />
                <p>
                Efter ett gemensamt urval av produkter, material och möbler tar vi även hand om beställning, logistik och hela inköpsprocessen. Vi samarbetar med väletablerade tillverkare, vilket ger för dig som kund garantier, säkerhet och högsta produktkvalitet.

                </p>
              </div>
            </div>
            <div className={Style.InteriorSectionImg2}>
              <div className={Style.imgSection2i}>
                <Image src={Section4i} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection2}>
                <Image src={Section4ii} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection2}>
                <Image src={Section4iii} height={400} alt="section images" />
              </div>
            </div>
            {/* Interior section 4  */}
            <div className={Style.InteriorSection1}>
              <div className={Style.SectionData2}>
                <h2>INVÄNDIG MÅLNING</h2> <br />
                <p>
                Vår inredningsarkitekt Katarzyna Kowalska är förutom designer även målare. För dem som är intresserade kan hon komplettera era utrymmen med konst
                </p>
              </div>
            </div>
            <div className={Style.InteriorSectionImg3}>
              <div className={Style.imgSection3}>
                <Image src={Section5iii} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection3}>
                <Image src={Section5ii} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection3}>
                <Image src={Section5iv} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection3}>
                <Image src={Section5vi} height={400} alt="section images" />
              </div>
            </div>
            <br />
            <div className={Style.InteriorSectionBottom}>
              <div className={Style.imgSection4}>
                {" "}
                <Image
                  src={Section5vii}
                  width={400}
                  height={400}
                  alt="section images"
                />
              </div>
              <div className={Style.imgSection4}>
                {" "}
                <Image src={Section5i} height={400} alt="section images" />
              </div>
              <div className={Style.imgSection4}>
                {" "}
                <Image src={Section5v} height={400} alt="section images" />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Suspense>
  );
};

export default Interior;
