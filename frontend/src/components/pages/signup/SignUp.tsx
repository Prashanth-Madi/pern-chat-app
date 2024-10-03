import Checkbox from "./Checkbox"


export const SignUp=()=>{
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="p-4 h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                
                <h1 className="text-3xl text-center text-black">SignUp <span className="text-red-500" >Wanna Chat</span></h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black mb-0" >Full Name</span>
                        </label>
                        <input type="text" placeholder="Prashanth Madishetti" className="rounded w-full input-bordered h-10 mt-0 bg-blue-100"/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black " >User Name</span>
                        </label>
                        <input type="text" placeholder="PrashanthMadi31" className="p-2 rounded w-full input-bordered h-10 bg-blue-100"/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black " >Password</span>
                        </label>
                        <input type="password"  className="rounded w-full input-bordered h-10 bg-blue-100"/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-black " >Confirm Password</span>
                        </label>
                        <input type="password"  className="rounded w-full input-bordered h-10 bg-blue-100"/>
                    </div>
                    <Checkbox/>

                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-black'>
                        {"Already have an account?"}
                    </a>
      
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign up</button>
                    </div>

                </form>
            </div>
            
            
        </div>
    )
}