import Image from 'next/image'


const CarContentFooter = ({title ,  subTitle , bg}) => {
  return (
    <>
        <section className="h-screen">
      <div className="relative w-full h-full">
        <Image src={bg} alt="car" className="object-cover w-full h-full"/>
        <div className="absolute top-[60px] w-full text-center">
          <div className="mb-5 text-center">
            <h2 className="text-[36px] md:text-[63px] text-[#333] font-bold leading-[93px] mb-5">{title}</h2>
            <p className="text-[#28313d] text-2xl md:text-[30px]"> {subTitle} </p>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default CarContentFooter
