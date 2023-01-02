import type { NextPage } from 'next'
import { Suspense } from 'react'
import Footer from '../conponents/footer/footer'
import sky from '../public/testimonials.png'
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import { GlobalBaner } from '../conponents/mainBaner/GlobalBaner'
import { TestimonialsPage } from '../conponents/testimonials/TestimonialsPage';
import Head from 'next/head';


const Omdomen: NextPage = () => {

  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <Head>
        <title>
          Artas Bygg l Omdömen
        </title>
        <meta
          name="description"
          content="Vi vill såklart att ni ska känna er trygga i att anlita oss för ert
          projekt. Här kan ni läsa om vad våra tidigare kunder tycker om oss."
          key="desc"
        />
      </Head>
    <div>
      <header className='testimonials'>
        <GlobalBaner header={<span style={{color: 'white'}}>{t("testimonials:header_baner")}</span>} classBackground={`url(${sky.src})`} />
      </header>
       <main>
        <TestimonialsPage/> 
       </main>
       <footer>
          <Footer/>
        </footer>
      </div>
    </Suspense>
  )
}

export default Omdomen
