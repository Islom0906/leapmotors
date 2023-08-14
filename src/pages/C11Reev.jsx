import {  CarDetailBanner } from '@/components'


import sectionC11Reev  from '/public/section-1-logo.png'
import sectionC11ReevBg  from '/public/section-bg-1.jpg'

const C11Reev = () => {
  return (
    <main className={'bg-black'}>
      <CarDetailBanner imgLong={true} img={sectionC11Reev} bg={sectionC11ReevBg} text={'Intelligent Long Range Five-Seat SUV'}/>
      
    </main>
  )
}

export default C11Reev
