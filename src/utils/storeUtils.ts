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
    clearNotification,
    successMessage,
    errorMessage,
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
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
    }
    setNotification({ message: successMessage, isSuccess: true });
    setTimeout(() => {
      clearNotification();
    }, 1000);
  } catch (err) {
    const errorObject = err as Error;
    setNotification({
      message: errorObject.message || errorMessage,
      isSuccess: false,
    });
    setTimeout(() => {
      clearNotification();
    }, 1000);
  }
};

export const setUserInLocalStorage = (userId: string, role: string) => {
  localStorage.setItem("LTuserId", userId);
  localStorage.setItem("LTuserRole", role);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("LTuserId");
  localStorage.removeItem("LTuserRole");
  localStorage.removeItem("token");
};

export const isUserLoggedIn = () => {
  const userId = localStorage.getItem("LTuserId");
  return userId !== null && userId !== undefined;
};

export const getUserFromLocalStorage = () => {
  return {
    id: localStorage.getItem("LTuserId"),
    role: localStorage.getItem("LTuserRole"),
  };
};
