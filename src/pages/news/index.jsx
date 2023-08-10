import Link from 'next/link'
import news1 from '/public/section-bg-1.jpg'
import { NewsCard } from '@/components'



const news = () => {
  return (
    <header class="mt-4">
    <div class="container">
      <div class="py-[60px] pb-6">
        <a href="#" class="text-[#4d5d81] text-[20px] font-semibold"
          >News Room
          </a>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <NewsCard url={"#"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'} data={'February 25, 2022'}/>
        <NewsCard url={"#"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'} data={'February 25, 2022'}/>
        <NewsCard url={"#"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'} data={'February 25, 2022'}/>
        <NewsCard url={"#"} img={news1} text={'Leapmotor’s First Mass Production Model with CTC...'} data={'February 25, 2022'}/>
      
        
      </div>
    </div>
  </header>
  )
}

export default news
