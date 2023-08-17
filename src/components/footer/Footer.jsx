import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";

import {RiInstagramFill} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';
import leapLogoBlack from 'public/Leapmotor_logo.png'git


const Footer = () => {
        const {t}=useTranslation()
        return (
          <>
      <footer class="bg-white py-10">
        <div class="container flex md:flex-row flex-col justify-between   gap-7 md:gap-0 ">
          <ul class="flex flex-col gap-4 md:gap-7 text-md md:text-xl text-[#4d5d81] font-bold order-2 md:order-1">
            <li>
              <Link href="#">{t("navbar.about")}</Link>
            </li>
            <li>
              <Link href="#">{t("navbar.news")}</Link>
            </li>
            {/* <li><Link href="#">{t('footer.privacy')}</Link></li> */}
            <li>
              <Link href="#">{t("footer.investor")}</Link>
            </li>
            <li><Link href="#">{t('footer.cooking')}</Link></li>
          </ul>
          <div className="flex justify-center order-1 md:order-2">

        <div className="w-[100px] md:w-[200px] aspect-square relative ">
            <Image className="object-contain" fill src={leapLogoBlack} />
        </div>
          </div>

          <div className="order-3 space-y-5">
            <div className="flex flex-col items-end gap-4 md:gap-7">
              <Link
                href="tel:+864000081234"
                class="text-[#4d5d81]  text-sm md:text-lg leading-[28px] underline underline-offset-8 flex items-center gap-2"
              >
                <span>+998 99 807 07 08</span>
              </Link>
              <Link
                href="tel:+864000081234"
                class="text-[#4d5d81]  text-sm md:text-lg leading-[28px] underline underline-offset-8 flex items-center gap-2"
              >
                <span> Oloy bozori </span>
              </Link>
            </div>
            <div class="flex  gap-8  text-[#4d5d81] justify-end">
              <Link href="#" class="">
                <AiFillFacebook
                  className="text-xl md:text-3xl"
                  src="./project/Images/Facebook.png"
                  alt="Facebook"
                  class="w-full h-full"
                />
              </Link>
              <Link href="#" class="">
                <RiInstagramFill
                  className="text-xl md:text-3xl"
                  src="./project/Images/Twitter.png"
                  alt="Facebook"
                  class="w-full h-full"
                />
              </Link>
              <Link href="#" class="">
                <BsTwitter
                  className="text-xl md:text-3xl"
                  src="./project/Images/Instagram.png"
                  alt="Facebook"
                  class="w-full h-full"
                />
              </Link>
            </div>
            <Link className="text-sm md:text-xl text-[#4d5d81] font-bold flex gap-3 items-center justify-center" href={'https://marss.uz/'}>
                <span>
                    Sayt tayyorlovchi
                </span>
                {/* <Image className="flex-shrink-0 w-10 md:w-14" src={MarssTeam}/> */}
                MarssTeam
            </Link>
          </div>
        </div>
      </footer>
    </>
        )
    }

export default Footer;
