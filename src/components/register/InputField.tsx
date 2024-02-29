import { useState } from "react";

import { InputFieldProps } from "../../models/Types";
import { convertSelectedLabelToBoolean } from "../../utils/storeUtils";

const InputField = ({ id, label, type, register, required, errors, options, defaultValue }: InputFieldProps) => {
    let inputElement;

    const [categoryIndex, setCategoryIndex] = useState<number>(0);

    if (options && options.length > 0) {
        inputElement = (
            <>
                {options.map((option, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            id={`${id}-${index}`}
                            type={type}
                            value={option}
                            {...register(`${id}.${index}`)}
                            defaultChecked={convertSelectedLabelToBoolean(defaultValue as string[], categoryIndex, option, setCategoryIndex)}
                            className="mr-2"
                        />
                        <label htmlFor={`${id}-${index}`}>{option}</label>
                    </div>
                ))}
            </>
        );
    } else {
        inputElement = (
            <input
                type={type}
                id={id}
                {...register(id, { required })}
                className={`h-10 px-3 py-2 mt-1 block w-full shadow-sm sm:text-sm rounded-md focus:outline-none ${errors[id] ? 'border-red-500' : 'border-gray-300'}`}
                defaultValue={defaultValue}
            />
        );
    }

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block">{label}:</label>
            {inputElement}
            {errors[id] && <span className="text--darker-ce-soir text-sm">{label} is required</span>}
        </div>
    );
};

export default InputField;
