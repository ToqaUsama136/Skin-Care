import {useEffect,useState  } from "react";

const Testimonials = () => {
   const[Testimonials,setTestimonials]=useState([]);
   useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) =>
        setTestimonials(data.testimonials));
  }, []);
    return (
        <div className="relative flex  justify-center   py-[50px] px-4  ">
        <div className="relative   w-full md:w-[1280px] md:h-[1044px] bg-[#F0F0F0] pr-3 md:px-3 md:pr-2 overflow-hidden ">

         <div className="w-full md:w-[1237px] md:h-[927px] pt-[60px] pl-[22px]  ">

           <h2 className="font-jakarta text-[30px] md:text-[50px]  pb-[30px] ">
           Testimonial
        </h2>
      

        <div className="columns-1 sm:columns-2 lg:columns-3  gap-4    ">
          
          {Testimonials.map((item) => (
            <div
              key={item.id}
              className="mb-[10px]        bg-[#FFFFFF] py-[37px] px-[20px] rounded-[19px] "
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[76px] h-[76px] mx-auto md:w-[103px] md:h-[103px]  rounded-[506px] mb-4  "
                />
              )}
              <div className="w-full md:w-[363px]  ">
              <h3 className="font-jakarta text-[18px] md:text-[25px] font-normal leading-[120%] ">{item.title}</h3>
              <p className="font-jakarta text-[18px] md:text-[25px] font-light  leading-[150%]">{item.message}
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