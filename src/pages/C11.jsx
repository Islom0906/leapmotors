import { CarCharacteristics , CarSwiper  , CarBanner , CarText} from "@/components"
import sectionC11  from '/public/section-3-logo.png'
import sectionC11bg  from '/public/section-bg-3.jpg'


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
    title: 'Digital Technology Integrated with Natural Affinity',
    subTitle: 'Through-Type Digital Crystal Headlights , Flush Door Handle* ,Wind resistance coefficient: 0.282cd',
    bg: sectionC11bg,
  },
  {
    title: 'Digital Technology Integrated with Natural Affinity',
    subTitle: 'Digital crystalline headlamp with smooth dynamic effect',
    bg: sectionC11bg,
  },
  {
    title: 'Digital Technology Integrated with Natural Affinity',
    subTitle: 'Frameless Door',
    bg: sectionC11bg,
  }
]
const carSwipper2 = [
  {
    title: 'Panoramic Sunroof, Panoramic View　',
    subTitle: ' 14,932 cm² Panoramic Starry Roof* , 8% improved field of view* and 99.5% UV isolation rate',
    bg: sectionC11bg,
  },
  {
    title: 'Panoramic Sunroof, Panoramic View',
    subTitle: '11,400 c㎡ Openable Panoramic Sunroof* Work on voice commands and automatically close on rainy days',
    bg: sectionC11bg,
  },

]
const carSwipper3 = [
  {
    title: 'Rear-row Integrated Multimedia Control Panel*',
    subTitle: ' Seat heating, volume, A/C, song switching, and other functions are also under one key control of the rear passengers',
    bg: sectionC11bg,
  },
  {
    title: 'Panoramic Sunroof, Panoramic View',
    subTitle: '11,400 c㎡ Openable Panoramic Sunroof* Work on voice commands and automatically close on rainy days',
    bg: sectionC11bg,
  },

]
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


const C11 = () => {
  return (
    <>
      <CarCharacteristics bg={sectionC11bg} logo={sectionC11} characteristics={characteristics} />
      <CarCharacteristics bg={sectionC11bg} logo={sectionC11} characteristics={characteristics} />
      <CarSwiper content={carSwipper1} />
      <CarSwiper content={carSwipper2} />
      <CarSwiper content={carSwipper3} />
    <CarBanner center={true} title={'Impeccable Experience'} subTitle={'Focusing on high-end quality，and satisfying various needs'} bg={sectionC11bg}/>
    <CarBanner  title={'Leapmotor OS 3.0 Smart Cockpit'}   bg={sectionC11bg}/>
    <CarBanner    bg={sectionC11bg}/>
    <CarBanner  title={'Leapmotor Pilot Intelligent Driving Assist Solution*'} subTitle={'28 pieces of intelligent perception hardware support L3-level assisted driving 12 ultrasonic radars｜5 millimeter-wave radars 4 blind spot cameras｜1 face recognition camera｜4 surround view cameras 1 binocular camera (2 integrated cameras)'} bg={sectionC11bg}/>
    <CarSwiper content={carSwipper3} />
    <CarSwiper content={carSwipper3} />
    <CarBanner  title={'Perfectly Balanced Steadiness and Speed.Luxury Independent Suspension'} subTitle={'Standard Front Double Wishbone / Rear Five Link Suspension Million-dollar luxury car driving experience, taking into account both comfort and controllability'} bg={sectionC11bg}/>
    <CarBanner  title={'Self-researched Through-Type Large Module Battery Pack'} subTitle={'Battery Capacity: 69.2-89.97kWh* Average CLTC Range: 502–650 km'} bg={sectionC11bg}/>
    <CarBanner  title={'Self-researched AI Intelligent Battery Management System'} subTitle={'Real-time Battery Monitoring and Pre-warning Thermal runaway BMS vehicle wake-up Full-time active protection via the vehicle and cloud'} bg={sectionC11bg}/>
    <CarBanner  title={'Superior Materials with Proven Dependability High-Strength Armor Body'} subTitle={'High-strength steel utilization rate of 76.2% <br> Hot-formed steel utilization rate of 17.4%'} bg={sectionC11bg}/>
    <CarText content={disclaimers} />
      
    </>
  )
}

export default C11
