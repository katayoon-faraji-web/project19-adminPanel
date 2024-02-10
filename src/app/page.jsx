import FirstLine from '../../components/firstline/box'
export default function Home() {
  return (
    <main className="bg-[#24292d]  flex flex-wrap justify-center content-start p-4 w-full h-[100vh]">
      <div className='w-[58%] h-full border-2 relative top-0 -left-[3%] border-white flex flex-wrap justify-center content-start'>
        <FirstLine/>
      </div>
    </main>
  );
}
