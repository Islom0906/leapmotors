import Image from 'next/image'
import Link from 'next/link'



const NewsCard = ({url , text , img , data} ) => {
  return (
    <>
      <Link  className="w-full lg:w-auto block " href={url}>
          <div className='relative aspect-video'>
            <Image
              fill
              className="object-cover w-full "
              src={img}
              alt="car name"
            />

          </div>
            <div className="overflow-x-hidden">
              <p
                className="text-[15px] md:text-xl text-[#4d5d81] font-semibold leading-[26px]"
              >
                {text}
              </p>
            </div>
            <p className="leading-[22px] text-sm text-[#666]"> {data} </p>
          </Link>
    </>
  )
}

export default NewsCard
