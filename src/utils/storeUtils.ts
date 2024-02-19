import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LoveToken } from "../models/LoveToken";

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
