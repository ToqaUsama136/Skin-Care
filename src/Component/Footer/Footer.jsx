import logo2 from "/assets/logo2.png";
const Footer = () => {
  return (
    <div className="  h-[413px] py-[50px] bg-[#121212] text-white font-jakarta">
      <div className="container mx-auto flex  justify-between gap-[114px] w-[1085.5px] h-[243px] pt-[9px]">
        <div className="flex items-center w-full  pb-[128px]">
      <img src={logo2} alt="logo" className=" pt-[2px] pl-[3px]" />

      <p className="font-playfair text-[49px] lineading-[98%] tracking-[-.06rem]  ml-[-8px] ">
      tra<span className="font-jakarta  tracking-[-6%] ">g</span>
                <span className="font-jakarta ">leam</span></p>
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
        <div className="w-full sm:w-[25%] flex flex-col items-center text-center  ">
          <p className=" font-light  text-[18px] pb-[12px] ">
            Be the first to get notification about our upcoming event
          </p>
          <div className="relative flex w-[285px]  h-[43px] rounded-[5px] bg-[#E9E9E9] p-[10px] ">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 text-[#8A8A8A]  text-[16px]"
            />
            <button className="absolute right-[1px] top-[1px] bg-[#000000] w-[80px] h-[41px] rounded-[5px]   ">
              Submit
            </button>
          </div>
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
