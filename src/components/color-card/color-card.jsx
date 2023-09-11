import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {setColorInterior ,setColorExterior   } from "@/slice/sale";

const ColorCard = ({colorImg , colorName ,  catalogType}) => {
  const dispatch = useDispatch()
const {colorInterior} = useSelector(state => state.sale)
const {colorExterior} = useSelector(state => state.sale)
 
  const  selectColor = () => {
    
    if(catalogType == 'Экстерьер') {
      dispatch(setColorExterior({colorImg :colorImg , colorName: colorName} ))
    }else {
      dispatch(setColorInterior({colorImg :colorImg , colorName: colorName} ))

    }
  }


  return (
    <>

      <div onClick={selectColor}  className={` ${colorName === colorExterior.colorName  ? 'ring-4 ring-slate-300' : " " } ${colorName === colorInterior.colorName  ? 'ring-4' : " " }  flex  font-medium flex-col  items-center justify-center text-xs hover:text-[#333] group gap-y-3`} >
        <div className="w-[50px] relative h-[50px] rounded-full group-hover:ring-4   bg-slate-500 aspect-square">
          <Image fill  src={colorImg}  />
        </div>
        <p>{colorName}</p>
      </div>
    </>
  );
};

export default ColorCard;
