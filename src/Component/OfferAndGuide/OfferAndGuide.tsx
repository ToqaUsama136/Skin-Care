  import {ArrowRightCircleIcon } from '@heroicons/react/24/outline'
  import face2 from '/assets/face2.png';
const OfferAndGuide = () => {

    return (
        <div className='spce-y-16'>
    <div className="relative flex items-center justify-center  md:py-[50px] px-4 sm:px-[20px]  ">
         <div className='relative w-full  max-w-[1280px]  bg-gradient-to-r from-[#7E1B5C] via-[#1310A6] to-[#D1068C]'>
         <div className="flex flex-col items-center justify-center text-center">
        <div className="Text mx-auto w-full max-w-[967px] max-h-[121px] m-[15px] text-[#FFFFFF] ">
            <p className=" text-balance font-DM font-bold  tracking-[-1%] text-[29px] md:text-[57px] py-[15px]">
              Don’t Miss Out: Limited-Time Offer!
            </p>
            <p className="text-balance text-[18px]   md:text-[38px] leading-[120%] md:leading-[120%] font-DM  ">Enjoy 20% off your first purchase <br className="block md:hidden" />  with code 
            <strong> GLOW20</strong></p>
        </div>
      

        <p className=" text-[30px] md:text-[87px] font-DM  leading-[120%] text-[#FFFFFF] pt-[100px]  md:font-normal">Hurry, offer ends in <br className="block md:hidden" />  12hrs <br className='hidden md:block'/> 30mins 56secons</p>
        <button className="flex justify-center gap-2  m-[15px] rounded-[71px] border border-[#CFCFCF] px-[25px] md:px-[30px] py-[5px]  md:py-[11px]  text-[#000000] bg-[#FFFFFF] font-light text-[20px] md:text-[32px]">Shop the Sale
        <ArrowRightCircleIcon className="w-[30px] h-[30px] md:w-[45.5px] md:h-[45.5px] md:pt-[7px]  rotate-[-0.04deg]   " strokeWidth={1}/></button>
    </div>  
    </div>
   

</div>
  
    <div className="relative flex items-center justify-center  pt-[50px] md:pb-[100px]  px-4">
         <div className='flex flex-col md:flex-row bg-[#F0F0F0] w-full  max-w-[1290px] md:h-[706px]  '>


         <div className='flex flex-col justify-between w-full md:w-1/2 px-4 md:px-10 py-8'>
            <h2 className=' h-[50px] font-DM text-[27px] md:text-[49px]  '>Your Guide to Radiant Skin</h2>
            <div className='md:max-w-[600px] max-w-full md:translate-y-[-90px] '>

            <h3 className='h-[32px] font-DM text-[15px] md:text-[27px] leading-[120%]  font-normal mb-4 mt-8 md:mt-0  '>5 Mistakes That Might Be Hurting Your Skin   </h3>
            <p className='font-DM text-[15px] md:text-[27px] leading-[150%] font-light mb-[60px] '>Your skincare routine plays a crucial role in maintaining healthy, radiant skin. However, some common habits might be doing more harm than good. Here are five mistakes to avoid:
            <br/>
              1. Overwashing Your Face
              <br/>
               Washing too often or using harsh cleansers can strip......
              
            <span className='font-normal underline underline-offset-4'>Continue Reading </span></p>
               <button className=' md:w-[371.66px]  md:h-[77px] px-[12px] md:px-[21.41px] py-[6px] md:py-[10.71px] 
                 bg-white text-[#121212]  font-light rounded-[40px] md:rounded-[71.38px] border-[0.71px] border-[#CFCFCF]
                  flex items-center justify-between gap-[7.14px] leading-[120%] text-[18px] md:text-[30px] tracking-[-1%]'>Read More Blog Post <ArrowRightCircleIcon className='w-[22px] md:w-[40.54px] h-[22px] md:h-[40.54px]  rotate-[-0.04deg] '  strokeWidth={1}/></button>
           
         </div>
         </div>

         <div className='flex w-full  md:w-1/2  justify-center  overflow-hidden mt-8 md:mt-0 px-2 md:px-0'>

         <img className=' object-cover  md:w-[1280px] md:h-[820px]  ' 
         style={{ transform: 'translateY(-10px)' }}
         src={face2} alt="face2" />
            </div>
         </div>

            

         </div> 
        
    
   

  

  </div>


    );
}
 
export default OfferAndGuide;