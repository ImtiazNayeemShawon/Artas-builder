import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import {
  InstagramOutlined, FacebookOutlined
} from '@ant-design/icons';
import Link from "next/link";
import TagManager from 'react-gtm-module'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


function MyApp({ Component, pageProps }: AppProps) {
  
  ReactGA.initialize('UA-192233039-7');

  useEffect(()=>{
      const tagManagerArgs = {
        gtmId: 'UA-192233039-7',
    } 
    ReactGA.initialize('UA-192233039-7');
    ReactGA.pageview(window.location.pathname + window.location.search);
    TagManager.initialize(tagManagerArgs)
  },[])


return <>
      <Head>
        <title>Artas</title>
        <meta name="description" content="Exclusive Bubilding company" />
        <meta
          name="google-site-verification"
          content="J5U7sqokWZQO3rMHsHKVt0U9p6iRqz2Obu1jV4Zy0ko"
        />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N8M3KGB');`
          }
       </Script>
       <div style={{position: 'relative'}}>
       <div className="stickySocial">
           <Link href="https://www.facebook.com/profile.php?id=100087368812278">
             <FacebookOutlined />
          </Link>
        </div>
        <div className="stickySocial2">
        <Link href="https://instagram.com/artasbyggab?igshid=YmMyMTA2M2">
            <InstagramOutlined />
            </Link>
        </div>
        <Component {...pageProps} />
        </div>
</>
}

export default MyApp
