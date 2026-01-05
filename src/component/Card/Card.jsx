import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
export default function Card({ category }) {
  let [allmeals, setallmeals] = useState([])

  async function getAllMeals() {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    console.log(response.data.meals);
    setallmeals(response.data.meals)
  }


  async function getCategoryMeals(cat) {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    setallmeals(res.data.meals);
    console.log('cat');

  }

  useEffect(() => {
    if (category == 'All') {
      getAllMeals()
    } else {
      getCategoryMeals(category)
    }

  }, [category])
  return <>
    {allmeals ? <div className=' gap-8 flex flex-wrap py-20  text-center card ml-10  '> {allmeals.map((meal) => (
      <div className='w-full   md:w-1/3 lg:w-1/5 bg-white rounded-4xl hover:scale-105 group duration-300 hover:shadow-2xl my-5' key={meal.idMeal}>
        <div className='p-2' >
          <img src={meal.strMealThumb} className='w-50 m-auto -translate-y-8 rounded-full group-hover:rotate-360 duration-500 ' alt="" />
          <h2>{meal.strMeal.split(' ').slice(0, 2).join('')}</h2>
         {meal.strArea? <div className='flex gap-3 py-1 justify-center items-center text-[#059669]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
            <p >{meal.strArea}</p>
          </div>:null}
          <Button className='text-white w-30 m-auto rounded-4xl m-3 bg-[#21BA75] hover:bg-[#059669] '><NavLink to={`/detail/${meal.idMeal}`}>View Recipe</NavLink></Button>
        </div>
      </div>
    ))}</div> : <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />}



  </>
}

