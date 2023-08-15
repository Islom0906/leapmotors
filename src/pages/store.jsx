import {GoogleMap, StoreBox} from "@/components";
import stor1 from "/public/Store/store2-1.jpg";
import stor2 from "/public/Store/store2-2.jpg";
import stor3 from "/public/Store/store2-3.jpg";
import stor4 from "/public/Store/store2-4.jpg";

const Store = () => {
  return (
    <div className={'bg-black store'}>
      <header className="bg-black lg:pt-[60px] h-[100vh] ">
        <div className="grid w-full h-full gap-4 overflow-x-hidden overflow-y-hidden lg:grid-cols-2">
          <StoreBox text={'Experience & Sales Center'} bg={stor1} />
          <StoreBox text={'Delivery & Service Center'} bg={stor1} />
        
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        <StoreBox bg={stor3}/>
        <StoreBox bg={stor4}/>
        <StoreBox bg={stor2}/><StoreBox bg={stor2}/>
      </div>
        <div className={'h-auto md:min-h-screen w-full relative bg-[#f5f5f5] '}>
          <GoogleMap/>
        </div>
    </div>
  );
};

export default Store;
