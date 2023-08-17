import {AiFillFacebook} from 'react-icons/ai'
import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import {RiInstagramFill} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';
import leapLogoBlack from 'public/Leapmotor_logo.png'


const Footer = () => {
        const {t}=useTranslation()
        return (
            <>
                <footer class="bg-white py-10">
                    <div class="container">
                        <ul class="flex flex-wrap gap-7 text-xl text-[#4d5d81] font-bold mb-10">
                            <li><Link href="#">{t('navbar.about')}</Link></li>
                            <li><Link href="#">{t('navbar.news')}</Link></li>
                            <li><Link href="#">{t('footer.privacy')}</Link></li>
                            <li><Link href="#">{t('footer.investor')}</Link></li>
                            <li><Link href="#">{t('footer.cooking')}</Link></li>
                        </ul>
                        <div>
                            <a href="tel:+864000081234"
                               class="text-[#707070] text-lg leading-[28px] underline underline-offset-8 mb-1">+86
                                400-008-1234</a>
                            <div class="flex gap-8 pt-5">
                                <Link href="#" class="">
                                    <AiFillFacebook className='text-3xl' src="./project/Images/Facebook.png"
                                                    alt="Facebook" class="w-full h-full"/>
                                </Link>
                                <Link href="#" class="">
                                    <AiFillFacebook className='text-3xl' src="./project/Images/Twitter.png"
                                                    alt="Facebook" class="w-full h-full"/>
                                </Link>
                                <Link href="#" class="">
                                    <AiFillFacebook className='text-3xl' src="./project/Images/Instagram.png"
                                                    alt="Facebook" class="w-full h-full"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }

export default Footer;
