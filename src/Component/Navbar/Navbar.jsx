import { HeartIcon , ShoppingBagIcon , UserIcon,  MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";



const Navbar = () => {
    return (  
   <div>
         <header className=" flex fixed top-0 z-50 w-full md:relative items-center justify-center py-[22px]  md:pb-0 md:pt-[10px] bg-[#ffffff]">
            <div className="relative flex justify-between w-full max-w-[1280px] h-[60px] px-[20px]   md:px-0">
                <div className="flex items-center ">
                <img className="w-[53px] h-[57px] pt-[2px] pl-[3px]" src="assets/logo.png" alt="logo"/>
                <p className="font-playfair text-[49px] lineading-[98%] tracking-[-.06rem]  ml-[-10px] ">tra<span className="font-jakarta  tracking-[-6%] ">g</span>
                <span className="font-jakarta ">leam</span></p></div>
                <nav className="hidden  md:flex space-x-[32px] font-poppins  text-[25px]  ">
                <a href="#" className="underline underline-offset-4 text-[#2E2E2E] ">
            Home
          </a>
          <a className="font-light text-[#545454]" href="#">Shop</a>
          <a className="font-light text-[#545454]" href="#">Spa</a>
          <a  className="font-light text-[#545454]" href="#">About</a>
          <a  className="font-light text-[#545454]" href="#">Contact</a>
                </nav>
                <div className=" hidden md:flex space-x-[20px] h-[45px] " >
                    <ShoppingBagIcon strokeWidth={1} />
                    <HeartIcon strokeWidth={1} />
                    <UserIcon  strokeWidth={1}/>
                </div>
            <div className="flex flex-col gap-1 md:hidden  mt-[20px]">
              <Squares2X2Icon strokeWidth={1}  className=" w-[40] h-[40px] text-[#121212]"/>
            </div>
            </div>
       
         </header>
           <div className="relative flex  justify-center pt-[34px] pb-[50px] ">
           <div className="hidden md:flex space-x-[12px]   w-[1280px] h-[50px]">
           {["Women", "Men", "Kiddies", "New", "Popular"].map((item) => (
             <button
               key={item}
               className="bg-[#EFEFEF] rounded-[5px] text-[25px] font-poppins  font-light text-[#121212]  px-[15px]"
             >
               {item}
             </button>
           ))}
         <MagnifyingGlassIcon className=" w-[50px] h-[50px] ml-auto " strokeWidth={1} />
         </div>
        </div>
     </div>
    
    );
}
 
export default Navbar;

