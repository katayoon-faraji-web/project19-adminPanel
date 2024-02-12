
import "./globals.css";
import Sidebar from '../../components/sidebar/sidebar'
import RightSidebar from '../../components/rightSidebar/rightsidebar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#24292d] font-primary capitalize text-[#b5b5c3]">
        <Sidebar/>
        <RightSidebar/>
        {children}
        </body>
    </html>
  );
}
