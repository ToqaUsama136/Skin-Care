import {useEffect,useState  } from "react";

const Testimonials = () => {
   const[Testimonials,setTestimonials]=useState([]);
   useEffect(() => {
    fetch("public/data.json")
      .then((res) => res.json())
      .then((data) =>
        setTestimonials(data.testimonials));
  }, []);
    return (
        <div className="relative flex  justify-center   py-[50px]">
        <div className="relative w-[1280px] h-[1044px] bg-[#F0F0F0] ">

         <div className=" w-[1237px] h-[927px] pt-[60px] pl-[22px]  ">

           <h2 className="font-jakarta text-[50px]  pb-[30px] ">
           Testimonial
        </h2>
      

        <div className="columns-1 sm:columns-2 lg:columns-3  gap-4 w-[1237px]    ">
          
          {Testimonials.map((item) => (
            <div
              key={item.id}
              className="mb-[10px] break-inside-avoid   mx-auto   bg-[#FFFFFF] py-[37px] px-[20px] rounded-[19px] "
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[103px] h-[103px] rounded-[506px] mb-4 mx-auto"
                />
              )}
              <div className="w-[363px]  ">
              <h3 className="font-jakarta text-[25px] font-normal leading-[120%] ">{item.title}</h3>
              <p className="font-jakarta text-[25px] font-light  leading-[150%]">{item.message}
              <span className="font-jakarta text-[25px] font-normal  leading-[150%]">
                {item.author}
              </span>
              </p>
              </div>
            </div>
          ))}
        </div>
  </div>
  </div>
        </div>
         );
}
 
export default Testimonials;