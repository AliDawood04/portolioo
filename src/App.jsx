import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import Notfound from './Component/Notfound/Notfound'
import Portfolio from './Component/Portfolio/Portfolio'
import Layout from './Component/Layout/Layout'


let router=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'*',element:<Notfound/>}
  ]}
])

export default  function App() {
 
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

