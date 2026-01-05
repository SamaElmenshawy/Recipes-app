import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Card  from '../Card/Card'
import { Select, SelectItem } from '@heroui/react';


export default function Home() {
const [category, setCategory] = useState("All");

  return <>

    <div className='bg-[#F4F2EE]  home p-10 '>

      <div className="title flex-col p-3">
        <h1>Learn, Cook, Eat Your Food</h1>
        <div className='links p-2 mt-5 '>
          <div className=' hidden sm:block'>
            <ul className='flex flex-wrap gap-x-5 gap-y-7'>
            <li>
              <NavLink onClick={() => setCategory("All")}  className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>All</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Beef")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Beef
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Breakfast")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Breakfast
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Chicken")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Chicken
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Dessert")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Dessert
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Goat")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Goat
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Lamb")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Lamb
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Miscellaneous")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Miscellaneous
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Pasta")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Pasta
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Pork")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Pork
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Seafood")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600' >
                Seafood
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Side")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Side
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Starter")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Starter
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Vegan")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Vegan
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCategory("Vegetarian")} className='text-gray-500 border-2 border-gray-500 rounded-full py-2 px-4 shadow shadow-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-gray-600  focus:bg-white focus:text-gray-600 focus:shadow-gray-600'>
                Vegetarian</NavLink>
            </li>

          </ul>
          </div>
          <div className='block sm:hidden'>
             <Select className="w-full border-1 border-gray-300 rounded-2xl" placeholder='All '>
   
          <SelectItem onClick={() => setCategory("All")} >All</SelectItem>
          <SelectItem onClick={() => setCategory("Beef")} >Beef</SelectItem>
          <SelectItem onClick={() => setCategory("Breakfast")} >Breakfast</SelectItem>
          <SelectItem onClick={() => setCategory("Chicken")} >Chicken</SelectItem>
          <SelectItem onClick={() => setCategory("Dessert")} >Dessert</SelectItem>
          <SelectItem onClick={() => setCategory("Goat")} >Goat</SelectItem>
          <SelectItem onClick={() => setCategory("Lamb")}>Lamb</SelectItem>
          <SelectItem onClick={() => setCategory("Miscellaneous")}>Miscellaneous</SelectItem>
          <SelectItem onClick={() => setCategory("Pasta")}>Pasta</SelectItem>
          <SelectItem onClick={() => setCategory("Pork")}>Pork</SelectItem>
          <SelectItem onClick={() => setCategory("Seafood")}>Seafood</SelectItem>
          <SelectItem onClick={() => setCategory("Side")}>Side</SelectItem>
          <SelectItem onClick={() => setCategory("Starter")}>Starter</SelectItem>
          <SelectItem onClick={() => setCategory("Vegan")}>Vegan</SelectItem>
          <SelectItem onClick={() => setCategory("Vegetarian")}>Vegetarian</SelectItem>
         
       
      </Select>
          </div>
        </div>
        <hr className="w-full border-t border-gray-200" />

      </div>

      <div >
       <Card category={category}/>

      </div>

    </div>

  </>
}
