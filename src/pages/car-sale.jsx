import {
  SaleList,
  ColorCard,
  VersionCard,
  SaleCardTitle,
  ComplectCar,
} from "@/components";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";
import { PiCheckBold } from "react-icons/pi";
import { setStepCar } from "@/slice/sale";
import { useDispatch, useSelector } from "react-redux";

const CarSale = () => {
  const versionData = {
    title: "C11 Extended Range 180 Comfort Edition",
    price: "$2000",
    content: [
      {
        id: 1,
        content:
          " CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 2,
        content:
          " Адаптивный круиз на полной скорости ACC, автоматическое экстренное торможение AEB",
      },
      {
        id: 3,
        content:
          " CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 4,
        content:
          " CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
    ],
  };
  const versionData1 = {
    title: "C11 Extended Range 200 Comfort Edition",
    price: "$149000",
    content: [
      {
        id: 1,
        content:
          "2 CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 2,
        content:
          "2 Адаптивный круиз на полной скорости ACC, автоматическое экстренное торможение AEB",
      },
      {
        id: 3,
        content:
          "2 CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 4,
        content:
          "2 CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 4,
        content:
          "2 CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 4,
        content:
          "2 CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
    ],
  };

  const optional = {
    id:'5',
    headerImage: '/banner-complect.png',
    title: 'выбрать цвет',
    price: '¥15,000',
    disk: {
      img: '/wheel.png',
      title: '20-дюймовые диски цвета метеорита серого цвета',
      subTitle: 'Цена включена'
    },
    version: [
      {
        id: 1,
        content:
          " CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 2,
        content:
          " Адаптивный круиз на полной скорости ACC, автоматическое экстренное торможение AEB",
      },
      {
        id: 3,
        content:
          " CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
      {
        id: 4,
        content:
          " CLTC имеет срок службы батареи 180 км и общую мощность электропривода 200 кВт.",
      },
    ]
  }
  const optional2 = {
    id:'6',
    headerImage: '/banner-complect.png',
    title: 'выбрать цвет',
    price: '¥15,000',
    
    
  }
  const { priceModel,colorInterior,stepCar,colorExterior } = useSelector((state) => state.sale);

  const dispatch = useDispatch();

  const changeStepList = () => {  
    if (priceModel && stepCar === "Версия") {
      dispatch(setStepCar("Экстерьер"));
    } else if (colorExterior && stepCar === "Экстерьер") {
      dispatch(setStepCar("интерьер"));
    } else if (colorInterior && stepCar === "интерьер") {
      dispatch(setStepCar("Необязательный"));
    } else if (colorInterior && stepCar === "Необязательный") {
      dispatch(setStepCar("Необязательный"));
    }

    console.log(1);
  };

  return (
    <div>
      <div className="px-2 md:px-5 py-20 bg-[#eeeff4] relative">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-6">
          <div className="relative md:col-span-4 aspect-square md:aspect-video">
            <Image src={"/banner-sale.png"} objectFit="contain" fill />
          </div>
          <div className="w-full col-span-2 p-1 bg-white rounded-lg md:p-3 ">
            <div className="lg:h-[10vh] fixed lg:static left-0 z-20 flex justify-center w-full top-16 lg:block">
              <ul class={` text-sm sm:text-xs  xl:text-sm font-medium text-center text-[#333] divide-x divide-gray-200 rounded-lg shadow flex `}>
                <li class="w-full">
                  <button
                    
                    class={` ${stepCar === 'Версия'? 'bg-gray-200 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} inline-block w-full p-2 text-gray-900  rounded-l-lg  active focus:outline-none `}
                  >
                    Версия
                  </button>
                </li>
                <li class="w-full">
                  <button
                    
                    class={`${stepCar === 'Экстерьер' ? 'bg-gray-200 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} inline-block w-full p-2 bg-white  hover:bg-gray-50  focus:outline-none `}
                  >
                    Экстерьер
                  </button>
                </li>
                <li class="w-full">
                  <button
                    
                    class={`${stepCar === 'интерьер'? 'bg-gray-200 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} inline-block w-full p-2 bg-white  hover:bg-gray-50  focus:outline-none `}
                  >
                    интерьер
                  </button>
                </li>
                <li class="w-full">
                  <button
                    
                    class={`${stepCar === 'Необязательный' ? 'bg-gray-200 hover:bg-gray-200' : 'bg-white hover:bg-gray-50'} inline-block w-full p-2 bg-white rounded-r-lg   focus:outline-none  `}
                  >
                    Необязательный
                  </button>
                </li>
              </ul>
            </div>

            <div className="py-3 md:py-5 space-y-4 h-auto md:h-[75vh] md:overflow-y-scroll">
              {/* <VersionCard />
              <VersionCard /> */}
              {/* <ColorCard /> */}
              {stepCar === "Версия" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать цвет"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      <div className="col-span-4 ">
                        <VersionCard
                          title={versionData.title}
                          price={versionData.price}
                          content={versionData.content}
                        />
                      </div>
                      <div className="col-span-4">
                        <VersionCard
                          title={versionData1.title}
                          price={versionData1.price}
                          content={versionData1.content}
                        />
                      </div>
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
                    <SaleCardTitle title={"выбрать цвет"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      <ColorCard
                        catalogType={stepCar}
                        colorImg={"/color-car.png"}
                        colorName={"небесно-серый"}
                      />
                      <ColorCard
                        colorImg={"/color-car.png"}
                        colorName={"небесно-серый-2"}
                      />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {stepCar === "интерьер" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать цвет"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      <ColorCard
                        catalogType={stepCar}
                        colorImg={"/color-car.png"}
                        colorName={"небесно-серый-5"}
                      />
                      <ColorCard
                        catalogType={stepCar}
                        colorImg={"/color-car.png"}
                        colorName={"небесно-серый-4"}
                      />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
               {stepCar === "Необязательный" ? (
                <>
                  <div className="text-[#333]">
                    <SaleCardTitle title={"выбрать цвет"} />
                    <div className="grid items-center content-center justify-center grid-cols-4 gap-5 p-2 md:p-5 ">
                      <ComplectCar headerImage={optional.headerImage} title={optional.title} price={optional.price} saleList={optional.disk} version={optional.version}  />
                      <ComplectCar headerImage={optional2.headerImage} title={optional2.title} price={optional2.price} />
                    </div>
                  </div>
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
                <MdDoubleArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSale;
