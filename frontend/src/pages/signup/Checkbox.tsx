import React from 'react'

interface CheckboxProps {
    onCheckboxChange: (gender: string) => void; // Function that accepts a string and returns void
    selectedGender: string; // A string representing the gender, e.g., "male" or "female"
  }

const Checkbox:React.FC<CheckboxProps> = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender=="male"?"selected":""} ` }>
                <span className="label-text text-black ">Male</span>
                <input type="checkbox"  className="ml-2 checkbox border-black" 
                checked={selectedGender==="male"}
                onChange={()=>{onCheckboxChange("male")}}
                />
            </label>
        </div>
        <div className="form-control">
        <label className={`label cursor-pointer ${selectedGender=="female"?"selected":""}` }>
                <span className="label-text text-black ">Female</span>
                <input type="checkbox"  className="ml-2 checkbox border-black" 
               checked={selectedGender==="female"}
                onChange={()=>{onCheckboxChange("female")}}
                />
            </label>
        </div>

    </div>
  )
}

export default Checkbox
