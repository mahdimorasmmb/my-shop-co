import React from 'react'


type Props = {
    listItems: Array<Size>;
  };

const SizeRadioButton = ({listItems}:Props) => {
  return (
   
       <div className="">
      <p className='mb-4'>رنگ کورد نظر انتخاب کنید</p>
      <div className="flex">
        {listItems.map((size) => (
          <div key={size.size_id.id}>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" value={size.size_id.id} name="size" className="absolute opacity-0 h-0 w-0 peer" />
              <span className=" p-2 h-8 peer-checked:text-white peer-checked:bg-black  rounded mr-2 border-gray-300 border-2 flex items-center justify-center">{size.size_id.short_name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default SizeRadioButton
