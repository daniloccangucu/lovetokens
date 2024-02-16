import { DataLoaderProps } from "../models/Props";
import { getErrorMessage } from "./apiUtils";

function DataLoader({ isLoading, error, data, emptyMessage, render }: DataLoaderProps) {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {getErrorMessage(error)}</h2>;
    }

    if (!data || data.length === 0) {
        return <h2>{emptyMessage}</h2>;
    }

    return render();
}

export default DataLoader;
