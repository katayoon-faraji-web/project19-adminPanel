import FirstLine from '../../components/firstline/box'
import SecondLine from '../../components/secondline/box'
import ThirdLine from '../../components/thirdline/box'
import FourthLine from '../../components/fourthline/box'
import FifthLine from '../../components/fifthline/box'
import LastLine from '../../components/lastline/box'


export default function Home() {
  return (
    <main className="bg-[#2f363e]  flex flex-wrap justify-center content-start p-4 w-full h-fit">
      <div className='w-[58%] h-full border-2 relative top-0 -left-[3%] border-white flex flex-wrap justify-center content-start'>
        <FirstLine/>
        <SecondLine/>
        <ThirdLine/>
        <FourthLine/>
        <FifthLine/>
        <LastLine/>
        
      </div>
    </main>
  );
}
