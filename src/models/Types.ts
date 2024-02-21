import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/query";
import { LoveToken } from "./LoveToken";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  SerializedError,
} from "@reduxjs/toolkit";
import { Category } from "./Category";
import { ReactNode } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export interface DataLoaderProps {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: LoveToken[] | LoveToken | Category[] | undefined;
  emptyMessage?: string;
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

export interface FormProps {
  onSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  children: ReactNode;
  isLoading: boolean;
  callback: MutationTrigger<
    MutationDefinition<
      any,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      any,
      "userApi"
    >
  >;
  successMessage: string;
  errorMessage: string;
  setNotification: ActionCreatorWithPayload<{
    message: string;
    isSuccess: boolean;
  }>;
  clearNotification: ClearNotificationAction;
}

type ClearNotificationAction =
  | ActionCreatorWithoutPayload<"notification/clearRegisterNotification">
  | ActionCreatorWithoutPayload<"notification/clearLoginNotification">;

export interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  errors: FieldValues;
}

export interface FormNotificationProps {
  message: string;
  isSuccess: boolean;
}

export interface SubmitParams {
  callback: (data: any) => Promise<any>;
  setNotification: (notification: {
    message: string;
    isSuccess: boolean;
  }) => void;
  successMessage: string;
  errorMessage: string;
  clearNotification: () => void;
}

export interface CategoriesState {
  selectedCategories: string[];
}

export interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export interface NotificationState {
  register: {
    message: string | null;
    isSuccess: boolean;
  };
  login: {
    message: string | null;
    isSuccess: boolean;
  };
}

export interface Notification {
  message: string | null;
  isSuccess: boolean;
}

export interface AuthState {
  updateAuthStatus: boolean;
}

export interface SectionLoveTokensPreview extends CategoriesState {}

export interface CategoriesSectionProps extends CategoriesState {
  handleCategorySelect: (category: string) => void;
}

export interface RootState {
  categories: CategoriesState;
  creationSort: SortState;
  notification: NotificationState;
  auth: AuthState;
}

export interface SortSettings {
  sortOrder: "newest" | "oldest";
}