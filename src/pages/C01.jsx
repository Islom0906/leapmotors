
import { CarBanner, CarBannerContentBottom, CarCharacteristics, CarContentFooter, CarDetailBanner, CarSwiper, CarText } from '@/components'
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

  
const disclaimers= [
  '*1 The data are for reference only as there may be errors due to manual measurement.',
  
  "*2*3 *4*10*11Some configurations are optional for users and not standard when the vehicle is off the assembly line."
  ,
  '*6 The wind resistance coefficient shown in the advertisement/page is from the test result of CATARC (Tianjin) Automotive Engineering Research Institute Co., Ltd. *7*8*9'
  ,
  'Some features may not be available immediately upon vehicle delivery. They will be gradually enabled by remote OTA update in the future.',
  '*5 The time required from 0 to 100 km/h shown on the page is from the test result of CATARC Automotive Test Center (Ningbo) Co., Ltd. for the 4WD dual-motor high-performance model.'
  ,
  
  "*7 The Leapmotor Pilot intelligent driving assistance system cannot completely replace the driver's control, nor fully cope with all possible situations that may arise from traffic, weather and road conditions. The driver is required to maintain the necessary duty of care at all times and to intervene or take over in a timely manner according to the surrounding environment. In the case of complex traffic conditions, bad weather, special road conditions and etc., it is necessary to choose and use it carefully.",
  
  "*11The range shown on the page is from the test result of the National Passenger Car Quality Supervision and Test Center for the RWD ultra-long-range model."
  ,
  "*12 Meditation mode and Camping mode will be released through OTA by Q2 2023"
  ,
  "*13 The contents shown on the page are prepared based on the vehicle configuration status information at the time of preparation. The actual vehicle may differ from the introductory information to some extent due to some objective reasons, such as the continuous changes in laws and regulations, different understanding of relevant information by individuals, and possible late update of introductory information. Please refer to actual vehicles on sale."
  ,
  '*14 Leapmotor reserves the right to interpret and change product information such as technical parameters and configuration within the law.'
]

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

  const carBottomContent = [
    {
      title: 'Guardian/Nap/ECO/Meditation/Camping*',
      subTitle: 'the five scenario modes give you intimate care'
    },
    {
      title : 'New 3D "Xiaoling" Virtual Image',
      subTitle: 'User-friendly, smart voice assistant'
    }
  ]

  return (
    <>
      <CarDetailBanner img={sectionC01} bg={sectionC01bg} text={'Leapmotor C01 Advance your life– Deluxe Technology Electric Vehicle'}/>
      
      <CarCharacteristics bg={sectionC01bg} characteristics={characteristics} />
    

    <CarBanner title={'Simplicity'} subTitle={'Simple, elegant styling'} bg={sectionC01bg}/>
    <CarSwiper content={carSwipper1} />
    <CarBanner title={'Impeccable Experience'} subTitle={'Focusing on high-end quality，and satisfying various needs'} bg={sectionC01bg}/>
    <CarSwiper content={carSwipper1} />
    <CarSwiper content={carSwipper1} />
    <CarBanner title={'AI Face Recognition Adaptive System'} subTitle={'Up to 8 face IDs can be set to give your family an exclusive sense of security'} bg={sectionC01bg}/>
    <CarSwiper content={carSwipper1} />
    <CarBanner title={'Leisure Scenario'} subTitle={'Poised to Drive with Confidence'} bg={sectionC01bg}/>
    <CarBanner title={'CTC Technology'} subTitle={'High integration of battery and chassis Advanced technical solution that improves the EV range, performance and safety'} bg={sectionC01bg}/>
    <CarBanner title={'100% Independently Developed Variable-structured Oil-cooled Electric Drive Assembly'} subTitle={'Max. power: 200 kW，Design compatible torque: 300 N·m - 500 N·m Max. speed: 16,000 rpm，Design life: 1,000,000 km'} bg={sectionC01bg}/>
    <CarSwiper content={carSwipper1} />
    <CarBanner title={'Leapmotor Pilot Intelligent Driving Assistance System*'} subTitle={'Comprehensively use the intelligent driving assistance system at chip level and use a complete set of intelligent driving assistance solutions with completely independent intellectual property rights　'} bg={sectionC01bg}/>
    <CarSwiper content={carSwipper1} />
    <CarBanner title={'Immersive Music Cabin*'} subTitle={'ARKAMYS 3D Sound 6 sound modes providing a more immersive experience'} bg={sectionC01bg}/>
    <CarBanner title={'CLTC Range: 717 km*'} subTitle={'Ultra-large-capacity power battery, meeting the needs of multiple scenarios and long-distance travel'} bg={sectionC01bg}/>
    <CarBanner title={'AI Super Smart Cockpit'} subTitle={'Third-generation Qualcomm Snapdragon 8155P chip, realizing three-screen interaction'} bg={sectionC01bg}/>
    <CarBannerContentBottom content={carBottomContent} bg={sectionC01bg} />
    <CarSwiper content={carSwipper1}  />
    <CarContentFooter title={'Leapmotor C01'} subTitle={'Advance Your Life'} bg={sectionC01bg} />
    <CarText content={disclaimers} />
    </>
  )
}

export default C01
