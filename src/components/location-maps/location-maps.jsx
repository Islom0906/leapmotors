import { IoLocationSharp, IoEarth } from "react-icons/io5";
import { BiSolidPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/Hi";
import sectionC11ReevBg from "/public/section-bg-1.jpg";
import Image from "next/image";
  

const LocationMaps = () => {
  return (
    <>
      <section >
        <div >
          <div className="relative h-auto bg-white md:h-screen">
            <div className="h-full md:w-full md:p-10 md:absolute">
              <div className="grid content-center h-full grid-cols-2 md:grid-cols-4">
                <div className="col-span-1 overflow-y-scroll bg-white ">
                  <div className="px-4 py-4 bg-white border border-gray-300 md:px-7 md:py-7">
                    <h3 className="mb-4 text-3xl font-semibold uppercase text-slate-900">
                      kebzU
                    </h3>
                    <div href="#" className="flex items-center mb-4 ml-2">
                      <p className="text-base text-gray-500">71 200-15-15</p>
                    </div>
                    {/* <a href="#" className="flex mb-2.5">
                      <IoLocationSharp className="mr-2 text-base md:text-xl" />

                      <p className="text-base text-gray-500">
                        Ташкент, Улица Ахмеда Дониша{" "}
                        <br className="hidden md:block" />
                        Юнусабад 11
                      </p>
                    </a>
                   
                    <a href="#" className="flex mb-2.5">
                      <HiOutlineMail className="w-5 mr-4 text-xl ri-mail-line" />
                      <p className="text-base text-gray-500">kebzU@gmail.com</p>
                    </a>
                    <a href="#" className="flex mb-2.5">
                      <IoEarth className="w-5 mr-4 text-xl ri-mail-line" />
                      <p className="text-base text-gray-500">Leapmotors.com</p>
                    </a> */}
                  </div>
                </div>
                <div className="hidden col-span-2 md:block ">
                  
                </div>
                <div className="h-full col-span-1 ">
                  <div className="relative aspect-video">
                    <Image src={sectionC11ReevBg} fill />
                    
                  </div>
                  <div className="px-4 py-4 bg-white border border-gray-300 md:px-7 md:py-7">
                    <h3 className="mb-4 text-xl font-semibold uppercase text-slate-900">
                      kebzU
                    </h3>
                    <a href="#" className="flex items-center mb-4">
                      <p className="text-base text-gray-500">71 200-15-15</p>
                    </a>
                    <a href="#" className="flex mb-2.5">
                      <IoLocationSharp className="mr-2 text-base md:text-xl" />

                      <p className="text-base text-gray-500">
                        Ташкент, Улица Ахмеда Дониша
                        <br className="hidden md:block" />
                        Юнусабад 11
                      </p>
                    </a>
                   
                    <a href="#" className="flex mb-2.5">
                      <HiOutlineMail className="w-5 mr-4 text-xl ri-mail-line" />
                      <p className="text-base text-gray-500">kebzU@gmail.com</p>
                    </a>
                    <a href="#" className="flex mb-2.5">
                      <IoEarth className="w-5 mr-4 text-xl ri-mail-line" />
                      <p className="text-base text-gray-500">Leapmotors.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen col-span-3 md:h-full">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.3088621886147!2d69.27461296273704!3d41.363852815684176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cc7f765973b%3A0x8445ca73c1d7b35f!2sShifo%20Nur!5e0!3m2!1sru!2s!4v1665565756646!5m2!1sru!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationMaps;
