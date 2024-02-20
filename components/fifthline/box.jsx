'use client'
import Image from "next/image";
import { useState ,useEffect } from "react";
import LineChartSmall from '../lineChartRechart/chart'
import useStore from '../../zustand/store';

const FifthLine = () =>{
    let dataSource = useStore(state=>state.dataSource)
    let d = []
    const [data,dataSet] = useState([])
    useEffect(()=>{
      d = dataSource[0].trendedfoods
      const arr = [
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/biryanis.jpg',name:d[0].name,price:d[0].price,num:d[0].num1,sales:d[0].num2,status:'plus'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/burgers.jpg',name:d[1].name,price:d[1].price,num:d[1].num1,sales:d[1].num2,status:'neg'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dals.jpg',name:d[2].name,price:d[2].price,num:d[2].num1,sales:d[2].num2,status:'plus'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/noodles.jpg',name:d[3].name,price:d[3].price,num:d[3].num1,sales:d[3].num2,status:'neg'},
        {s:'https://riday-admin-template.multipurposethemes.com/bs5/images/food/main.jpg',name:d[4].name,price:d[4].price,num:d[4].num1,sales:d[4].num2,status:'plus'}
    ]
        dataSet(arr)
      
    },[])

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
                <div className="w-[100px] lg:w-[80px] h-full ">{children}</div>
                <div className="w-[100px] h-full ml-2 flex flex-wrap justify-end content-center">
                    <span className="w-full flex text-[18px] justify-end">{num}</span>
                    <span className="w-full flex text-[12px] justify-end">{sales}</span>
                </div>
            </div>
        </div>
    )
}

