import { HeartIcon , ShoppingBagIcon , UserIcon,  MagnifyingGlassIcon ,Squares2X2Icon} from "@heroicons/react/24/outline";
import Logo from "../Ui/Logo";




const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#" ,active:true},
    { name: "Shop", href: "#" },
    { name: "Spa", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]

  const Categories = ["Women", "Men", "Kiddies", "New", "Popular"]
    return (  
   <div>
         <header className=" flex fixed top-0 z-50 w-full md:relative items-center justify-center py-[22px]  md:pb-0 md:pt-[10px] bg-[#ffffff]">
            <div className="relative flex justify-between w-full md:w-[1280px] h-[60px] px-[20px]   md:px-0">
               
                 <Logo src="assets/logo.png" />
               


                <nav className="hidden  md:flex space-x-[32px] font-poppins  text-[25px]  ">
                  {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className={` ${link.active?"underline underline-offset-4  text-[#2E2E2E] ":"font-light text-[#545454]"}`}>{link.name}</a>
                  ))}
                  </nav>


                  <div className="hidden md:flex space-x-5">
            {[ShoppingBagIcon, HeartIcon, UserIcon].map((Icon) => (
              <Icon 
             
                strokeWidth={.5} 
  
              />
            ))}
          </div>

             <div className="flex flex-col gap-1 md:hidden  mt-[20px]">
              <Squares2X2Icon strokeWidth={1}  className=" w-[40] h-[40px] text-[#121212]"/>
            </div> 
            </div>
       
         </header>
           <div className="relative flex  justify-center pt-[34px] pb-[50px] ">
           <div className="hidden md:flex space-x-[12px]   w-[1280px] h-[50px]">
           {Categories.map((item) => (
             <button
               key={item}
               className="bg-[#EFEFEF] rounded-[5px] text-[25px] font-poppins  font-light text-[#121212]  px-[15px]"
             >
               {item}
             </button>
           ))}
         <MagnifyingGlassIcon className=" w-[50px] h-[50px] ml-auto " strokeWidth={.5} />
         </div>
        </div>
     </div>
    
    );
}
 
export default Navbar;

