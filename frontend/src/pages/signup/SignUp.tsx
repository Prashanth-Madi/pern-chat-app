import { Link } from "react-router-dom"
import Checkbox from "./Checkbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"




export const SignUp=()=>{
    const [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })
    const {loading,signup}=useSignup();
    const handleCheckboxChange=(gender:"male"|"female")=>{
        setInputs({...inputs,gender})

    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        signup(inputs);
        
    }
    return (
        <div className='p-4 h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-4 h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                
                <h1 className="text-3xl text-center text-black">SignUp <span className="text-red-500" >Wanna Chat</span></h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black mb-0" >Full Name</span>
                        </label>
                        <input type="text" placeholder="Prashanth Madishetti" className="rounded w-full input-bordered h-10 mt-0 p-2 bg-blue-100" 
                        value={inputs.fullName}
                        onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black " >User Name</span>
                        </label>
                        <input type="text" placeholder="PrashanthMadi31" className="p-2 rounded w-full input-bordered h-10 bg-blue-100"
                        value={inputs.username}
                        onChange={(e)=>{setInputs({...inputs,username:e.target.value})}}/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black " >Password</span>
                        </label>
                        <input type="password"  className="rounded w-full input-bordered h-10 bg-blue-100"
                        value={inputs.password}
                        onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black " >Confirm Password</span>
                        </label>
                        <input type="password"  className="rounded w-full input-bordered h-10 bg-blue-100"
                        value={inputs.confirmPassword}
                        onChange={(e)=>{setInputs({...inputs,confirmPassword:e.target.value})}}/>
                    </div>
                    <Checkbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-black'>
                        {"Already have an account?"}
                    </Link>
      
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>{loading?"Loading...":"Signup"}</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}