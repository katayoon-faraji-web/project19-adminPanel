'use client'
import "./globals.css";
import Sidebar from '../../components/sidebar/sidebar'
import RightSidebar from '../../components/rightSidebar/rightsidebar'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  let showSidebar = (pathname === "/signup" || pathname==="/login" )? false : true;

  return (
    <html lang="en">
      <body className="bg-[#2f363e] font-primary flex justify-between capitalize text-[#b5b5c3]">
        <Sidebar/>
        {children}
        {showSidebar && <RightSidebar/>}
        </body>
    </html>
  );
}
