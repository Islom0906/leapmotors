import "@/styles/globals.css";
import Layout from "@/layout/layout";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import '../localization/i18n'
import {useEffect, useTransition} from "react";
import * as i18n from "i18next";
import {useTranslation} from "react-i18next";


// import { Inter } from 'next/font/google'

// const inter = Inter({
//     subsets:['latin'],
// weight:['400','500','600','700']
// })
// className={inter.className}
export default function App({ Component, pageProps }) {
    const {i18n}=useTranslation()
    useEffect(() => {

        const getLang = localStorage.getItem('langLeap')
        if (!getLang) {

            localStorage.setItem('langLeap', 'ru')
        }
        console.log(getLang)
        i18n.changeLanguage(getLang)
    }, [])
  return (
    <HydrationProvider>
      <div>
        <main>
          <Layout>

            <Component {...pageProps} />

          </Layout>
        </main>
      </div>
    </HydrationProvider>
  );
}
