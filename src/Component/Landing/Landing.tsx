
import SkinCare from "/assets/SkinCare.png";
import face from "/assets/face.png";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import { ArrowUpRightIcon}   from "@heroicons/react/24/outline";
import logo from "/assets/logo.png"


const Landing = () => {
  return (
    <div>
       <div className="section1">
        <div className=" relative flex items-center justify-center  pb-[50px] px-4  sm:px-[20px] ">
          <div className="relative w-full md:w-[1280px]  h-[523px] md:rounded-[20px] bg-[#FFF6FD]  overflow-hidden ">
          <div className=" items-center absolute hidden md:flex text-[260px] font-semibold    opacity-20 select-none pt-[220px] pl-[100px] w-full max-w-[1500px] ">
           <img src={logo} alt="" className="mt-7 w-[400px] h-[320px] pt-[5px]"/>
          <h1 className="ml-[-28px]">
          tragleam
           </h1>
           </div>
            <div className="flex flex-col  w-full h-fit md:w-1/2 md:h-[128.5px] pt-[100px]  md:pl-[60px] md:pt-[106px] ">
              <div className=" md:mx-0   text-[57px] font-poppins leading-[100px] md:text-[60px] md:leading-[90px] px-2  ">
                <p className="inline-block whitespace-nowrap">Glow Beyond
                 <span className="hidden md:inline-block relative w-[45px] h-[45px]  ml-5">
                  < ArrowUpRightIcon  strokeWidth={2}/>
                  <span className="absolute left-0 right-0 -bottom-1 h-[1px] border  bg-black"></span>
                </span> </p>
               <p className=" md:pl-[240px]  md:mt-[-30px]"> Expectations</p>
              </div>
              <p className=" font-poppins text-[20px] md:text-[30px] font-light w-full px-4 md-px-0  ">
              Clean, effective, and cruelty-free skincare made to deliver visible results.
              </p>
              <button className=' md:mt-[40px]  mt-[30px] md:w-[240px] md:h-[57px] mx-2 md:mx-0
                px-[21.41px] py-[10.71px] bg-[#121212] text-[#ffffff] 
               font-light rounded-[71.38px] border-[0.71px]
                border-[#CFCFCF] flex  items-center justify-center   gap-2 
               leading-[120%] md:text-[30px] text-[32px] tracking-[-1%]'>Show Now
                <ArrowRightCircleIcon className='w-[39px] h-[39px] md:w-[42.54px] md:h-[42.54px]  rotate-[-0.04deg] pt-1 pl-1' 
                 strokeWidth={1}/></button>
            
            </div>
            <div className="relative w-1/2  ">

            <img src={SkinCare} alt="Skin Care"  className=" absolute w-[500px] h-[450px]
             top-[-43px] left-[793px]  "/>
            
            </div>
          </div>
        </div>
      </div> 

       <div className="section2 md:py-[50px]">
        <div className="relative flex items-center justify-center  px-[20px] md:px-0">
          <div className="relative w-full bg-[#F0F0F0] md:w-[1280px]  md:h-[628px] h-[700px] overflow-hidden">
            <div className="absolute   h-[527] md:top-[50.5px] top-[25px] md:left-[40px] left-[20px] ">
              <h2 className="  h-[50px] font-poppins text-[30px] md:text-[50px] font-normal tracking-[-1%] pb-[100px] ">
                Why Choose Xtragleam?
              </h2>
              <div className="flex flex-col md:flex-row gap-[30px]  md:py-[24px] ">
                <div className="overflow-hidden  h-[230px] md:h-[420px] md:w-[550px]  ">
                  <img
                  
                     className=" h-[505px]  md:w-[1280px] md:h-[820px]   translate-y-[-200px]  md:translate-y-[-320px] object-cover  pr-4 md:pr-0 "
                     style={{   objectPosition: "70% 100%" }}
                    src={face}
                    alt="face"
                  />
                </div>

                <div className=" flex flex-col  w-full md:w-[617px] md:h-[385px] ">
                  <h2 className=" font-poppins text-[20px] md:text-[27px] font-normal tracking-[-1%] leading-[120%]">
                    Struggling with acne issues?
                  </h2>

                  <p className=" md:w-[617px] md:h-[246px]    font-poppins text-[16px] md:text-[27px] 
                  font-light tracking-[-1%] leading-[150%] pt-2  pb-[35px] md:pb-0 ">
                    At Xtragleam Skincare, we understand how frustrating acne
                    can be, and we’re here to help you regain confidence in your
                    skin. Our carefully designed recovery process targets acne
                    at its root while soothing and vnourishing your skin for
                    long-term health.
                  </p>
                  <button className=" h-[53px] w-[250px] md:w-[339.66px] md:h-[77px]  px-[15px] py-[7.5px]
                   md:py-[10.71px] md:mt-[40px]
                   bg-white text-[#121212]  font-light rounded-[50px]
                    md:rounded-[71.38px] border-[0.71px] border-[#CFCFCF] 
                    flex items-center md:justify-between justify-end  gap-[7px] leading-[120%]
                     text-[22px] md:text-[30px] tracking-[-1%]   md:ml-0">
                    Explore Our Range
                    <ArrowRightCircleIcon className=" w-[25px] h-[25px] md:w-[40px] md:h-[40px] rotate-[-0.04deg] text-300" strokeWidth={1} />
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
