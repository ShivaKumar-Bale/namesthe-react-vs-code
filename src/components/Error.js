import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="max-w-2xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">OOPS!!!!</h1>
            <h2 className="text-2xl mb-4">Something went WRONG!!!</h2>
            <h3 className="text-lg text-gray-700">
                {err.status}: {err.statusText}
            </h3>
        </div>
    );
};

export default Error;
