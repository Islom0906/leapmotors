import {GoogleMap, StoreBox} from "@/components";
import Head from "next/head";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useSelector} from "react-redux";

const DealersCenter = ({filial,filialInner,map}) => {
    const {lang}=useSelector(state => state.lang)
    return (
        <>
            <Head>
                <title>Leap-Motor DealersCenter</title>
                <meta property='og:title' content="Leapmotor uz DealersCenter, Leapmotor uzbekistan DealersCenter,Leap-motor DealersCenter"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
            <div className={'bg-black store'}>
                <header className="bg-black lg:pt-[60px] h-[100vh] ">
                    <div className="grid w-full h-full gap-4 overflow-x-hidden overflow-y-hidden lg:grid-cols-2">
                        {
                            filial?.map(item=>(
                        <StoreBox key={item?._id} text={lang==='ru' ? item?.titleRu: item?.titleUz} bg={`${process.env.NEXT_PUBLIC_API_URL}/${item?.image?.path}`}/>

                            ))
                        }
                    </div>
                </header>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {
                        filialInner?.map(item=>(
                            <StoreBox key={item?._id} bg={item?.images}/>

                        ))
                    }

                </div>
                <div className={'h-auto md:min-h-screen w-full relative bg-[#f5f5f5] '}>
                    <GoogleMap mapData={map}/>
                </div>
            </div>
        </>

    );
};


export async function getServerSideProps({req, res}) {

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    // Fetch data from external API
    const [filial, filialInner,map] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filial`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filialInner`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/map`),
    ])

    // Pass data to the page via props
    return {
        props: {
            filial: filial.data,
            filialInner: filialInner.data,
            map: map.data,
        }
    };
}


export default DealersCenter;
