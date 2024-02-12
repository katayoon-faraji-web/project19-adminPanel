import HolderPieChart from '../pieHolderBox/box'
const SecondLine = () =>{
    return(
        <div className="mt-6 w-full h-[460px]  flex flex-wrap justify-center content-center ">
            <div className="mb-4 w-full h-[50%] flex flex-wrap justify-between items-center content-center">
                <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-1.png'} num1={89} title1='total order' val1={500} val2={500} per={3} status='up' num2={415} title2='total order'/>
                <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-2.png'} num1={899} title1='total delivered' val1={300} val2={700} per={8} status='up' num2={325} title2='totla menu'/>
            </div>
            <div className="w-full h-[50%] flex flex-wrap justify-between items-center content-center">
                <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-3.png'} num1={59} title1='total canceled' val1={900} val2={200} per={2} status='down' num2={985} title2='total customers'/>
                <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-4.png'} num1={789} title1='total revenue' val1={500} val2={500} per={12} status='down' num2={425} title2='totla revenue'/>
            </div>
        </div>
    )
}
export default SecondLine;
