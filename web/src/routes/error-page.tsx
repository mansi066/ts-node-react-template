import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();

    if (!error || !isRouteErrorResponse(error)) {
        console.error("Unexpected error:", error);
        return <div>Something went wrong.</div>;
    }

    return (
        <div className="text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.data?.message || error.data || "Unknown error"}</i>
            </p>
        </div>
    );
};