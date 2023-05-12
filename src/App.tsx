import '@fontsource/roboto/500.css';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Box, Button} from "@mui/material";
import {grey} from '@mui/material/colors';
import {useQueryErrorResetBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from 'react-error-boundary';
import {useEffect} from "react";
import {pageRoutes} from "./Routes";


function App() {

    const {reset} = useQueryErrorResetBoundary()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
            if (!id) navigate(pageRoutes.countries)
        }, []
    )

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100wh',
            minHeight: '100vh',
            height: '100%',
            backgroundColor: grey[800],
            scrollBehavior: 'smooth'
        }}>
            <ErrorBoundary
                onReset={reset}
                fallbackRender={({resetErrorBoundary}) => (
                    <Box sx={{color: 'white'}}>
                        <Box component="h2">Произошла ошибка,</Box>
                        не расстраивайтесь и
                        <Button onClick={resetErrorBoundary}>Перезагрузите страницу</Button>
                    </Box>
                )}>
                <Outlet/>
            </ErrorBoundary>
        </Box>
    )
        ;
}

export default App;
