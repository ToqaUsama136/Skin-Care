import logo2 from "/assets/logo2.png";
const Footer = () => {
  return (
    <div className="   py-[50px] bg-[#121212] text-white font-jakarta">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-[40px] md:gap-[114px]  md:w-[1085.5px]  pt-[9px] px-[50px] md:px-0">
        <div className="flex  md:w-[25%]  flex-row  items-center  justify-center md:justify-start w-full md:text-left md:pb-[128px]  md:pt-0 ">
      <img src={logo2} alt="logo" className=" pt-[2px] pl-[3px]" />

      <p className="font-playfair text-[49px] leading-[98%] tracking-[-.06rem]  ml-[-8px] ">
      tra<span className="font-jakarta  tracking-[-6%] ">g</span>
                <span className="font-jakarta ">leam</span></p>
               </div>

               <div className=" md:w-[25%] flex flex-col items-center text-center  md:order-last  ">
          <p className="text-balance font-light  text-[19px] pb-[12px] ">
            Be the first to get notification about our upcoming event
          </p>
          <div className="relative flex  w-full md:w-[285px]  h-[43px] rounded-[5px] bg-[#E9E9E9] p-[10px]  ">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="flex-1 text-[#8A8A8A]  text-[16px]"
            />
            <button className="absolute right-[1px] top-[1px] bg-[#000000] w-[80px] h-[41px] rounded-[5px]   ">
              Submit
            </button>
          </div>
        </div>

        <div className="w-full sm:w-[25%]">
          <h3 className="font-bold pb-[28px] text-[20px] whitespace-nowrap">Quick Link</h3>
          <ul className="font-light text-[20px] opacity-[75%]">
            <li>Home</li>
            <li>Shop</li>
            <li>Spa</li>
            <li>About</li>
            <li className="whitespace-nowrap">Contact Us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="w-full sm:w-[25%]">
          <h3 className="font-bold pb-[28px] text-[20px] ">Company</h3>
          <ul className="font-light text-[19px] opacity-[75%]">
            <li>Privacy Policy</li>
            <li className="whitespace-nowrap">Terms of Service</li>
            <li>Legal</li>
          </ul>
        </div>
       
      </div>
      <footer className="pt-[65px] ">
        <hr className="border-t border-[#727272] " />
        <div className="container mx-auto text-center   flex justify-center">
          <p className="text-[16px] leading-[120%] font-light pt-[12px]">
            &copy; 2024, Xtragleam Skincare. All Right Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
