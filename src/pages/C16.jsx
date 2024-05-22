import {CarBanner, CarBannerContentBottom, CarDetailBanner, CarText} from "@/components";
import Image from "next/image";
import {PiCaretDownBold} from "react-icons/pi";
import Link from "next/link";
import {checkCarModel} from "@/slice/testDrive";
import {setCarModal} from "@/slice/sale";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";


const C16 = () => {
    const {t} = useTranslation()
    const dispatch=useDispatch()
    const C16Data = {
        logo: `${process.env.NEXT_PUBLIC_API_URL}/media/6d679323-49fd-40b3-ab9b-a1d7ac33a443-logo.png`,
        section1: {
            subTitle: 'Флагманская разработка технологической архитектуры LEAP 3.0 Суперкомфортный и умный 6-местный внедорожник',
            bg: `${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-1.png`,
            bgRes: `${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-1-res.jpg`,
            content: [
                {
                    title: 'Чистый электрический стандарт',
                    content: 'Глобальная платформа высокого напряжения SIC 800 В',
                },
                {
                    title: 'Стандартная конфигурация SA8295P',
                    content: 'Интеллект верхнего уровня',
                },
                {
                    title: 'Золотая 6-местная компоновка',
                    content: '2+2+2',
                },
                {
                    title: 'Супер удобно',
                    content: 'Сиденья второго и третьего ряда',
                },
            ],
        },


    };

    const carBottomContent1 = [

        {
            subTitle: '2+2+2 золотая раскладка',
        },
        {
            subTitle: 'Суперкомфортный и независимый второй ряд',
        },
        {
            subTitle: 'Комфортные и равноправные трехрядные сиденья.',
        },
        {
            subTitle: '15,6-дюймовый задний экран высокого разрешения',
        }
    ]

    const carBottomContent2 = [

        {
            subTitle: 'Кабина Qualcomm SA8295P',
        },
        {
            subTitle: 'Чип NVIDIA Orin-X, лидар',
        },
        {
            subTitle: 'Роскошный звук с 21 динамиком',
        }
    ]

    const disclaimers = [
        '* Модели, представленные в рекламе (внешний вид, цвет, интерьер, конфигурация, функции, интерфейс пользовательского интерфейса и т. д.), являются креативными и могут отличаться от серийных моделей. См. окончательную серийную модель.',
        '* Некоторые конфигурации разделены на разные версии. Конкретная конфигурация зависит от официальной таблицы конфигурации, которая будет официально опубликована позже.',
        '* Содержимое, представленное на странице, составлено на основе информации о состоянии конфигурации автомобиля на момент написания. По некоторым объективным причинам, таким как постоянные изменения в законах и правилах, личные различия в понимании соответствующей информации, вводная информация может быть недоступна. своевременно обновляется и т. д., фактический автомобиль может отличаться от вводной информации. Существуют определенные различия. Окончательную информацию см. в фактическом автомобиле, выставленном на продажу.',
        '* Leapmotor Auto оставляет за собой право интерпретировать и сохранять за собой право изменять технические параметры, конфигурацию и другую информацию о продукте в пределах, разрешенных законом.'

    ];

    return (
        <main className={'bg-black'}>
            {/* section1 */}
            <section className="h-screen ">
                <div className="relative w-full h-full">
                    <Image
                        alt="car"
                        src={C16Data.section1.bgRes}
                        className="absolute top-0 left-0 block object-cover w-full h-full md:hidden"
                        fill
                    />
                    <Image
                        alt="car"
                        src={C16Data.section1.bg}
                        className="absolute top-0 left-0 hidden object-cover w-full h-full md:block"
                        fill
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full pt-20 ">
                        <div
                            className="container flex flex-col items-center justify-between h-full lg:justify-start">
                            <div>
                                <div className="relative h-[29px] mx-auto w-[60px]">
                                    <Image
                                        src={C16Data.logo}
                                        alt="logo"
                                        className="w-full h-full mx-auto"
                                        fill
                                    />
                                </div>
                                <div className="mb-3 text-center">
                                    <p className="text-white lg:text-black font-normal text-[20px] leading-[30px] md:leading-[56px]">
                                        {C16Data.section1.subTitle}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5 pb-5">
                                <div
                                    className="grid grid-cols-2 lg:grid-cols-4 justify-center text-white lg:text-black  gap-1 lg:gap-2"
                                >
                                    {C16Data.section1.content.map((item, ind, arr) => (
                                        <div
                                            key={ind}
                                            className={`flex flex-col  justify-center gap-3 px-6 ${arr.length - 1 == ind ? "" : "lg:border-r-2 border-r-[#BFB5B4]"}  `}>
                                            <p className="text-[10px]  lg:text-sm  font-medium">
                                                {item.title}
                                            </p>
                                            <p className="text-sm font-normal">
                                                {item.content}
                                            </p>
                                        </div>


                                    ))}
                                </div>

                                <PiCaretDownBold className="block w-6 h-6 text-white lg:hidden"/>
                                <div className="flex items-center justify-center mt-5 space-x-2">
                                    <Link

                                        href="/drive"
                                        onClick={() => dispatch(checkCarModel('C16'))}
                                        className=" text-white text-lg bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"
                                    >
                                        {t('navbar.testDrive')}
                                    </Link>

                                    {/*<Link*/}

                                    {/*    href="/car-sale"*/}
                                    {/*    onClick={() => dispatch(setCarModal('C16'))}*/}
                                    {/*    className=" text-white text-lg  bg-transparent border border-white w-auto px-2 md:px-0 md:w-[185px] flex  justify-center py-1 hover:text-[#4f5f81] hover:bg-white transition-all ease duration-500"*/}
                                    {/*>*/}
                                    {/*    Забронируйте*/}
                                    {/*</Link>*/}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </section>
            {/*section2*/}

            <CarBanner title={'Ориентировочная цена продажи составляет менее 200 000 юаней.'}
                       textColor={'black'}
                       bottom={true}
                       subTitle={'В период бронирования внесите залог в размере 1000 юаней, который можно использовать для вычета 5000 юаней из стоимости покупки автомобиля.'}
                       bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-2.png`}
                       bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-2-res.png`}
                       bottomTitle={'Предварительная цена является лишь ориентировочной ценой производителя и не должна рассматриваться как предложение. Официальная цена продажи продукта должна основываться на официальной цене розничного магазина.'}
                       bottomSectitle={'Вышеуказанные права на резервирование применимы к пользователям, которые вносят депозит в размере 1000 юаней через официальные каналы Leapao с 25 апреля 2024 года до 24:00 за день до официального запуска C16. Для получения подробной информации о правах см. официальное приложение Leapao или проконсультируйтесь. местный авторизованный магазин.'}

            />
            {/*section3*/}

            <CarBanner
                title={'Комфортное использование MPV'}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-3.jpg`}
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-3-res.jpg`}
                textColor={'white'}
                bottom={true}
                bottomList={true}
                content={carBottomContent1}
            />
            {/*section4*/}
            <CarBanner
                title={'Интеллектуальное оборудование высокого уровня'}
                bg={`${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-4.jpg`}
                bgRes={`${process.env.NEXT_PUBLIC_API_URL}/media/c16/section-4-res.jpg`}
                textColor={'white'}
                bottom={true}
                bottomList={true}
                content={carBottomContent2}
            />
        {/*    section5*/}
            <CarText content={disclaimers} />
        </main>
    )
        ;
};

export default C16;