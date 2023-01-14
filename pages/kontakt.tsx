import type { NextPage } from 'next'
import { Suspense } from 'react'
import { FormConact } from '../conponents/contact/formContact'
import Map from '../conponents/contact/map'
import Footer from '../conponents/footer/footer'
import { ContactBaner } from '../conponents/mainBaner/ContactBaner'
import "antd/dist/antd.css";
import useTranslation from "next-translate/useTranslation";
import Head from 'next/head'
import {CopyOutlined} from '@ant-design/icons';



const Contact: NextPage = () => {

  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <Head>
        <title>
          Kontakta oss
        </title>
        <meta
          name="description"
          content="Önskar du att komma i kontakt med oss! Du når oss via telefon,
          mejl eller via kontaktformuläret på hemsidan."
          key="desc"
        />
      </Head>
    <div>
      <header>
        <ContactBaner />
      </header>
       <main>
        <div className='maxWidth-contact'>
          <div className='container-contact'>
           <div className='contact-item-c'>
             <FormConact/>
           </div>
          <div className='contact-item'>
            <div className='contact-item-content'>
           
            {t("contact:contact_content")}
            <h2>{t("contact:adress")}</h2> 
             Näsbyvägen 2, 183 30 Täby 
            <h2>{t("contact:phone")}</h2> 
            <a href="tel:0702784918"> 0702784918</a>
           <h2> {t("contact:email")}</h2>
            <a href="mailto:biuro@artasbygg.com">biuro@artasbygg.com</a>
            </div>
          </div>
          </div>
        </div>
       <div className="mapWrapper">
          <Map/>
       </div>
       </main>
       <footer>
          <Footer/>
        </footer>
      </div>
    </Suspense>
  )
}

export default Contact
