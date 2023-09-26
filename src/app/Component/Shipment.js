"use client"
import React, { useEffect } from 'react'
import { Sidebar } from '../Component/Sidebar'
import Layout from '../Component/Layout'
import {CardTwo} from '../Component/CardTwo'


function Shipment() {
  
    return (
        <>

        <div clasName=" flex flex-row items-center ">
                <CardTwo value="Create Shipment"/>
                <CardTwo value="View Shipment"/>
      </div>
        </>
  )
}

export default Shipment