import Image from "next/image";
import { StoreBox } from "@/components";
import stor1 from "/public/Store/store2-1.jpg";
import stor2 from "/public/Store/store2-2.jpg";
import stor3 from "/public/Store/store2-3.jpg";
import stor4 from "/public/Store/store2-4.jpg";

const Store = () => {
  return (
    <div>
      <header class="bg-black lg:pt-[60px] h-[100vh] ">
        <div class="grid w-full h-full gap-4 overflow-x-hidden overflow-y-hidden lg:grid-cols-2">
          <StoreBox text={'Experience & Sales Center'} bg={stor1} />
          <StoreBox text={'Delivery & Service Center'} bg={stor1} />
        
        </div>
      </header>

      <div class="grid grid-cols-2 lg:grid-cols-4">
        <StoreBox bg={stor3}/>
        <StoreBox bg={stor4}/>
        <StoreBox bg={stor2}/>
         <StoreBox bg={stor2}/>
      </div>
      
    </div>
  );
};

export default Store;
