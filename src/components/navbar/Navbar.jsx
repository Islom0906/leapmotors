import Image from "next/image";
import logo from '/public/Logo.png'
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {isShowSidebar} from "@/slice/sidebar";

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
    const [checkLang, setCheckLang] = useState('ru')
    const [isChangeLang, setIsChangeLang] = useState(false)
    const {t, i18n} = useTranslation()
    const {show} = useSelector(state => state.sidebar)
    const dispatch = useDispatch()


    const showSidebar = (e, show) => {
        e.stopPropagation()
        dispatch(isShowSidebar(show))
    }

    useEffect(() => {
        const defaultLang = localStorage.getItem('langLeap')
        if (defaultLang !== checkLang) {
            setCheckLang(defaultLang)
        }
    }, []);

    useEffect(() => {
        if (isChangeLang) {
            i18n.changeLanguage(checkLang)
            localStorage.setItem('langLeap', checkLang)
        }
    }, [checkLang]);
    const changLang = (lang) => {
        setIsChangeLang(true)
        setCheckLang(lang)
        // setOpenNavbar(false)
    }

    return (<nav className="w-full fixed top-0 left-0 h-[60px] z-[999] " style={{background: "rgba(27, 27, 27, 0.85)"}}>
        <div className="container relative flex items-center justify-between w-full h-full">
            <div className="flex items-center justify-between sm:gap-20">
                <Link href="/" className="w-[154px] h-[34px] relative">
                    <Image
                        src={logo}
                        alt="Leapmotor"
                        className="object-contain"
                        fill
                    />

                </Link>
                <ul className="items-center hidden gap-10 text-white uppercase lg:flex">
                    <li><Link href="/C11Reev"
                              className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">C11
                        reev</Link></li>
                    <li><Link href="/C01"
                              className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">c01</Link>
                    </li>
                    <li><Link href="/C11"
                              className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">C11</Link>
                    </li>
                    <li><Link href="/T03"
                              className="hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-semibold">t03</Link>
                    </li>

                </ul>
            </div>
            <div className="flex items-center md:gap-14">
                <Link href="/store"
                      className="capitalize text-white hover:underline hover:text-[#4f5f82] transition-all ease duration-500 underline-offset-8 font-arial-semibold hidden lg:block">{t('navbar.store')}</Link>
                <div className="side-r">
                    <GiHamburgerMenu onClick={(e) => showSidebar(e, !show)}
                                     className="text-2xl text-white cursor-pointer"/>
                    <div onClick={(e) => e.stopPropagation()}
                         className={`fixed    top-0 ${show ? 'right-0' : '-right-full'} transition-[right]  duration-[.9s] bg-white w-full md:w-[200px] h-screen pt-5 pb-10 px-5 text-[#808080] shadow-2xl flex flex-col justify-between z-[99]`}>
                        <div>
                            <div className="flex justify-end mb-10">
                                <GrClose onClick={(e) => showSidebar(e, !show)}
                                         className="text-2xl cursor-pointer"/>
                            </div>
                            <ul className="space-y-5">
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/C11Reev"
                                          className="uppercase block lg:hidden ">c11 reev</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/C01"
                                          className="uppercase block lg:hidden ">c01</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/C11"
                                          className="uppercase block lg:hidden ">c11</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/T03"
                                          className="uppercase block lg:hidden ">t03</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/about"
                                          className="capitalize">{t('navbar.about')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/news"
                                          className="capitalize">{t('navbar.news')}</Link></li>
                                <li><Link onClick={(e) => showSidebar(e, false)} href="/store"
                                          className="capitalize">{t('navbar.store')}</Link></li>

                            </ul>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 relative flex-shrink-0">
                                <Image src="/global.png" alt="global" className="w-full h-full" fill/>
                            </div>
                            <div className="flex items-center gap-2 divide-x">
                                <button onClick={() => changLang('ru')}>Russia</button>
                                <button onClick={() => changLang('uz')} className="pl-2">Uzbek</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>)
}

export default Navbar
