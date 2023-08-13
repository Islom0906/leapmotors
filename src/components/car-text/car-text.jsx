
const CarText = ({content}) => {
  return (
    <>
         <section class="p-5 bg-black md:bg-white">
      <div class="container py-5 bg-[#ffffffcc] rounded-md md:bg-transparent md:rounded-0">
        <div class="w-fit mx-auto text-left text-[#373737] font-arial-normal">
          <h3 class="text-lg leading-[18px] mb-5">disclaimers</h3>
          <div class="text-sm leading-[24px]">
          {
            content?.map((item , ind) => (
              <p key={ind}> {item}</p>
            ))
          }
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default CarText
