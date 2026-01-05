import React from 'react'
import img from '../../assets/logo-BfNap0Pe.png'
export default function Footer() {
  return <>
  <div className=' bg-white container m-auto p-3 footer '>
    <div className='flex justify-between items-center py-3'>
        <div className='flex justify-center items-center gap-3'>
            <img src={img} alt="" className='w-12' />
            <h2>Recipe</h2>
        </div>
        <h2 className='text-[#1D4ED8]'>Route</h2>
    </div>
    <hr className='border-gray-200'></hr>
    <div className=' flex justify-center items-center py-5'>
        <p className='text-gray-500'>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </div>

  </div>
  </>
}
