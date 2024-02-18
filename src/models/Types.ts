import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LoveToken } from "./LoveToken";
import { SerializedError } from "@reduxjs/toolkit";
import { Category } from "./Category";

export interface DataLoaderProps {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: LoveToken[] | LoveToken | Category[] | undefined;
  emptyMessage: string;
  render: () => React.JSX.Element;
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export interface HeaderTwoProps {
  title: string;
}

export interface LabelsProps {
  labels: string[];
}

export interface CategoryButtonProps {
  category: string;
  selected: boolean;
  onClick: () => void;
  size: string;
}

export interface CategoriesState {
  selectedCategories: string[];
}

export interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export interface SectionLoveTokensPreview extends CategoriesState {}

export interface CategoriesSectionProps extends CategoriesState {
  handleCategorySelect: (category: string) => void;
}

export interface RootState {
  categories: CategoriesState;
  creationSort: SortState;
}
