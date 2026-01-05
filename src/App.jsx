import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Details from './component/Details/Details'
function App() {
  const [count, setCount] = useState(0)
  
  let route=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'/detail/:id',element:<Details/>}
    ]}
  ])
  return <>
  <RouterProvider router={route}>

  </RouterProvider>
  </>
}

export default App
