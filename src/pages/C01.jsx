
import { CarBanner, CarCharacteristics, CarDetailBanner, CarSwiper } from '@/components'
import sectionC01  from '/public/section-2-logo.png'
import sectionC01bg  from '/public/section-bg-2.png'



const C01 = () => {

  const characteristics = {
    title : 'Technology and Natural Aesthetics',
    subTitle : ' Innovative technology integrated for the gentle,elegant appearance Creating a rich "vehicle style"',
    about: {
      lenght: '5050',
      width: '1902',
      height: '1509',
      wheelbase: '2930'
    }
  }

  const carSwipper1 = [
    {
      title: 'Energetic Curved Body',
      subTitle: 'Reduces wind resistance coefficient，showing a strong sense of science and technology',
      bg: sectionC01bg,
    },
    {
      title: 'Through Headlamp',
      subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
      bg: sectionC01bg,
    },
    {
      title: 'Frameless Door',
      subTitle: 'Front laminated silent glass rear privacy glass',
      bg: sectionC01bg,
    }
  ]

  return (
    <>
      <CarDetailBanner img={sectionC01} bg={sectionC01bg} text={'Leapmotor C01 Advance your life– Deluxe Technology Electric Vehicle'}/>
      
    <CarCharacteristics bg={sectionC01bg} characteristics={characteristics} />
    

    <CarBanner title={'Simplicity'} subTitle={'Simple, elegant styling'} bg={sectionC01bg}/>
    <CarBanner title={'Simplicity'} subTitle={'Simple, elegant styling'} bg={sectionC01bg}/>
    <CarBanner title={'Impeccable Experience'} subTitle={'Focusing on high-end quality，and satisfying various needs'} bg={sectionC01bg}/>
    <CarSwiper content={carSwipper1} />
    </>
  )
}

export default C01
