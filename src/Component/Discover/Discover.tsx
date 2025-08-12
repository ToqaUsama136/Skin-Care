

import { HeartIcon ,ShoppingBagIcon} from "@heroicons/react/24/outline";
import { useEffect,useState } from "react";


interface Product {
    id: number ;
    tag: string;
    image: string;
    name: string;
    title: string;
    oldPrice: string;
    price: string;
  }
const Discover = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data.Products))
    },[]);
    return (
        <div className="relative flex items-center justify-center   py-[50px]">
         <div className='  w-full max-w-[1280px]  
           '>
            <div className="flex  md:flex-row items-center justify-between h-[50px] md:py-[55px] 
            ">
                <h2 className=" font-poppins font-normal leading-[100%] tracking-[-1%] text-[24px] md:text-[50px] md:ml-0  ml-[40px]">Discover Our Best-Sellers</h2>
                <button className=" font-poppins font-light leading-[100%] tracking-[-1%] text-[20px] md:text-[30px] underline underline-offset-6 decoration-1 md:mr-0  mr-[40px]" >View all</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-[17px] ">
                {products.map((product) => (
                    <div className="relative w-[415px] h-[415px] mx-auto border border-[#F0F0F0] rounded-[10px] bg-[#F0F0F0] " key={product.id}>

                    <div className="absolute w-[375px] h-[45px] top-[35px] left-[20px] gap-[240px]  flex  ">
                    <p className="w-[95px] h-[19px]  font-normal text-[20px] leading-[98%] tracking-[-1%] font-poppins ">{product.tag}</p>
                
                    <p className="w-[95px] h-[15px] text-[#FAAA4C] font-light text-[20px]  font-poppins absolute left-[1px] bottom-[10px]">★★★★★</p>
                    <div className="w-[40px] h-[40px] rounded-[25px] border border-[#8B8B8B] bg-white absolute gap-[9px] right-[10px] top-[20px] flex items-center justify-center">
                     <HeartIcon className="w-[22px] h-[22px] text-[#8B8B8B]   " /></div>
                    </div>
                    <div className="flex justify-center items-center pt-2 ">
                    <img className=" w-[450px] h-[300px] oject-contain  rotate-[-0.04deg]" src={product.image} alt={product.name} />
                </div>
                    <div className="flex w-[414px] h-[103px] absolute top-[312px] justify-between gap-3 bg-[#ffffff] rounded-b-[10px]  border border-[#E4E4E4] ">
                          <div className="w-[163px] h-[37px] gap-[5px] absolute top-[32px] left-[20px]  ">
                          <h4  className="h-[16px] font-poppins font-light leading-[98%] tracking-[-1%] text-[16px]">{product.title}</h4>
                        <span className="line-through font-light p-[5px] font-poppins text-[16px] opacity-[41%]" >{product.oldPrice} </span>
                         <span className="font-normal font-poppins text-[16px]" >{product.price}</span>

                         </div>
                         <button className="w-[137px] h-[40px] flex items-center gap-1 absolute top-[32px] right-[20px] bg-[#121212] px-[10px] py-[5px]  rounded-[40px] text-white font-poppins font-normal leading-[100%] tracking-[-1%] text-[16px] ">Add to Cart
                            <ShoppingBagIcon strokeWidth={1} className="w-[25px] h-[25px]   rotate-[-0.04deg] text-white" /></button>
                    </div>
                    
                    </div>
                ))}
            </div>
            </div>
         </div>
       
    );

}
 
export default Discover;