import Header from "./Header"
import { Sidebar } from "./Sidebar"
export default function RootLayout({ children }) {
  return (
 <div  className="flex">
    <Sidebar/>
    <div className="flex-1">
      <header>
          <Header  /> 
     
       </header>
      
      <main>{children}</main>

     

    </div>
    </div>
  )
}
