import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";

import {RiInstagramFill} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';
import leapLogoBlack from 'public/Leapmotor_logo.png'
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import apiService from "@/service/api";


const Footer = () => {
        const {t}=useTranslation()
    const {pathname}=useRouter()

  const {
    data,
  } = useQuery('get-contact', () => apiService.getData('/contact'))
        return (
          <>
            <footer className={`bg-[#e7eaf1] py-10 ${pathname==='/' && 'footer'}`}>
              <div className="container flex flex-col justify-between md:flex-row gap-7 md:gap-0 ">
                <ul className="flex flex-col items-center md:items-start gap-4 text-base text-[#4d5d81] font-bold order-2 md:order-1">
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("navbar.about")}</Link>
                  </li>
                  <li className={'flex justify-center'}>
                    <Link  className="text-center md:text-start" href="#">{t("navbar.news")}</Link>
                  </li>
                  {/*<li className={'flex justify-center'}><Link  className="text-center md:text-start" href="#">{t('footer.privacy')}</Link></li>*/}
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("footer.investor")}</Link>
                  </li>
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("footer.cooking")}</Link>
                  </li>
                </ul>
                <div className="flex justify-center order-1 md:order-2">
                  <Link href={'/'} className="w-[250px] aspect-[2/1] relative ">
                    <Image className="object-contain" fill src={leapLogoBlack} />
                  </Link>
                </div>

                <div className="order-3 space-y-5">
                  <div className="flex flex-col items-center gap-3 text-base md:items-end">
                    <a
                      href={`tel:${data?.data?.tel}`}
                        className="text-[#4d5d81]   underline underline-offset-8 flex items-center gap-2"
                    >
                      <span>{data?.data?.tel}</span>
                    </a>
                    <a
                        href={`tel:${data?.data?.tel}`}
                        className="text-[#4d5d81]   underline underline-offset-8 flex items-center gap-2"
                    >
                      <span> Oloy bozori </span>
                    </a>
                  </div>
                  <div className="flex  gap-8  text-[#4d5d81] justify-center md:justify-end">
                    <a target={'_blank'} href={data?.data?.facebook} className="">
                      <AiFillFacebook
                          className="text-xl md:text-2xl"
                      />
                    </a>
                    <a target={'_blank'} href={data?.data?.instagram} className="">
                      <RiInstagramFill
                          className="text-xl md:text-2xl"

                      />
                    </a>
                    <a target={'_blank'} href={data?.data?.twitter} className="">
                      <BsTwitter
                          className="text-xl md:text-2xl"

                      />
                    </a>
                  </div>
                  <a target={'_blank'}
                      className="text-base text-[#4d5d81] font-bold flex gap-3 items-center justify-center"
                      href={"https://abduganiev.uz/"}
                  >
                    <span>Sayt tayyorlovchi</span>
                    <div className={'w-[50px] h-[50px] relative'}>
                      <Image className="flex-shrink-0 w-10 object-contain md:w-14 hover:rotate-[360deg] duration-700" fill src={'/A.png'} />

                    </div>
                  </a>
                </div>
              </div>
            </footer>

    </>
        )
    }

export default Footer;
