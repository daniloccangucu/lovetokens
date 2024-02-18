import CategoryButton from './CategoryButton';
import { Category } from "../../models/Category";
import DataLoader from "../../utils/DataLoader";
import HeaderTwo from "../headers/HeaderTwo";
import { useFetchCategoriesQuery } from '../../store/api';
import { CategoriesSectionProps } from '../../models/Types';

function CategoriesSection({ selectedCategories, handleCategorySelect }: CategoriesSectionProps) {
    const { data: categories = [], isLoading: categoriesLoading, error: categoriesError } = useFetchCategoriesQuery();

    return (
        <DataLoader
            isLoading={categoriesLoading}
            error={categoriesError}
            data={categories}
            emptyMessage="There are no categories to be displayed"
            render={() => (
                <section>
                    <HeaderTwo title="Categories:" />
                    <div>
                        {categories.map((category: Category, i) => (
                            <CategoryButton
                                key={`${category.name}-${i}`}
                                category={category.name}
                                selected={selectedCategories.includes(category.name)}
                                onClick={() => handleCategorySelect(category.name)}
                                size="large"
                            />
                        ))}
                    </div>
                </section>
            )}
        />
    );
}

export default CategoriesSection
