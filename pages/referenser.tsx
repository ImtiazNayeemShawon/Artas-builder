import useTranslation from "next-translate/useTranslation";
import { Suspense } from "react";
import ImageGallery from 'react-image-gallery';
import { GlobalBaner } from "../conponents/mainBaner/GlobalBaner";
import one from '../public/roof.jpg'
import oneSx from '../public/roof_sx.jpg'

import two from '../public/stenlagging.jpg'
import twoSX from '../public/stone_sx.jpg'
import three from '../public/extenstion.jpg'
import threeSx from '../public/extenstion_sx.jpg'
import tlo from '../public/lagen.jpg'
import tloSx from '../public/lagen_sx.jpg'


import "antd/dist/antd.css";
import Footer from "../conponents/footer/footer";
import Head from "next/head";


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
        <GlobalBaner classBackgroundSx={tloSx.src} header={<span style={{color: 'white'}}>{t("about:realization_header")}</span>} classBackground={`url(${tlo.src})`} />
      </header>
      <div style={{ margin: '40px 0', paddingTop: '20px'}}>
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
