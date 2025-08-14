import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import type { ButtonProps } from 'antd'

type ButtonsProps = {
    children: React.ReactNode;
    className?: string; 
  };
function Buttons({children,className}:ButtonsProps) {
  return (
    <button className={` md:mt-[40px]  mt-[30px] md:w-[240px] md:h-[57px] mx-2 md:mx-0
     px-[21.41px] py-[3px]   md:py-[10px]
   font-light rounded-[71.38px] border-[0.71px]
    border-[#CFCFCF] flex  items-center justify-center   gap-2 
   leading-[120%] md:text-[30px]  tracking-[-1%] ${className}`}>{children}
    <ArrowRightCircleIcon className='w-[39px] h-[39px] md:w-[42.54px] md:h-[42.54px]  
    rotate-[-0.04deg] pt-1 pl-1' 
     strokeWidth={1}/></button>
  )
}
 export default Buttons