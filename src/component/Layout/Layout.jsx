import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
    return <>
        <div className=' flex   '>
            <Sidebar/>
            <div className='ml-0 sm:ml-[33%] md:ml-[25%] lg:ml-[16.6667%]'>
               <Outlet /> 
            </div>
            
          
            

        </div>
        <Footer/>
    </>
}
