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

const filterSelectedLabels = (labels: (string | boolean)[]) => {
  return labels.filter((label) => label !== false);
};

export const convertSelectedLabelToBoolean = (
  defaultValue: string[],
  categoryIndex: number,
  option: string,
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  const isSelected = defaultValue && defaultValue.includes(option);
  if (isSelected && categoryIndex === defaultValue.length) {
    setCategoryIndex(categoryIndex + 1);
  }
  return isSelected;
};

export const handleFormSubmission = async (
  {
    callback,
    method,
    setNotification,
    clearNotification,
    successMessage,
    errorMessage,
    user,
    tokenNumber,
  }: SubmitParams,
  data: any
) => {
  try {
    if (user) {
      data = { ...data, createdBy: { ...user } };
    }
    if (data.labels) {
      const selectedLabels = filterSelectedLabels(data.labels);
      data.labels = selectedLabels;
    }
    let result;
    if (tokenNumber) {
      if (method === "PUT") {
        result = await callback({
          tokenNumber,
          updatedLoveToken: { labels: data.labels, phrase: data.phrase },
          jwtToken: data.createdBy.token,
        });
      } else if (method === "DELETE") {
      }
    } else {
      result = await callback(data);
    }
    if (result.error) {
      if (result.error.data.error) {
        throw new Error(result.error.data.error);
      }
      throw new Error(result.error);
    }
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
    }
    setNotification(
      result.data.uri
        ? { message: successMessage, isSuccess: true, uri: result.data.uri }
        : { message: successMessage, isSuccess: true }
    );
    setTimeout(() => {
      clearNotification();
    }, 5000);
  } catch (err) {
    const errorObject = err as Error;
    setNotification({
      message: errorObject.message || errorMessage,
      isSuccess: false,
    });
    setTimeout(() => {
      clearNotification();
    }, 5000);
  }
};

export const setUserInLocalStorage = (
  userId: string,
  role: string,
  username: string
) => {
  localStorage.setItem("LTuserId", userId);
  localStorage.setItem("LTuserRole", role);
  localStorage.setItem("LTuserName", username);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("LTuserId");
  localStorage.removeItem("LTuserRole");
  localStorage.removeItem("LTuserName");
  localStorage.removeItem("token");
};

export const isUserLoggedIn = () => {
  const userId = localStorage.getItem("LTuserId");
  return userId !== null && userId !== undefined;
};

export const getUserFromLocalStorage = () => {
  const userId = localStorage.getItem("LTuserId");
  const role = localStorage.getItem("LTuserRole");
  const userName = localStorage.getItem("LTuserName");
  const token = localStorage.getItem("token");

  if (!userId || !role || !userName || !token) {
    return null;
  }

  return {
    userId: userId,
    role: role,
    userName: userName,
    token: token,
  };
};
