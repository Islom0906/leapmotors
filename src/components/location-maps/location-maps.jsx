
const LocationMaps = () => {
  return (
    <>
           <section className="py-[45px] md:py-[90px] contact-page">
        <div className="container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <div className="flex items-center py-6 text-white px-7 bg-slate-900">
              <i className="w-5 mr-4 ri-map-pin-2-line"></i>
              <h3 className="text-base section-title ">Локации</h3>
            </div>
            <div className="" >
              <div className="px-4 py-4 bg-white border border-gray-300 md:px-7 md:py-7">
                <h3 className="mb-4 text-xl font-semibold uppercase text-slate-900">kebzU</h3>
                <a href="#" className="flex mb-2.5">
                  <i className="mr-4 text-xl ri-map-pin-line text-slate-900"></i>
                  <p className="text-base text-gray-500">Ташкент, Улица Ахмеда Дониша <br className="hidden md:block"/>
                    Юнусабад 11</p>
                </a>
                <a href="#" className="flex items-center mb-4">
                  <i className="w-5 mr-4 text-xl ri-phone-line"></i>
                  <p className="text-base text-gray-500">71 200-15-15</p>
                </a>
                <a href="#" className="flex mb-2.5">
                  <i className="w-5 mr-4 text-xl ri-mail-line"></i>
                  <p className="text-base text-gray-500">kebzU@gmail.com</p>
                </a>
              </div>
              <div className="px-4 py-4 bg-white border border-gray-300 md:px-7 md:py-7">
                <h3 className="mb-4 text-xl font-semibold uppercase text-slate-900">kebzU</h3>
                <a href="#" className="flex mb-2.5">
                  <i className="w-5 mr-4 ri-map-pin-line text-slate-900"></i>
                  <p className="text-base text-gray-500">Ташкент, Улица Ахмеда Дониша <br className="hidden md:block"/>
                    Юнусабад 11</p>
                </a>
                <a href="#" className="flex items-center mb-4">
                  <i className="w-5 mr-4 ri-phone-line"></i>
                  <p className="text-base text-gray-500">71 200-15-15</p>
                </a>
                <a href="#" className="flex mb-2.5">
                  <i className="w-5 mr-4 ri-mail-line"></i>
                  <p className="text-base text-gray-500">kebzU@gmail.com</p>
                </a>
              </div>
              
            </div>
          </div>
          <div className="col-span-2 md:h-auto">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.3088621886147!2d69.27461296273704!3d41.363852815684176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cc7f765973b%3A0x8445ca73c1d7b35f!2sShifo%20Nur!5e0!3m2!1sru!2s!4v1665565756646!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         </div>
        </div>
      </section>

    </>
  )
}

export default LocationMaps
