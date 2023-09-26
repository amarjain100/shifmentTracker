"use client"
import React, { useEffect,useState } from 'react'
import Link from 'next/link'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'

const obj1 = {
  Admindashboard: "/AdminDashboard",
  Shipment: "/"
}





export function Sidebar() {

  let [data, setData] = useState([]);

    useEffect(() => {
    const sessionData = sessionStorage.getItem("user");
      
      data = JSON.parse(sessionData)
      setData(data.data.role)
    console.log(data);
    console.log("sessionData")
  
    }, [])
  
  return (

    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-sky-900 px-5 py-8">
      <div className="mt-6 flex flex-1 flex-col justify-between">
        {data == "admin" ? (
            <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <Link href={"/AdminDashboard"} className="hover:text-black mx-2 text-sm font-medium flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
              Dashboard
            </Link>
          </div>
          <div className="space-y-3 ">
            <Link href={"/shipment"} className="hover:text-black mx-2 text-sm font-medium flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
              Shipment
            </Link>
                  </div>
          <div className="space-y-3 ">
            <Link href={"/Driver"} className="hover:text-black mx-2 text-sm font-medium flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
              Driver
            </Link>
          </div>
        </nav>
        ) :
          <nav className="-mx-3 space-y-6 ">
                   {/* <div className="space-y-3 ">
            <Link href={"/DriverDashboard"} className="hover:text-white mx-2 text-sm font-medium flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
              Dashboard
            </Link>
          </div> */}
          <div className="space-y-3 ">
            <Link href={"/MyShipment"} className="hover:text-white mx-2 text-sm font-medium flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
              My Shipment
            </Link>
          </div>
        </nav>}
      
      </div>
    </aside>
  )
}
