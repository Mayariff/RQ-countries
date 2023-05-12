import {useNavigate} from "react-router-dom";
import {Box, Button, IconButton} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {pageRoutes} from "../Routes";
import {useScroll} from "../utils/hooks";
import {CardItem, CardSkeleton} from "../components";
import {useGetCountry} from "./pagesQueries";


const CountryPage = () => {

    const navigate = useNavigate()
    const resetError = () => navigate(pageRoutes.countries)
    const {isLoading, isError, data} = useGetCountry()
    const {scrollRef, makeScrollHandler} = useScroll()


    if (isError) return <Box sx={{color: 'white'}}>
        <Box component="h2">Произошла ошибка,</Box>
        не расстраивайтесь и
        <Button onClick={resetError}>Вернитесь на главную</Button>
    </Box>


    return (
        <Box ref={scrollRef}>
            <IconButton sx={{position: 'fixed', top: 8, left: 8, padding: '4px'}}
                        onClick={() => navigate(pageRoutes.countries, {replace: true})}>
                <ArrowBackOutlinedIcon fontSize={'large'}/>
            </IconButton>
            {
                isLoading ? <CardSkeleton/> : <CardItem makeScrollHandler={makeScrollHandler} data={data}/>
            }
        </Box>

    );
};

export default CountryPage;