
// import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/pages/home/Home"
import LogIn from "./components/pages/login/LogIn"
import { SignUp } from "./components/pages/signup/SignUp"
import './index.css'

function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<SignUp/>
  //   },
  //   {

  //   }
  // ])

  return (
      //  <RouterProvider router={router}></RouterProvider>
     <div className='p-4 h-screen flex items-center justify-center'>
     <Home/>

     </div>
        
     
  )
}

export default App
