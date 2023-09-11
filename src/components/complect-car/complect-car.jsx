import { SaleList , VersionCard  } from "@/components"
import Image from 'next/image'
import {PiCheckBold} from 'react-icons/pi'
import { useDispatch } from "react-redux";
import { setStepCar } from "@/slice/sale";

const ComplectCar = ( {headerImage ,  title , price , saleList , version  } ) => {
  
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="col-span-4 ">
        <div className="relative bg-black aspect-video">
          <Image
            src={headerImage}
            fill
            className="w-full h-full"
            alt={title}
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-b border-b-[#ddd]">
          <div>
            <h5 className="text-sm font-semibold">{title}</h5>
            <p className="text-xs">{price}</p>
          </div>
          <button className="text-[#333] text-sm bg-transparent  flex  justify-center py-2 px-3 hover:text-white hover:bg-[#333] rounded-md transition-all ease duration-500">
            <PiCheckBold />
          </button>
        </div>
        <div className="px-2 py-5 space-y-4">
        {
          saleList &&
          <SaleList
            src={saleList.img}
            title={saleList.title}
            subtitle={saleList.subTitle}
          />
        }
        {
          version &&
          <VersionCard title={''} price={''} content={version} />
        }
        </div>
      </div>
    </>
  );
};

export default ComplectCar;
