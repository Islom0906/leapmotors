import Link from 'next/link'
import news1 from '/public/section-bg-1.jpg'
import {NewsCard} from '@/components'
import Head from "next/head";


const news = () => {
    return (

        <>
            <Head>
                <title>Leapmotor-News Roow</title>
                <meta property='og:title' content="Leapmotor uz News, Leapmotor uzbekistan News,Leap-motor News"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
        <section className="mt-4  ">
            <div className="container ">
                <div className="pt-[80px] pb-[60px]">
                    <Link href="#" className="text-[#4d5d81] text-[20px] font-semibold"
                    >News Room
                    </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <NewsCard url={"1"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'}
                              data={'February 25, 2022'}/>
                    <NewsCard url={"1"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'}
                              data={'February 25, 2022'}/>
                    <NewsCard url={"1"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'}
                              data={'February 25, 2022'}/>
                    <NewsCard url={"1"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'}
                              data={'February 25, 2022'}/>


                </div>
            </div>
        </section>
        </>

    )
}

export default news
