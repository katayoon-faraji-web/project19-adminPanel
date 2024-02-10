import HolderPieChart from '../../components/pieHolderBox/box'
const FirstLine = () =>{
    return(
        <div className="w-full h-[50%] flex flex-wrap justify-center content-center ">
            <div className="w-full h-[50%] flex flex-wrap justify-center items-center content-center">
                <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-1.png'}/>
                {/* <HolderPieChart logo={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/online-order-2.png'}/> */}
            </div>
            {/* <div className="w-full h-[50%] flex flex-wrap justify-center items-center content-center">
                <HolderPieChart/>
                <HolderPieChart/>
            </div> */}
        </div>
    )
}
export default FirstLine;
