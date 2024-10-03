import React from 'react'
import { FaSearchPlus } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full'></input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white' ><FaSearchPlus className='w-6 h-6 outline-none'/></button>

    </form>
  )
}

export default SearchInput;
