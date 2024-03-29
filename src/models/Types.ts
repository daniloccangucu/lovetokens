import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/query";
import { LoveToken } from "./LoveToken";
import {
  Action,
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

export interface CreateLoveTokenProps {
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  isLoading: boolean;
  createLoveToken: MutationTrigger<
    MutationDefinition<
      Partial<LoveToken>,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      LoveToken,
      "loveTokensApi"
    >
  >;
  successMessage: string;
  errorMessage: string;
  setCreateLoveTokenNotification: ActionCreatorWithPayload<
    {
      message: string;
      isSuccess: boolean;
      uri?: string | undefined;
    },
    "notification/setCreateLoveTokenNotification"
  >;
  clearCreateLoveTokenNotification: ActionCreatorWithoutPayload<"notification/clearCreateLoveTokenNotification">;
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export interface HeaderTwoProps {
  title: string;
  position?: string;
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

export interface NotificationBoxProps {
  message: string;
  to?: string;
  toMessage?: string;
}

export interface FormProps {
  onSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  children: ReactNode;
  isLoading: boolean;
  callback:
    | MutationTrigger<
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
      >
    | MutationTrigger<
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
          "loveTokensApi"
        >
      >;
  method?: string;
  successMessage: string;
  errorMessage: string;
  setNotification: SetNotificationAction;
  clearNotification: ClearNotificationAction;
  user?: {
    userName: string | null;
    userId: string | null;
  };
  tokenNumber?: number;
}

export type ClearNotificationAction =
  | ActionCreatorWithoutPayload<"notification/clearRegisterNotification">
  | ActionCreatorWithoutPayload<"notification/clearLoginNotification">
  | ActionCreatorWithoutPayload<"notification/clearCreateLoveTokenNotification">
  | ActionCreatorWithoutPayload<"notification/clearDeleteLoveTokenNotification">
  | ActionCreatorWithoutPayload<"notification/clearUpdateLoveTokenNotification">
  | ActionCreatorWithoutPayload<"notification/clearAddLoveTokenToListNotification">
  | ActionCreatorWithoutPayload<"notification/clearRemoveLoveTokenFromListNotification">
  | ActionCreatorWithoutPayload<"notification/clearDeleteUserNotification">;

export type SetNotificationAction =
  | ActionCreatorWithPayload<{
      message: string;
      isSuccess: boolean;
      uri?: string;
    }>
  | ((payload: {
      message: string;
      isSuccess: boolean;
      uri?: string;
    }) => Action<any>);

export interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  errors: FieldValues;
  options?: string[];
  defaultValue?: string | string[];
  onExitEditingMode?: () => void;
}

export interface FormNotificationProps {
  message: string;
  isSuccess: boolean;
}

export interface NavLinkProps {
  to: string;
  text: string;
}

export interface NavSectionProp {
  loggedUser: boolean;
}

export interface ButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  label: string;
  loadingText?: string;
  customClass?: {
    replace: boolean;
    code: string;
  };
  buttonId?: string;
}

export interface SubmitParams {
  callback: (data: any) => Promise<any>;
  method?: string;
  setNotification: (notification: {
    message: string;
    isSuccess: boolean;
    uri?: string;
  }) => void;
  successMessage: string;
  errorMessage: string;
  clearNotification: () => void;
  user?:
    | {
        userName: string | null;
        userId: string | null;
      }
    | User;
  tokenNumber?: number;
}

export interface CategoriesState {
  selectedCategories: string[];
}

export interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export interface SortSettings {
  sortOrder: "newest" | "oldest";
}

export interface AuthState {
  updateAuthStatus: boolean;
}

export interface DeletedButtonState {
  currentClickedButtonId: string | null;
}

export interface RootState {
  categories: CategoriesState;
  creationSort: SortState;
  notification: NotificationState;
  auth: AuthState;
  deletedButton: DeletedButtonState;
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
  createLoveToken: {
    message: string | null;
    isSuccess: boolean;
    uri?: string;
  };
  deleteLoveToken: {
    message: string | null;
    isSuccess: boolean;
    uri?: string;
  };
  updateLoveToken: {
    message: string | null;
    isSuccess: boolean;
    uri?: string;
  };
  addLoveTokenToList: {
    message: string | null;
    isSuccess: boolean;
  };
  removeLoveTokenFromList: {
    message: string | null;
    isSuccess: boolean;
  };
  deleteUser: {
    message: string | null;
    isSuccess: boolean;
  };
}

export interface Notification {
  message: string | null;
  isSuccess: boolean;
  uri?: string;
}

export interface User {
  userId: string | null;
  role: string | null;
  userName: string | null;
  token: string | null;
}

export interface UserLogin {
  email: string | null;
  password: string | null;
}

export interface UserRegister {
  userName: string | null;
  email: string | null;
  password: string | null;
}

export interface LoveTokenIdRequest {
  loveTokenId: string | null;
}

export interface AffectionListOrder {
  newOrder: string[];
}

export interface AffectionListGetResponse {
  message: string;
  affectionList: AffectionList;
}

interface AffectionList {
  _id: { $oid: string };
  user: { $oid: string };
  __v: number;
  loveTokens: { $oid: string }[];
}

export interface SectionLoveTokensPreview extends CategoriesState {}

export interface CategoriesSectionProps extends CategoriesState {
  handleCategorySelect: (category: string) => void;
}

export interface AddLoveTokenResponse {
  data: {
    success: boolean;
    affectionList: string[];
  };
}

export interface CreateLoveTokenResponse {
  message: string;
  loveToken: LoveToken;
  uri: string;
}

export interface DeleteLoveTokenResponse {
  data: { success: boolean; message: string };
}

export type MutationHook<TParams> = () => [
  (params: TParams) => Promise<any>,
  { isLoading: boolean }
];