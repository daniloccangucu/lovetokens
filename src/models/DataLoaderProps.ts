import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LoveToken } from "./LoveToken";
import { SerializedError } from "@reduxjs/toolkit";

export interface DataLoaderProps {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: LoveToken[];
  emptyMessage: string;
  render: () => React.JSX.Element;
}
