import HolderPieChart from '../pieHolderBox/box'

import { useState ,useEffect } from 'react';
import useStore from '../../zustand/store'
import { stringify } from 'postcss';
import { stringToNumber } from '@syncfusion/ej2-react-maps';
const SecondLine = () =>{
    let dataSource = useStore(state=>state.dataSource)
    console.log(dataSource);

    // let d1 = []
    // let d2 = []
    // let d3 = []
    // let d4 = []
    
    // useEffect(()=>{
    //     d1 = dataSource[0].pie1
    //     d2 = dataSource[0].pie2
    //     d3 = dataSource[0].pie3
    //     d4 = dataSource[0].pie4
    // },[dataSource])

    let x1 = dataSource[0].pie1
    let x2 = dataSource[0].pie2
    let x3 = dataSource[0].pie3
    let x4 = dataSource[0].pie4

    console.log(typeof(x1));
    console.log(typeof(stringToNumber(x1[3])));
        
      return(
          <div className="mt-6 w-full h-fit lg:h-[460px]  flex flex-wrap justify-center content-center ">
              <div className="mb-4 w-full h-[50%] flex flex-wrap justify-between items-center content-center">
                  <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-1.png'} num1={x1[0]} title1='total order' val1={stringToNumber(x1[2])} val2={stringToNumber(x1[3])} per={3} status='up' num2={dataSource[0].pie1[1]} title2='total order'/>
                  <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-2.png'} num1={dataSource[0].pie2[0]} title1='total delivered' val1={stringToNumber(x2[2])} val2={stringToNumber(x2[3])} per={8} status='up' num2={dataSource[0].pie2[1]} title2='totla menu'/>
              </div>
              <div className="w-full h-[50%] flex flex-wrap justify-between items-center content-center">
                  <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-3.png'} num1={dataSource[0].pie3[0]} title1='total canceled' val1={stringToNumber(x3[2])} val2={stringToNumber(x3[3])} per={2} status='down' num2={dataSource[0].pie3[1]} title2='total customers'/>
                  <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-4.png'} num1={dataSource[0].pie4[0]} title1='total revenue' val1={stringToNumber(x4[2])} val2={stringToNumber(x4[3])} per={12} status='down' num2={dataSource[0].pie4[1]} title2='totla revenue'/>
              </div>
          </div>
      )
  }


export default SecondLine;
