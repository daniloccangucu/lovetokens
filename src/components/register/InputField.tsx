import { InputFieldProps } from "../../models/Types";

const InputField = ({ id, label, type, register, required, errors, options }: InputFieldProps) => {
    if (options && options.length > 0) {
        return (
            <div className="mb-4">
                <label className="block">{label}:</label>
                {options.map((option, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`${id}-${index}`}
                            value={option}
                            {...register(`${id}.${index}`)}
                            className="mr-2"
                        />
                        <label htmlFor={`${id}-${index}`}>{option}</label>
                    </div>
                ))}
                {errors[id] && <span className="text--darker-ce-soir text-sm">{label} is required</span>}
            </div>
        );
    } else {
        return (
            <div className="mb-4">
                <label htmlFor={id} className="block">{label}:</label>
                <input
                    type={type}
                    id={id}
                    {...register(id, { required })}
                    className={`h-10 px-3 py-2 mt-1 block w-full shadow-sm sm:text-sm rounded-md focus:outline-none ${errors[id] ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors[id] && <span className="text--darker-ce-soir text-sm">{label} is required</span>}
            </div>
        );
    }
};

export default InputField;