
import SkinCare from "/assets/SkinCare.png";
import face from "/assets/face.png";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import { ArrowUpRightIcon}   from "@heroicons/react/24/outline";
import logo from "/assets/logo.png"


const Landing = () => {
  return (
    <div>
       <div className="section1">
        <div className=" relative flex items-center justify-center  pb-[50px] ">
          <div className="relative w-[1280px] h-[523px] rounded-[20px] bg-[#FFF6FD]  overflow-hidden ">
          <div className="flex items-center absolute text-[260px] font-semibold    opacity-20 select-none pt-[220px] pl-[100px] w-[1500px] ">
           <img src={logo} alt="" className="mt-7 w-[400px] h-[320px] pt-[5px]"/>
          <h1 className="ml-[-28px]">
          tragleam
           </h1>
           </div>
            <div className="flex flex-col w-1/2 h-[128.5px] pt-[106px] pl-[60px]">
              <div className="text-[60px] font-poppins ">
                <p>Glow Beyond
                 <span className="relative w-[45px] h-[45px] inline-block ml-5">
                  < ArrowUpRightIcon  strokeWidth={2}/>
                  <span className="absolute left-0 right-0 -bottom-1 h-[1px] border  bg-black"></span>
                </span> </p>
               <p className="pl-[240px] mt-[-30px]"> Expectations</p>
              </div>
              <p className="font-poppins text-[30px] font-light ">
              Clean, effective, and cruelty-free skincare made to deliver visible results.
              </p>
              <button className='w-fit mt-[40px] h-[57px]  px-[21.41px] py-[10.71px] bg-[#121212] text-[#ffffff] 
               font-light rounded-[71.38px] border-[0.71px] border-[#CFCFCF] flex  items-center  gap-2 
               leading-[120%] text-[30px] tracking-[-1%]'>Show Now
                <ArrowRightCircleIcon className=' w-[42.54px] h-[42.54px]  rotate-[-0.04deg] pt-1 pl-1' 
                 strokeWidth={1}/></button>
            
            </div>
            <div className="relative w-1/2  ">

            <img src={SkinCare} alt="Skin Care"  className=" absolute w-[500px] h-[450px]
             top-[-43px] left-[793px]  "/>
            
            </div>
          </div>
        </div>
      </div> 

      <div className="section2 py-[50px]">
        <div className="relative flex items-center justify-center ">
          <div className="relative bg-[#F0F0F0] w-[1280px] h-[628px]">
            <div className="absolute  w-[1200px] h-[527] top-[50.5px] left-[40px] ">
              <h2 className=" w-[540px] h-[50px] font-poppins text-[50px] font-normal tracking-[-1%] pb-[100px]">
                Why Choose Xtragleam?
              </h2>
              <div className="flex gap-[30px]  py-[24px] ">
                <div className=" overflow-hidden h-[420px] w-[550px]  ">
                  <img
                  
                     className="w-[1280px] h-[820px]   object-cover   "
                     style={{ transform: "translateY(-320px) ",  objectPosition: "70% 100%" }}
                    src={face}
                    alt="face"
                  />
                </div>

                <div className=" flex flex-col  w-[617px] h-[395px]">
                  <h2 className="w-[617px] h-[32px] font-poppins text-[27px] font-normal tracking-[-1%] leading-[120%]">
                    Struggling with acne issues?
                  </h2>

                  <p className="h-[246px]  font-poppins text-[27px] font-light tracking-[-1%] leading-[150%] ">
                    At Xtragleam Skincare, we understand how frustrating acne
                    can be, and we’re here to help you regain confidence in your
                    skin. Our carefully designed recovery process targets acne
                    at its root while soothing and nourishing your skin for
                    long-term health.
                  </p>
                  <button className="w-[339.66px] h-[77px]  px-[21.41px] py-[10.71px]  bg-white text-[#121212] text-base font-light rounded-[71.38px] border-[0.71px] border-[#CFCFCF] flex items-center justify-between gap-[7.14px] leading-[120%] text-[30px] tracking-[-1%]">
                    Explore Our Range
                    <ArrowRightCircleIcon className=" w-[40.54px] h-[40.54px]  rotate-[-0.04deg] text-300" strokeWidth={1} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
