import AOS from 'aos';
import {useEffect} from 'react';


import Image from "next/image";
import {BannerImage} from "@/components";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Head from "next/head";
import axios from "axios";
import {useSelector} from "react-redux";


export default function Home({banner, products}) {
    const {lang}=useSelector(state => state.lang)

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);


    
    return (
        <>
            <Head>
                <title>Leapmotorca</title>
                <meta property='og:title' content="Leapmotorca,Leapmotorca,Leapmotor uz, Leapmotor uzbekistan,Leapmotorca"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <main className={'bg-black section'}>
                <section className="relative w-full h-screen scroll-snap">
                    <video className="object-cover w-full h-full" autoPlay  loop muted>
                        <source className="w-full"
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.videoBanner?.path}`}
                                type="video/mp4"/>
                    </video>


                    <div className="absolute  top-[30%] left-[50%] md:top-[50%] md:translate-y-[-50%] translate-y-[-30%] translate-x-[-50%] opacity-90">
                        <div data-aos='fade-up' className="w-[180px] h-[180px] mx-auto bg-transparent relative">
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.imageBrand?.path}`} alt="brand"
                                   fill className="object-contain w-full h-full"/>
                        </div>
                        <div data-aos='fade-up' className="w-[250px] h-[80px] md:w-[532px] md:h-[118px] bg-transparent relative">
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.imageLogo?.path}`} alt="logo" fill
                                   className="object-contain w-full h-full"/>
                        </div>
                    </div>
                </section>
                {
                    products?.map((product) => (
                        <BannerImage key={product?._id}
                                     bg={`${process.env.NEXT_PUBLIC_API_URL}/${product?.imageBanner?.path}`}
                                     logo={`${process.env.NEXT_PUBLIC_API_URL}/${product?.imageLogo?.path}`}
                                     text={lang ==='ru' ? product?.textRu :product?.textUz} link={product?.model}
                                     bgRes={`${process.env.NEXT_PUBLIC_API_URL}/${product?.model==="C11Reev" ? "media/82b5ac37-04f6-4cd6-adae-73297536767e-c11-reev-res.jpg" : product?.model==="C01" ? "media/8e828ba1-2076-45a3-8106-aa01c1e49de4-c01-res.png" : product?.model==="C11" ? "media/64d2f78d-e96c-47fb-b605-98e562ccebf1-screen-C11-res.jpg" : product?.model==="T03" && "media/b8e51963-82f2-42e5-bc35-ffff6a254da2-t03-res.jpg"    }` }
                                     />

                    ))

                }
            </main>
        </>
    )
}


export async function getServerSideProps({req, res}) {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // Fetch data from external API
    const [banner, product] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`),
    ])

    // Pass data to the page via props
    return {
        props: {
            banner: banner.data,
            products: product.data,
        }
    };
}
