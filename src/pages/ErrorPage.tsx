import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError() as { status: number; message: string }
    return (
        <div>
        <h1>{error.status}</h1>
        <p>{error.message}</p>
        </div>
    );
};
export default ErrorPage;