import React from 'react'
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";


export default function Picker({text, options, value,onChange, placeholder, id}) {
  return (
    <div>
    <div className="flex items-center space-x-2 text-white">
      <GlobeIcon width={30} height={30} className="mb-1" />
      <p>{text}</p>

    </div>
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isClearable
      placeholder={placeholder}
      className="text-black"
      id={id}
    />
  </div>
  )
}
