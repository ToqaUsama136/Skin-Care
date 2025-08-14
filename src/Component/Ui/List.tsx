import React from 'react'

interface ListProps {
    tittle:string;
    items:string[];
}
export default function List({items,tittle}:ListProps) {
  return (
    <div className="w-full sm:w-[25%]">
    <h3 className="font-bold pb-[28px] text-[20px] whitespace-nowrap">{tittle}</h3>

    <ul className="font-light text-[19px] opacity-[75%]">
        {items.map((item)=>(
        <li>{item}</li>))}
    </ul>
    </div>
  )
}
