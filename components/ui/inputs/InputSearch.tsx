import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { register } from "module";
import React from "react";
import { UseFormReturn } from "react-hook-form";

type TInputSearch = {
  form: UseFormReturn<any, any>;
  placeholder: string;
  name: string;
};

const InputSearch = ({ form, name, placeholder }: TInputSearch) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon
          icon={faSearch}
          className="w-4 text-gray-400 font-bold"
        />
      </div>
      <input
        type="text"
        className="focus:outline-none focus:ring-2 w-full shadow-xl focus:ring-slate-400 focus:border-transparent pl-10 pr-3 py-2 rounded-full bg-gray-200"
        placeholder={placeholder}
        {...form.register(name)}
      />
    </div>
  );
};

export default InputSearch;
