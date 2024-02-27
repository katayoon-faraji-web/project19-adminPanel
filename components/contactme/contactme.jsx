import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Contactme = () => {
    return (
        <div className="transition-all duration-500 animate-bounce w-[100px] h-[100px] flex justify-end fixed bottom-0 right-[10px] cursor-pointer rounded-full p-2 z-50  group hover:animate-none">
            <div className="bg-[url('./../../public/images/katy_logo.jpg')]  w-[80px] h-[80px] rounded-full bg-no-repeat cursor-pointer bg-center bg-cover border-2 border-black"></div>
            <ul className="w-full absolute top-0 left-0 h-full  rounded-full ">
                <li className="group-hover:block hover:scale-105 hover:text-black absolute hidden origin-center translate-y-[-20px] translate-x-[20px]"><Link href={'mailto:farajikatayoon75@gmail.com'}><EmailIcon/></Link></li>
                <li className="group-hover:block hover:scale-105 hover:text-black absolute hidden origin-center translate-x-[-10px]"><Link href={'https://github.com/katayoon-faraji-web'}><GitHubIcon/></Link></li>
                <li className="group-hover:block hover:scale-105 hover:text-black absolute hidden origin-center translate-x-[-20px] translate-y-[30px]"><Link href={'https://www.linkedin.com/in/katayoon-faraji-web-3b722b207'}><LinkedInIcon/></Link></li>
                <li className="group-hover:block hover:scale-105 hover:text-black absolute hidden origin-center translate-x-[-10px] translate-y-[60px]"><Link href={'https://instagram.com/katayoon_faraji_web'}><InstagramIcon/></Link></li>
            </ul>
        </div>
    )
}

export default Contactme;