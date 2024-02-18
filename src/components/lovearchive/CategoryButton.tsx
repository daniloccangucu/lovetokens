import { CategoryButtonProps } from "../../models/Types";

function CategoryButton({ category, selected, onClick, size }: CategoryButtonProps) {
    const buttonClasses = selected ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700';
    const buttonSizeClasses = size === 'small' ? 'px-2 py-1 text-xs' : 'px-4 py-2';

    return (
        <button
            onClick={onClick}
            className={`mr-2 mb-2 rounded-full ${buttonSizeClasses} ${buttonClasses}`}
        >
            {category}
        </button>
    );
}

export default CategoryButton;