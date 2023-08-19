import "@/styles/globals.css";
import Layout from "@/layout/layout";
import {HydrationProvider, Server, Client} from "react-hydration-provider";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import '../localization/i18n'
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import 'aos/dist/aos.css';
import {Provider} from "react-redux";
import {store} from "@/store";


// import { Inter } from 'next/font/google'

// const inter = Inter({
//     subsets:['latin'],
// weight:['400','500','600','700']
// })
// className={inter.className}
export default function App({Component, pageProps}) {
    const {i18n} = useTranslation()

    useEffect(() => {
        const getLang = localStorage.getItem('langLeap')
        if (!getLang) {
            localStorage.setItem('langLeap', 'ru')
        }
        console.log(getLang)
        i18n.changeLanguage(getLang)
    }, [])

    return (
        <Provider store={store}>
            <HydrationProvider>
                <main>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </main>
            </HydrationProvider>
        </Provider>
    );
}
