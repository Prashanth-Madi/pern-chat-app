import React from 'react'

const Checkbox = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-black ">Male</span>
                <input type="checkbox"  className="ml-2 checkbox border-black" />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text text-black ">Female</span>
                <input type="checkbox"  className="ml-2 checkbox border-black" />
            </label>
        </div>

    </div>
  )
}

export default Checkbox
