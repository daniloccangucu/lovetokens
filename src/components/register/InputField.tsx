import { InputFieldProps } from "../../models/Types";

const InputField = ({ id, label, type, register, required, errors }: InputFieldProps) => (
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

export default InputField;
