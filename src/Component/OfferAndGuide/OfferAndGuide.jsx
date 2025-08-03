  import {ArrowRightCircleIcon } from '@heroicons/react/24/outline'
  import face2 from '../../assets/face2.png';
const OfferAndGuide = () => {

    return (
        <div className='spce-y-16'>
    <div className="relative flex items-center justify-center  py-[50px] ">
         <div className='relative w-full  max-w-[1280px] h-[610px] bg-gradient-to-r from-[#7E1B5C] via-[#1310A6] to-[#D1068C]'>
         <div className="flex flex-col items-center justify-center text-center">
        <div className="Text max-w-[967px] max-h-[121px] m-[15px] text-[#FFFFFF] ">
            <p className="  font-DM font-bold  tracking-[-1%] sm:text-[29px] lg:text-[57px] py-[15px]">
              Don’t Miss Out: Limited-Time Offer!
            </p>
            <p className="sm:text-[18px]  lg:text-[38px] leading-[120%] font-DM  ">Enjoy 20% off your first purchase with code 
            <span className="font-bold"> GLOW20</span></p>
        </div>
      

        <p className="sm:text-[30px] lg:text-[87px] font-DM  leading-[120%] text-[#FFFFFF] pt-[110px]">Hurry, offer ends in 12hrs <br/> 30mins 56secons</p>
        <button className="flex justify-center gap-2  m-[15px] rounded-[71px] border border-[#CFCFCF] px-[21px] py-[11px] text-[#000000] bg-[#FFFFFF] font-light text-[32px]">Shop the Sale
        <ArrowRightCircleIcon className=" w-[45.5px] h-[45.5px] pt-[7px] rotate-[-0.04deg]   " strokeWidth={1}/></button>
    </div>  
    </div>
   

</div>
  
    <div className="relative flex items-center justify-center  pt-[50px] pb-[100px] ">
         <div className='flex bg-[#F0F0F0] w-[1290px] h-[706px]  '>


         <div className='flex flex-col justify-between w-1/2   px-10 py-8'>
            <h2 className='w-[579px] h-[50px] font-DM  text-[49px] '>Your Guide to Radiant Skin</h2>
            <div className='max-w-[600px] translate-y-[-90px] '>

            <h3 className='h-[32px] font-DM text-[27px] leading-[120%]  font-normal mb-4   '>5 Mistakes That Might Be Hurting Your Skin   </h3>
            <p className='font-DM text-[27px] leading-[150%] font-light mb-[60px] '>Your skincare routine plays a crucial role in maintaining healthy, radiant skin. However, some common habits might be doing more harm than good. Here are five mistakes to avoid:
            <br/>
              1. Overwashing Your Face
              <br/>
               Washing too often or using harsh cleansers can strip......
              
            <span className='font-normal underline underline-offset-4'>Continue Reading </span></p>
                        <button className='w-[371.66px] h-[77px]  px-[21.41px] py-[10.71px]  bg-white text-[#121212] text-base font-light rounded-[71.38px] border-[0.71px] border-[#CFCFCF] flex items-center justify-between gap-[7.14px] leading-[120%] text-[30px] tracking-[-1%]'>Read More Blog Post <ArrowRightCircleIcon className=' w-[40.54px] h-[40.54px]  rotate-[-0.04deg] '  strokeWidth={1}/></button>
           
         </div>
         </div>

         <div className='flex w-1/2 overflow-hidden'>

         <img className=' object-cover  w-[1280px] h-[820px]  ' 
         style={{ transform: 'translateY(-10px)' }}
         src={face2} alt="face2" />
            </div>
         </div>

            

         </div> 
        
    
   

  

  </div>


    );
}
 
export default OfferAndGuide;