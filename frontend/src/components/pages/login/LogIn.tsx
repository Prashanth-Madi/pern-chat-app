import React from 'react'

const LogIn = () => {
  return (
    <div className='p-2 flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
        <h1 className='text 3x1 font-semibold text-center text-black'>
          Login
          <span className='text-blue-500'> Wanna Chat</span>
        </h1>
        <form className='p-4'>
      <div>
      <label  >
        <span className='text-base label-text text-black'>Username</span>
        </label>
        <div className='input-bordered flex items-center gap-2 rounded-sm'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-black">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input  type="text" className="grow bg-blue-100 rounded-sm" placeholder="Email" />
        </div>
      </div>

      <div >
      <label >
        <span className='text-base label-text text-black'>Password</span>
        </label>
        <div className='input-bordered flex items-center gap-2 rounded-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 50 50"
        fill="currentColor"
        className='h-4 w-4 opacity-70 text-black'>
        < path d="M 25 2 C 17.832484 2 12 7.8324839 12 15 L 12 21 L 8 21 C 6.3550302 21 5 22.35503 5 24 L 5 47 C 5 48.64497 6.3550302 50 8 50 L 42 50 C 43.64497 50 45 48.64497 45 47 L 45 24 C 45 22.35503 43.64497 21 42 21 L 38 21 L 38 15 C 38 7.8324839 32.167516 2 25 2 z M 25 4 C 31.086484 4 36 8.9135161 36 15 L 36 21 L 14 21 L 14 15 C 14 8.9135161 18.913516 4 25 4 z M 8 23 L 42 23 C 42.56503 23 43 23.43497 43 24 L 43 47 C 43 47.56503 42.56503 48 42 48 L 8 48 C 7.4349698 48 7 47.56503 7 47 L 7 24 C 7 23.43497 7.4349698 23 8 23 z M 13 34 A 2 2 0 0 0 11 36 A 2 2 0 0 0 13 38 A 2 2 0 0 0 15 36 A 2 2 0 0 0 13 34 z M 21 34 A 2 2 0 0 0 19 36 A 2 2 0 0 0 21 38 A 2 2 0 0 0 23 36 A 2 2 0 0 0 21 34 z M 29 34 A 2 2 0 0 0 27 36 A 2 2 0 0 0 29 38 A 2 2 0 0 0 31 36 A 2 2 0 0 0 29 34 z M 37 34 A 2 2 0 0 0 35 36 A 2 2 0 0 0 37 38 A 2 2 0 0 0 39 36 A 2 2 0 0 0 37 34 z"></path>
        </svg>
          <input  type="password" className="grow bg-blue-100 rounded-sm" placeholder="Password" />
          </div>
      </div>
      <div>
      <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-red-400'>
      {"Don't have an account?"}
      </a>
      </div>
      <div>
        <button className='btn btn-block btn-sm mt-2'>Login</button>
      </div>
      
      </form>
      </div>
      

      
    
    </div>
  )
}

 export default LogIn

// import React from 'react'

// const LogIn = () => {
//   return (
//     <div>
//       <div className='p-4 container h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
//         <div className=''>
//           <h1 className='text-black'>Login <span className='text-blue-500'>Wanna Chat</span></h1>
//         </div>
//         <div>
//           <label>Username</label>
//           <div>
//             <span>
//             <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" xml:space="preserve"><path fill="#282D33" d="m18.964 39.486 3.114 2.537L6.355 61.317 3.242 58.78zM108.846 39.248l15.915 19.53-3.114 2.538-15.915-19.53z"/><path fill="#282D33" d="M124.772 127.782H3.228V58.583h4.016v65.183h113.512V58.583h4.016z"/><path fill="#282D33" d="m39.474 93.194 2.697 2.974-35.106 31.831-2.697-2.974zM88.522 93.197l35.11 31.826-2.697 2.975-35.11-31.826z"/><path fill="#282D33" d="M87.802 95.657H40.199L19.11 74.101V0h89.782v74.101l-21.09 21.556zm-45.913-4.015h44.225l18.764-19.179V4.017H23.126v68.446l18.763 19.179z"/><path fill="#282D33" d="M64.548 72.013c-13.063 0-23.688-10.549-23.688-23.516 0-12.964 10.626-23.512 23.688-23.512 7.128 0 13.807 3.139 18.324 8.612l-3.097 2.558c-3.753-4.547-9.303-7.153-15.228-7.153-10.848 0-19.673 8.745-19.673 19.495 0 10.752 8.825 19.5 19.673 19.5 4.328 0 8.431-1.364 11.864-3.944l2.412 3.212c-4.134 3.105-9.07 4.748-14.275 4.748z"/><path fill="#282D33" d="M60.633 60.049c-.001 0 0 0 0 0-.929 0-1.912-.146-2.922-.434-3.041-.869-5.34-3.394-6.148-6.754-1.09-4.524.594-9.536 4.392-13.079 3.325-3.098 7.857-3.748 11.076-3.748 2.697 0 4.714.449 4.798.469l2.114.478-.636 2.071c-.161.52-3.928 12.771-4.598 14.684-1.388 3.952-4.407 6.313-8.076 6.313zm6.397-19.998c-2.497 0-5.97.463-8.338 2.669-3.275 3.056-3.814 6.757-3.226 9.201.473 1.963 1.692 3.36 3.347 3.832.65.186 1.263.28 1.819.28 2.49 0 3.705-1.973 4.285-3.628.477-1.356 2.703-8.549 3.855-12.282a21.628 21.628 0 0 0-1.742-.072z"/><path fill="#282D33" d="M73.686 59.837c-2.044 0-3.935-.698-5.44-2.057-3.11-2.806-.969-12.295.584-17.701l3.859 1.108c-1.72 5.996-2.536 12.504-1.713 13.653 1.489 1.338 3.39 1.078 4.712.617 3.032-1.055 6.506-4.528 7.283-9.13.561-3.326-.098-8.342-6.423-13.344l2.49-3.15c8.282 6.55 8.5 13.564 7.893 17.163-.93 5.506-5.01 10.545-9.923 12.255a10.099 10.099 0 0 1-3.322.586z"/><g><path fill="#282D33" d="M86.428 95.657H41.573L4.743 60.165l2.786-2.892 35.664 34.369h41.615l35.664-34.369 2.787 2.892z"/></g></svg>
//             <input type='text' placeholder='Enter Email'/>
//             </span>
          
//           </div>
          
//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default LogIn
