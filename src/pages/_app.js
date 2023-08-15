import "@/styles/globals.css";
import Layout from "@/layout/layout";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import 'aos/dist/aos.css';


// import { Inter } from 'next/font/google'

// const inter = Inter({
//     subsets:['latin'],
// weight:['400','500','600','700']
// })
// className={inter.className}
export default function App({ Component, pageProps }) {
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
