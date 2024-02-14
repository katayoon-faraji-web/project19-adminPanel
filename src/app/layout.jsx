
import "./globals.css";
import Sidebar from '../../components/sidebar/sidebar'
import RightSidebar from '../../components/rightSidebar/rightsidebar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#2f363e] font-primary flex justify-between capitalize text-[#b5b5c3]">
        <Sidebar/>
        {children}
        <RightSidebar/>
        </body>
    </html>
  );
}
