import {
  SaleList,
  ColorCard,
  VersionCard,
  SaleCardTitle,
  ComplectCar,
} from "@/components";
import Image from "next/image";
import {
  setColorExterior,
  setColorInterior,
  setOptionCar,
  setPriceModel,
  setStepCar,
} from "@/slice/sale";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import apiService from "@/service/api";
import { useState } from "react";
import SEO from 'src/layout/seo/seo';


const CarSale = () => {
  const { versionModel } = useSelector((state) => state.sale);
  const [loading, setLoading] = useState(true);

  const { data: position } = useQuery("position", () =>
    apiService.getData("/position?model=T03")
  );

  const { data: exterior, refetch: refetchExterior } = useQuery(
    "exterior",
    () =>
      apiService.getData(`/exterior?model=T03&position=${versionModel.title}`),
    {
      enabled: false,
    }
  );

  const { data: interior, refetch: refetchInterior } = useQuery(
    "interior",
    () =>
      apiService.getData(
        `/interior?model=T03&position=${versionModel.title}&exterior=${colorExterior.colorName}`
      ),
    {
      enabled: false,
    }
  );
  const { data: option, refetch: refetchOption } = useQuery(
    "option",
    () =>
      apiService.getData(
        `/option?model=T03&position=${versionModel.title}&exterior=${colorExterior.colorName}&interior=${colorInterior.colorName}`
      ),
    {
      enabled: false,
    }
  );

  const {
    priceModel,
    colorInterior,
    stepCar,
    colorExterior,
    headerImage,
    optionCar,
  } = useSelector((state) => state.sale);
  const dispatch = useDispatch();

  console.log(option?.data);

  // const {
  //   mutate: userPost,
  //   data: userPostData,
  //   isLoading: userPostLoading,
  //   isSuccess: userPostSuccess
  // } = useMutation(({url, data}) => apiService.postData(url, data))

  const returnStep = (e) => {
    const target = e.target;
    let colorNull = {
      image: "",
      colorImg: "",
      colorName: "",
      price: 0,
    };

    let optionNull = [];

    if (target.innerText == "Версия" && priceModel != 0) {
      dispatch(setStepCar("Версия"));
      dispatch(setColorExterior(colorNull));
      dispatch(setColorInterior(colorNull));
      dispatch(setOptionCar(optionNull));
    } else if (target.innerText == "Экстерьер" && colorExterior.colorName) {
      dispatch(setStepCar("Экстерьер"));
      dispatch(setColorInterior(colorNull));
      dispatch(setOptionCar(optionNull));
      dispatch(setPriceModel(versionModel.price));
    } else if (
      target.innerText == "интерьер" &&
      colorInterior.colorName &&
      colorExterior.colorName
    ) {
      dispatch(setStepCar("интерьер"));
      dispatch(setColorInterior(colorNull));
      dispatch(setOptionCar(optionNull));
      dispatch(setPriceModel(versionModel.price + colorExterior.price));
    } else {
    }
  };

  const changeStepList = () => {
    if (priceModel && stepCar === "Версия") {
      dispatch(setStepCar("Экстерьер"));
      refetchExterior();
    } else if (colorExterior.colorName && stepCar === "Экстерьер") {
      refetchInterior();
      dispatch(setStepCar("интерьер"));
    } else if (colorInterior.colorName && stepCar === "интерьер") {
      dispatch(setStepCar("Необязательный"));
      refetchOption();
    } else if (stepCar === "Необязательный") {
      dispatch(setStepCar("allProduct"));
    }
  };

  return (
    <SEO title={'Leapmotorca car sale'}  og_title={'Leapmotorca , Leapmotorca car-sale, leapmotorca car-sale'}  keywords={'Leapmotorca , Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz'}  description={'Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности'}>
      
    <div>
      <div className="px-2 md:px-5 pt-[60px] py-[60px] bg-[#eeeff4] relative">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-6">
          <div className="relative md:col-span-4 aspect-square md:aspect-video">
            <div className="relative w-full h-full">
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_API_URL}/${headerImage}`}
                alt={"car"}
                className={` w-full h-full  duration-200 ease-in-out  ${
                  loading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100  blur-0 grayscale-0"
                } `}
                priority={true}
                onLoadingComplete={() => setLoading(false)}
              />
              
            </div>
          </div>
          <div className="w-full col-span-2 p-1 bg-white rounded-b-lg md:p-3 ">
            <div className={` ${stepCar ? 'hidden' : "flex lg:block"} lg:h-[10vh] fixed  left-0 z-20  justify-center w-full top-16 `}>
              <ul
                onClick={(e) => returnStep(e)}
                className={` text-sm sm:text-xs  xl:text-sm font-medium text-center text-[#333] divide-x divide-gray-200 rounded-lg shadow  `}
              >
                <li className="w-full">
                  <button
                    className={` ${
                      stepCar == "Версия"
                        ? "bg-gray-200 hover:bg-gray-200"
                        : "bg-white hover:bg-gray-50 "
                    } inline-block w-full p-2  text-gray-900 rounded-l-lg   focus:outline-none `}
                  >
                    Версия
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className={`${
                      stepCar == "Экстерьер"
                        ? "bg-gray-200 hover:bg-gray-200"
                        : "bg-white hover:bg-gray-50"
                    } inline-block w-full p-2   focus:outline-none `}
                  >
                    Экстерьер
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className={`${
                      stepCar == "интерьер"
                        ? "bg-gray-200 hover:bg-gray-200"
                        : "bg-white hover:bg-gray-50"
                    } inline-block w-full p-2   focus:outline-none `}
                  >
                    интерьер
                  </button>
                </li>
                <li className="w-full">
                  <button
                    className={`${
                      stepCar == "Необязательный"
                        ? "bg-gray-200 hover:bg-gray-200"
                        : "bg-white hover:bg-gray-50"
                    } inline-block w-full p-2  rounded-r-lg   focus:outline-none  `}
                  >
                    Необязательный
                  </button>
                </li>
              </ul>
            </div>

            <div className="py-3 md:py-5 space-y-4 h-auto md:h-[55vh] lg:h-[65vh] xl:h-[75vh] md:overflow-y-scroll">
              {stepCar === "Версия" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать Версия"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      {position?.data?.map((version) => (
                        <div key={version._id} className="col-span-4 ">
                          <VersionCard
                            headerImage={version?.image.path}
                            title={version?.name}
                            price={version?.price}
                            content={version?.includedList}
                            firstActive={position?.data[0]}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              <></>
              {stepCar === "Экстерьер" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать Экстерьер"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      {exterior?.data.map((ext) => (
                        <ColorCard
                          key={ext._id}
                          catalogType={stepCar}
                          colorImg={ext.colorImage.path}
                          img={ext.image.path}
                          colorName={ext.name}
                          firstActive={exterior.data[0]}
                          price={ext.price}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {stepCar === "интерьер" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать интерьер"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      {interior?.data.map((int) => (
                        <ColorCard
                          key={int._id}
                          catalogType={stepCar}
                          colorImg={int.colorImage.path}
                          img={int.image.path}
                          colorName={int.name}
                          firstActive={interior.data[0]}
                          price={int.price}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {stepCar === "Необязательный" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать Необязательный"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      {option?.data?.map((opt) => (
                        <ComplectCar
                          key={opt._id}
                          bannerImage={opt.bannerImage.path}
                          headerImage={opt.mainImage.path}
                          includes={opt.includes}
                          title={opt.name}
                          price={opt.price}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              <></>
              {stepCar == "allProduct" ? (
                <>
                  <SaleCardTitle
                    title={versionModel?.title}
                    btnText={"refresh"}
                  />
                  <div className="border-b border-b-[#eee] py-4 space-y-2">
                    <SaleList
                      src={colorExterior?.colorImg}
                      title={colorExterior?.colorName}
                      subtitle={colorExterior?.price}
                    />
                    <SaleList
                      src={colorInterior?.colorImg}
                      title={colorInterior?.colorName}
                      subtitle={colorInterior?.price}
                    />
                    {optionCar?.map((item) => (
                      <SaleList
                        src={item.headerImage}
                        title={item.optName}
                        subtitle={item.price}
                      />
                    ))}
                  </div>
                  <div className="mb-3">
                    <SaleCardTitle title={"Сводка конфигурации"} />
                  </div>
                  {<VersionCard content={versionModel.content} />}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center w-full h-auto py-5 lg:py-0 lg:h-[10vh] justify-between border-[#ddd] border-t fixed bottom-0 left-0 lg:static bg-white px-5 lg:px-0">
              <span className="flex flex-col text-[#333] space-y-1">
                <h5 className="text-xl font-bold">{priceModel}</h5>
                <p className="text-xs">Депозит $5000</p>
              </span>
              <button
                onClick={changeStepList}
                className="text-[#333] text-lg bg-transparent border border-[#333] p-4 flex  justify-center py-2 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500"
              >
                {/* <MdDoubleArrow /> */}
                Далее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SEO>
  );
};

export default CarSale;
