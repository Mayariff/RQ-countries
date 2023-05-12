import {useRouteError} from "react-router-dom";

type ErrorResponse = {
    data: any;
    status: number;
    statusText: string;
    message?: string;
};

const errorCheck = (error: any): error is ErrorResponse => {
    return "data" in error && "status" in error && "statusText" in error;
};


const ErrorPage =() =>{
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {errorCheck(error) && <p>
                <i>{error.statusText || error.message}</i>
            </p>}
        </div>
    );
}

export default  ErrorPage ;