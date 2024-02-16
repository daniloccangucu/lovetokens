import { CategoryButtonProps } from "../../models/Props";

function CategoryButton({ category, selected, onClick }: CategoryButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`mr-2 mb-2 px-4 py-2 rounded-full ${selected ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
        >
            {category}
        </button>
    );
}

export default CategoryButton;
