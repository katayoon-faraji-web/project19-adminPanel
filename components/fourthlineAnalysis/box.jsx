import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import useStore from '../../zustand/store';

const FourthLineAnalysis = () =>{
    let dataSource = useStore(state=>state.dataSource)
    let d = dataSource[0].fourboxanalysis

    return(
        <div className="w-full flex flex-wrap justify-between content-center rounded-lg  my-6 ">
            <div className="w-full h-fit flex flex-wrap justify-between items-center content-center">
                <SmallBox t1={d.salestoday} t2={'Sales Today'}><LocalShippingIcon className='text-white'/></SmallBox>
                <SmallBox t1={d.visitorstoday} t2={'Visitors Today'}><BoltIcon className='text-white'/></SmallBox>
            </div>
            <div className="w-full h-fit flex flex-wrap justify-between items-center content-center mt-4">
                <SmallBox t1={d.totalearnings} t2={'Total Earnings'}><ShoppingCartIcon className='text-white'/></SmallBox>
                <SmallBox t1={d.pendingorders} t2={'Pending Orders'}><CampaignIcon className='text-white'/></SmallBox>
            </div>

        </div>
    )
}
export default FourthLineAnalysis;

const SmallBox = ({t1,t2,children}) =>{
    return(
        <div className='w-full md:w-[48%] h-[100px] flex justify-between items-center bg-[#24292d] rounded-lg p-4 mt-4 md:mt-0 '>
            <div className='w-[50%] flex flex-wrap justify-start content-center'>
                <span className='w-full flex text-[20px]'>{t1}</span>
                <span className='w-full flex text-[15px]'>{t2}</span>
            </div>
            <div className='w-[70px] h-[70px] rounded-full bg-[#2f363e] flex justify-center items-center '>
                {children}
            </div>
        </div>
    )
}