import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-0.5 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt='user avatar'/>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-black'>Jeshwanth Leo</p>
                <span className='text-xl'>😀</span>

            </div>

        </div>
    </div>

    <div className='divider divider-neutral m-0 py-0'>

    </div>
    
    </>
  )
}
 
export default Conversation
