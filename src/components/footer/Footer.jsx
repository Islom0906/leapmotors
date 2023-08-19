import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";

import {RiInstagramFill} from 'react-icons/ri';
import {BsTwitter} from 'react-icons/bs';
import leapLogoBlack from 'public/Leapmotor_logo.png'
import {useRouter} from "next/router";


const Footer = () => {
        const {t}=useTranslation()
    const {pathname}=useRouter()
        return (
          <>
            <footer className={`bg-[#e7eaf1] py-10 ${pathname==='/' && 'footer'}`}>
              <div className="container flex flex-col justify-between md:flex-row gap-7 md:gap-0 ">
                <ul className="flex flex-col items-center md:items-start gap-2 text-base text-[#4d5d81] font-bold order-2 md:order-1">
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("navbar.about")}</Link>
                  </li>
                  <li className={'flex justify-center'}>
                    <Link  className="text-center md:text-start" href="#">{t("navbar.news")}</Link>
                  </li>
                  <li className={'flex justify-center'}><Link  className="text-center md:text-start" href="#">{t('footer.privacy')}</Link></li>
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("footer.investor")}</Link>
                  </li>
                  <li className={'flex justify-center'}>
                    <Link className="text-center md:text-start"  href="#">{t("footer.cooking")}</Link>
                  </li>
                </ul>
                <div className="flex justify-center order-1 md:order-2">
                  <div className="w-[250px] aspect-[2/1] relative ">
                    <Image className="object-contain" fill src={leapLogoBlack} />
                  </div>
                </div>

                <div className="order-3 space-y-5">
                  <div className="flex flex-col items-center gap-3 text-base md:items-end">
                    <Link
                        href="tel:+864000081234"
                        className="text-[#4d5d81]   underline underline-offset-8 flex items-center gap-2"
                    >
                      <span>+998 99 807 07 08</span>
                    </Link>
                    <Link
                        href="tel:+864000081234"
                        className="text-[#4d5d81]   underline underline-offset-8 flex items-center gap-2"
                    >
                      <span> Oloy bozori </span>
                    </Link>
                  </div>
                  <div className="flex  gap-8  text-[#4d5d81] justify-center md:justify-end">
                    <Link href="#" className="">
                      <AiFillFacebook
                          className="text-xl md:text-2xl"
                          src="./project/Images/Facebook.png"
                          alt="Facebook"
                      />
                    </Link>
                    <Link href="#" className="">
                      <RiInstagramFill
                          className="text-xl md:text-2xl"
                          src="./project/Images/Twitter.png"
                          alt="Facebook"
                      />
                    </Link>
                    <Link href="#" className="">
                      <BsTwitter
                          className="text-xl md:text-2xl"
                          src="./project/Images/Instagram.png"
                          alt="Facebook"
                      />
                    </Link>
                  </div>
                  <Link
                      className="text-base text-[#4d5d81] font-bold flex gap-3 items-center justify-center"
                      href={"https://marss.uz/"}
                  >
                    <span>Sayt tayyorlovchi</span>
                     <Image className="flex-shrink-0 w-10 object-contain md:w-14 hover:rotate-[360deg] duration-700" src={'/A.png'} width={30} height={30}/>
                  </Link>
                </div>
              </div>
            </footer>

      {/*<footer class={`bg-white py-10 ${pathname==='/' && 'footer'}`}>*/}
      {/*  <div class="container flex md:flex-row flex-col justify-between   gap-7 md:gap-0 ">*/}
      {/*    <ul class="flex flex-col gap-4 md:gap-7 text-md md:text-xl text-[#4d5d81] font-bold order-2 md:order-1">*/}
      {/*      <li>*/}
      {/*        <Link href="#">{t("navbar.about")}</Link>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <Link href="#">{t("navbar.news")}</Link>*/}
      {/*      </li>*/}
      {/*      /!* <li><Link href="#">{t('footer.privacy')}</Link></li> *!/*/}
      {/*      <li>*/}
      {/*        <Link href="#">{t("footer.investor")}</Link>*/}
      {/*      </li>*/}
      {/*      <li><Link href="#">{t('footer.cooking')}</Link></li>*/}
      {/*    </ul>*/}
      {/*    <div className="flex justify-center order-1 md:order-2">*/}

      {/*  <div className="w-[100px] md:w-[200px] aspect-square relative ">*/}
      {/*      <Image className="object-contain" fill src={leapLogoBlack} />*/}
      {/*  </div>*/}
      {/*    </div>*/}

      {/*    <div className="order-3 space-y-5">*/}
      {/*      <div className="flex flex-col items-end gap-4 md:gap-7">*/}
      {/*        <Link*/}
      {/*          href="tel:+864000081234"*/}
      {/*          class="text-[#4d5d81]  text-sm md:text-lg leading-[28px] underline underline-offset-8 flex items-center gap-2"*/}
      {/*        >*/}
      {/*          <span>+998 99 807 07 08</span>*/}
      {/*        </Link>*/}
      {/*        <Link*/}
      {/*          href="tel:+864000081234"*/}
      {/*          class="text-[#4d5d81]  text-sm md:text-lg leading-[28px] underline underline-offset-8 flex items-center gap-2"*/}
      {/*        >*/}
      {/*          <span> Oloy bozori </span>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      <div class="flex  gap-8  text-[#4d5d81] justify-end">*/}
      {/*        <Link href="#" class="">*/}
      {/*          <AiFillFacebook*/}
      {/*            className="text-xl md:text-3xl"*/}
      {/*            src="./project/Images/Facebook.png"*/}
      {/*            alt="Facebook"*/}
      {/*            class="w-full h-full"*/}
      {/*          />*/}
      {/*        </Link>*/}
      {/*        <Link href="#" class="">*/}
      {/*          <RiInstagramFill*/}
      {/*            className="text-xl md:text-3xl"*/}
      {/*            src="./project/Images/Twitter.png"*/}
      {/*            alt="Facebook"*/}
      {/*            class="w-full h-full"*/}
      {/*          />*/}
      {/*        </Link>*/}
      {/*        <Link href="#" class="">*/}
      {/*          <BsTwitter*/}
      {/*            className="text-xl md:text-3xl"*/}
      {/*            src="./project/Images/Instagram.png"*/}
      {/*            alt="Facebook"*/}
      {/*            class="w-full h-full"*/}
      {/*          />*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      <Link className="text-sm md:text-xl text-[#4d5d81] font-bold flex gap-3 items-center justify-center" href={'https://marss.uz/'}>*/}
      {/*          <span>*/}
      {/*              Sayt tayyorlovchi*/}
      {/*          </span>*/}
      {/*          /!* <Image className="flex-shrink-0 w-10 md:w-14" src={MarssTeam}/> *!/*/}
      {/*          MarssTeam*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </>
        )
    }

export default Footer;
