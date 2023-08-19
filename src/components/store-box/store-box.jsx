import Image from "next/image";

const StoreBox = ({text, bg}) => {
  return (
    <div>
      {text ? (
        <div className="h-[50vh] lg:h-[100vh] relative   overflow-hidden group">
          <div className="w-full h-full transition duration-1000 hover:scale-105 relative">
            <span className="absolute bottom-16 left-16 lg:bottom-44 lg:left-28 text-white font-bold text-[24px] z-20">
            {text}
            </span>

            <Image src={bg} fill className="object-cover w-full h-full" />
          </div>
        </div>
      ) : (
        <div className="  h-[242px] lg:h-[485px] relative">
          <Image src={bg} fill className="object-cover w-full h-full" />
        </div>
      )}
    </div>
  );
};

export default StoreBox;
