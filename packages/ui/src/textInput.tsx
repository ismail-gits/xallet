import { JSX } from "react";

type TextInputType = {
  placeholder: string,
  onChange: (value: string) => void,
  label: string
}

export function TextInput({placeholder, onChange, label}: TextInputType):JSX.Element {
  return <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
    <input onChange={(e) => onChange(e.target.value)} type="text" id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder}/>
</div>
}