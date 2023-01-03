import useTranslation from "next-translate/useTranslation";
import { Suspense, useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import one from '../public/roof.jpg'
import oneSx from '../public/roof_sx.jpg'

import two from '../public/stenlagging.jpg'
import twoSX from '../public/stone_sx.jpg'
import three from '../public/extenstion.jpg'
import threeSx from '../public/extenstion_sx.jpg'
import tlo from '../public/lagen.jpg'
import tloSx from '../public/SX_realization.jpg'


import "antd/dist/antd.css";
import Footer from "../conponents/footer/footer";
import Head from "next/head";
import Image from "next/image";


const images = [
  {
    original: one.src,
    thumbnail: oneSx.src
  },
  {
    original: two.src,
    thumbnail: twoSX.src
  },
  {
    original: three.src,
    thumbnail: threeSx.src,
  },
];
export default function AnotherPage() {
const {t} = useTranslation()

const [mobile, setMobile] = useState<boolean>();

useEffect(() => {
  if (window.innerWidth + 100 <= window.innerHeight) {
    setMobile(true);
  } else {
    setMobile(false);
  }

  function handleResize() {
    if (window.innerWidth + 100 <= window.innerHeight) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <Suspense fallback="loading">
      <Head>
        <title>
           Artas Bygg l Referenser
        </title>
        <meta
          name="description"
          content="Vill du se bilder från våra tidigare eller pågående projekt? Här hittar
          du fina bilder som ni kan använda som referens."
          key="desc"
        />
      </Head>
    <div>
      <header>
        <GlobalBaner classBackgroundSx={`url(${tloSx.src})`} header={<span style={{color: 'white', backgroundColor: mobile ?  "rgba(0,0,0,0.4)" : 'none', padding: '10px'}}>{t("about:realization_header")}</span>} classBackground={`url(${tlo.src})`} />
      </header>
      <div style={{width: '100%', minHeight: '40vw', backgroundColor: 'white', position: 'relative'}}> 
          <Image
              src={"/banerfindusonigfb.jpg"}
              alt="banerfindusonigfb"
              objectFit="contain"
              layout="fill"
          />
      </div>
      <div style={{width: '100%', minHeight: '50px', backgroundColor: '#423FE8'}}> 
      </div>
      <div style={{ margin: '40px 0', paddingTop: '0px'}}>
      <div style={{width: '90%', maxWidth: '1300px', margin: 'auto', marginTop: '50px'}}>
        <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>;
        </div>
        </div>
       <footer>
          <Footer/>
        </footer>
      </div>
    </Suspense>
  );
}
