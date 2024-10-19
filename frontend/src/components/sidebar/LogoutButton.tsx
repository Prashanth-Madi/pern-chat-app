
import { SlLogout } from "react-icons/sl";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
 
  // const handleLogout=()=>{
  //   alert("You have been logged out")
  // }
  const {logout}=useLogout();
  return (
    <div className='mt-auto'>
      <SlLogout className='w-6 h-6 text-black cursor-pointer' onClick={logout}/> 
      
    </div>
  )
}

export default LogoutButton
