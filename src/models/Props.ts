import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LoveToken } from "./LoveToken";
import { SerializedError } from "@reduxjs/toolkit";

export interface DataLoaderProps {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: LoveToken[] | LoveToken | undefined;
  emptyMessage: string;
  render: () => React.JSX.Element;
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export interface LabelsProps {
  labels: string[];
}
