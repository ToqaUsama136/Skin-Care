import logo2 from "/assets/logo2.png";
import List from "../Ui/List";
import Logo from "../Ui/Logo"; 
const Footer = () => {
  const itemList=["Home","Shop","Spa","About","Contact Us","Career"];
  const itemList2=["Privacy Policy","Terms of Service","Legal"];
  return (
    <footer className="   py-[50px] bg-[#121212] text-white font-jakarta">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-[40px] md:gap-[114px]  md:w-[1085.5px]  pt-[9px] px-[50px] md:px-0">
        <section className="flex  md:w-[25%]  flex-row  items-center  justify-center md:justify-start w-full md:text-left md:pb-[128px]  md:pt-0 ">
      <Logo src="assets/logo2.png" />
      
               </section>

               <aside className=" md:w-[25%] flex flex-col items-center text-center  md:order-last  ">
          <p className="text-balance font-light  text-[19px] pb-[12px] ">
            Be the first to get notification about our upcoming event
          </p>
          <form className="relative flex  w-full md:w-[285px]  h-[43px] rounded-[5px] bg-[#E9E9E9] p-[10px]  ">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="flex-1 text-[#8A8A8A]  text-[16px]"
            />
            <button className="absolute right-[1px] top-[1px] bg-[#000000] w-[80px] h-[41px] rounded-[5px]   ">
              Submit
            </button>
          </form>
        </aside>

          <List tittle="Quick Link" items={itemList}/>
          <List tittle="Company" items={itemList2}/>
         
      </div>
      <div className="pt-[65px] ">
        <hr className="border-t border-[#727272] " />
        <div className="container mx-auto text-center   flex justify-center">
          <p className="text-[16px] leading-[120%] font-light mt-[25px]">
            &copy; 2024, Xtragleam Skincare. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
