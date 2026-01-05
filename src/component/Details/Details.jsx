import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from '../../assets/pb6mj11763788331.jpg'
import { Button } from '@heroui/react'
export default function Details() {
  let {id}=useParams()
  console.log(id);
  
  let [details,setdetails]=useState("")
  async function getDetails() {

    const response= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(response);
  setdetails(response.data.meals)
  }
useEffect(()=>{
  getDetails()
  console.log(details[0]?.strMeal);
},[])
const ingredients = [];
{details.length > 0 && (() => {
  const meal = details[0];
  

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

})()}

  
 function youtube(){
  window.open(details[0].strYoutube)
 }
 function source(){
  window.open(details[0].strSource)
 }
//   function source(){
//   window.open(details[0].strYoutube)
//  }
  return <>
  {details?.length>0? <div className=' details p-8 '>
    <div className=' m-4'>
      <div className='lg:grid lg:grid-cols-3 gap-4'>
        
        <div className='col-span-2 '>
          <h2 className='name'>{details[0]?.strMeal}</h2>
          <div className="lg:grid lg:grid-cols-2 py-4 gap-7  ">
            <div>
             <img src={details[0]?.strMealThumb} alt="" className=' object-fill  rounded-3xl pb-4' /> 
             <div className="button flex gap-5 text-center justify-start my-5  ">
            <Button onClick={youtube} color="danger"><i className="fa-brands fa-youtube"></i> youtube</Button>
           <Button onClick={source} color="success" className='text-white'> <i className="fa-solid fa-globe"></i>source</Button>
        </div>
            </div>
          
          <p> {details[0]?.strInstructions}</p>
          
        </div>
        
        </div>
        <div className="box bg-white  rounded-4xl p-5">
        <h2>ingrediants</h2>
        <hr className='border-b-4 rounded-3xl border-gray-200 my-2'></hr>
        {ingredients.map((item,index)=>(

          <div className='py-1'>
          <div className='flex justify-between items-center py-2'>
          <h3>{item.ingredient}</h3>
          <h3>{item.measure}</h3>
        </div>
        <hr className='border-b-2 rounded-3xl border-gray-200'  ></hr>
        </div>
        ))}
        
      </div>
      </div>
      

    </div>
  </div>:'louding' }
 
  
  </>
}
