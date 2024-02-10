
import "./globals.css";
import Sidebar from '../../components/sidebar/sidebar'
import RightSidebar from '../../components/rightSidebar/rightsidebar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#24292d]">
        <Sidebar/>
        <RightSidebar/>
        {children}
        </body>
    </html>
  );
}
