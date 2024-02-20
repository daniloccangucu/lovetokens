import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { LoveToken } from "../models/LoveToken";
import { SubmitParams } from "../models/Types";

export function getErrorMessage(
  error: FetchBaseQueryError | SerializedError
): string {
  if ("status" in error && error.status === "FETCH_ERROR") {
    return error.error || "Unknown error occurred.";
  } else if ("message" in error) {
    return error.message || "Unknown error occurred.";
  } else {
    return "Unknown error occurred.";
  }
}

export const sortLoveTokens = (loveTokens: LoveToken[], sortOrder: string) => {
  return [...loveTokens].sort((a, b) => {
    const dateA = new Date(a.creationDate);
    const dateB = new Date(b.creationDate);

    return sortOrder === "oldest"
      ? dateA.getTime() - dateB.getTime()
      : sortOrder === "newest"
      ? dateB.getTime() - dateA.getTime()
      : 0;
  });
};

export const handleFormSubmission = async (
  {
    callback,
    setNotification,
    successMessage,
    errorMessage,
    clearNotification,
  }: SubmitParams,
  data: any
) => {
  try {
    const result = await callback(data);
    if (result.error) {
      if (result.error.data.error) {
        throw new Error(result.error.data.error);
      }
      throw new Error(result.error);
    }
    setNotification({ message: successMessage, isSuccess: true });
    let timeoutId: NodeJS.Timeout = setTimeout(() => {
      clearNotification();
    }, 4000);
    clearTimeout(timeoutId);
  } catch (err) {
    const errorObject = err as Error;
    setNotification({
      message: errorObject.message || errorMessage,
      isSuccess: false,
    });
  }
};
