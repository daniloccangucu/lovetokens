import { DataLoaderProps } from "../models/Types";
import { getErrorMessage } from "./utils";

function DataLoader({ isLoading, error, data, emptyMessage, render }: DataLoaderProps) {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {getErrorMessage(error)}</h2>;
    }

    if (!data) {
        return <h2>{emptyMessage}</h2>;
    }

    return render();
}

export default DataLoader;
