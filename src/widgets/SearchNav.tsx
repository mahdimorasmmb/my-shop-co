import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";

const SearchNav = () => {
  return (
    <div className='hidden md:flex'>
       <SearchIcon className="h-5 w-5 cursor-pointer opacity-75 transition hover:opacity-100 " />
      <input />
    </div>
  )
}

export default SearchNav
