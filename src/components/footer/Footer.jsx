import Link from 'next/link'
import {AiFillFacebook} from 'react-icons/ai'


const 
Footer = () => {
  return (
    <>
       <footer class="bg-white py-10">
      <div class="container">
        <ul class="flex flex-wrap gap-7 text-xl text-[#4d5d81] font-bold mb-10">
          <li><Link href="#">About Leapmotor</Link></li>
          <li><Link href="#">News Room</Link></li>
          <li><Link href="#">Privacy & Legal</Link></li>
          <li><Link href="#">Investor Relations</Link></li>
          <li><Link href="#">Cookie Setings</Link></li>
        </ul>
        <div>
          <a href="tel:+864000081234" class="text-[#707070] text-lg leading-[28px] underline underline-offset-8 mb-1">+86 400-008-1234</a>
          <div class="flex gap-8 pt-5">
            <Link href="#" class="">
              <AiFillFacebook className='text-3xl' src="./project/Images/Facebook.png" alt="Facebook" class="w-full h-full"/>
            </Link>
            <Link href="#" class="">
              <AiFillFacebook className='text-3xl' src="./project/Images/Twitter.png" alt="Facebook" class="w-full h-full"/>
            </Link>
            <Link href="#" class="">
              <AiFillFacebook className='text-3xl' src="./project/Images/Instagram.png" alt="Facebook" class="w-full h-full"/>
            </Link>
          </div>
        </div>
      </div>
    </footer> 
    </>
  )
}

export default Footer
