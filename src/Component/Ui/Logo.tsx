

 function Logo({src}:{src:string}) {
  return (
    <div className="flex items-center ">
       <img className=" w-[39px] h-[42px] md:w-[53px]
                 md:h-[57px] pt-[2px] pl-[3px]"
                  src={src}alt="logo"/>
                <p className="font-playfair text-[36px] 
                md:text-[49px] lineading-[98%]
                 tracking-[-.06rem]  ml-[-10px] ">tra
                 <span className="font-jakarta  tracking-[-6%] ">
                  g</span>
                <span className="font-jakarta ">leam</span></p>
    </div>
  )
}
export default Logo