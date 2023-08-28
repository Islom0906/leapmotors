import Link from 'next/link'
import {NewsCard} from '@/components'
import Head from "next/head";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";


const news = ({news}) => {
    const {lang} = useSelector(state => state.lang)
    const {t}=useTranslation()
    return (

        <>
            <Head>
                <title>Leapotorca News</title>
                <meta property='og:title' content="Leapotorca uz News, Leapmotor uzbekistan News,Leapotorca News"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <section className="mt-4">
                <div className="container ">
                    <div className="pt-[80px] pb-[60px]">
                        <p  className="text-[#4d5d81] text-[20px] font-semibold"
                        >{t('news.title')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {
                            news?.map((item) => (
                                <NewsCard key={item?._id} url={item?.slug} img={item?.description[0]?.image?.path}
                                          text={lang === 'ru' ? item?.titleRu : item?.titleUz}
                                          data={item?.createdAt}/>
                            ))
                        }


                    </div>
                </div>
            </section>
        </>

    )
}


export async function getServerSideProps({req, res}) {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // Fetch data from external API
    const [news] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news`),
    ])

    // Pass data to the page via props
    return {
        props: {
            news: news.data
        }
    };
}

export default news
