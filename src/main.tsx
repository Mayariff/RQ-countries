import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeMockAdapter} from "./API/mockServer/mockServer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {pageRoutes} from "./Routes";
import CountryListPage from "./pages/CountryListPage";
import CountryPage from "./pages/CountryPage";
import ErrorPage from "./pages/ErrorPage";


initializeMockAdapter();
const queryClient = new QueryClient();
const router = createHashRouter([
    {
        path: pageRoutes.main,
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: pageRoutes.countries,
                element: <CountryListPage/>,
                // children: [
                //     {
                //         path: pageRoutes.country,
                //         element: <CountryPage/>,
                //     },
                // ]
            },
            {
                path: pageRoutes.country,
                element: <CountryPage/>,
            },
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
);

