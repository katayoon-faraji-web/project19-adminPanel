'use client'
import Image from "next/image";
import { useState } from "react";
import LineChartSmall from '../lineChartRechart/chart'
const FifthLine = () =>{
    const data1 = [
        {
          name: 'Mon',
          uv: 20,
      
        },
        {
          name: 'Tue',
          uv: 30,
      
        },
        {
          name: 'Wed',
          uv: 20,
      
        },
        {
          name: 'Thu',
          uv: 50,
      
        },
       
      ];
      const data2=[
          {
              name: 'Mon',
              uv: 50,
          
            },
            {
              name: 'Tue',
              uv: 20,
          
            },
            {
              name: 'Wed',
              uv: 30,
          
            },
            {
              name: 'Thu',
              uv: 20,
          
            },
      ]
    const [data,dataSet] = useState([
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/biryanis.jpg',name:'Biryanis Pulav',price:'$12.00 Main Course',num:'158',sales:'sales(20%)',status:'plus'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/burgers.jpg',name:'Burgers',price:'$42.00 Snakes',num:'18',sales:'sales(-0.5%)',status:'neg'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dals.jpg',name:'Dal Palak Recipe',price:'$60.00 Main Course',num:'258',sales:'sales(15%)',status:'plus'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/noodles.jpg',name:'Pan Noodles',price:'$112.00 Staters',num:'58',sales:'sales(-10%)',status:'neg'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/main.jpg',name:'Vegetable Jalfrezi',price:'$120.00 Main Course',num:'215',sales:'sales(21%)',status:'plus'}
    ])
    return(
        <div className="w-full h-fit flex flex-wrap justify-center content-start p-4 bg-[#24292d] rounded-lg">
            {data && data.map((val)=>{
                if(val.status=='plus'){
                    return(
                    
                        <Item s={val.s} name={val.name} price={val.price} num={val.num} sales={val.sales} status={val.status}>
                            <LineChartSmall d={data1} color='#0f8874'/>
                        </Item>
                       
                    )
                }else if(val.status=='neg'){
                    return(
                    
                        <Item s={val.s} name={val.name} price={val.price} num={val.num} sales={val.sales} status={val.status}>
                            <LineChartSmall d={data2} color='#fb3e7a'/> 
                        </Item>
                       
                    )
                }
                
            })}
        </div>
    )
}
export default  FifthLine;

const Item = ({children,s,name,price,num,sales}) =>{
    return(
        <div className="w-full px-1 lg:px-6 h-[100px] flex justify-between cursor-pointer items-center content-center border-b border-[#b5b5c3] transition-all duration-500 hover:bg-[#b5b5c3] hover:text-[#24292d]">
           <div className="w-[60%] h-full flex justify-start items-center">
                <div className="w-[60px] lg:w-[100px] h-full flex items-center justify-start">
                    <Image className="rounded-lg" width={150} height={150} alt="pic" src={s}/>
                </div>
                <div className="w-[45%] lg:w-[40%] h-full flex flex-wrap justify-start ml-4 content-center">
                    <span className="flex w-full text-[12px] lg:text-[18px]">{name}</span>
                    <span className="flex w-full text-[12px]">{price}</span>
                </div>
           </div>
            <div className="w-[35%] h-full flex justify-end items-center content-center">
                <div className="w-[65px] h-full ">{children}</div>
                <div className="w-[100px] h-full ml-2 flex flex-wrap justify-end content-center">
                    <span className="w-full flex text-[18px] justify-end">{num}</span>
                    <span className="w-full flex text-[12px] justify-end">{sales}</span>
                </div>
            </div>
        </div>
    )
}

