
// import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import LogIn from "./pages/login/LogIn"
import { SignUp } from "./pages/signup/SignUp"
import './index.css'
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"



function App() {
  const {authUser,isLoading}=useAuthContext();

  if(isLoading) return null

  const router=createBrowserRouter([
    {
      path:'/',
      element:authUser?<Home/>:<LogIn/>
    },
    {
      path:'/login',
      element:authUser?<Home/>:<LogIn/>
    },
    {
      path:'/signup',
      element:authUser?<Home/>:<SignUp/>
    },
  ])
  

  return (
    <div>
      

<RouterProvider router={router}></RouterProvider>
       <Toaster/>

    </div>
    //  <div className='p-4 h-screen flex items-center justify-center'>
    //  <Home/>

    //  </div>
        
     
  )
}

export default App
