import React from 'react';
import {Box, Button, IconButton, ImageList, ImageListItemBar} from "@mui/material";
import {deepOrange} from '@mui/material/colors';

import {useScroll, useShowScrollBtnUP} from "../utils/hooks";
import {CountryItem, CountryItemSkeleton} from "../components";
import {useLoadMoreCountries} from "./pagesQueries";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


const CountryListPage = () => {

    const {
        data: list,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError
    } = useLoadMoreCountries()

    const {scrollRef, makeScrollHandler} = useScroll()
    const showBtnUp = useShowScrollBtnUP()

    const onClickHandler = async () => {
        await fetchNextPage()
        makeScrollHandler()
    }

    const onClickUP = () => makeScrollHandler('up')


    return (<>
            <ImageListItemBar title={'Страны для путешествий'}
                              sx={{width: '100%', height: 60, zIndex: 1, position: 'fixed'}}
                              position={'top'}
            />
            <Box sx={{position: 'relative'}} pt={'70px'} ref={scrollRef}>
                <ImageList sx={{
                    width: 625,
                    minHeight: 500,
                    height: '100%',
                    overflow: 'auto',
                }}>
                    {isLoading && <>
                        <CountryItemSkeleton/>
                        <CountryItemSkeleton/>
                        <CountryItemSkeleton/>
                        <CountryItemSkeleton/>
                    </>
                    }
                    {list && list.pages.map((data, i) => (
                        <React.Fragment key={i}>
                            {data.data.map(c => <CountryItem key={c.id} country={c}/>)}
                        </React.Fragment>
                    ))}
                </ImageList>
                <Box mb={2} sx={{textAlign: 'center'}}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            backgroundColor: deepOrange[900],
                            '&:hover': {backgroundColor: deepOrange[800]},
                            '&:disabled': {backgroundColor: deepOrange[900], opacity: 0.4, color: 'white'},
                        }}
                        onClick={onClickHandler}
                        disabled={isLoading || isError || !hasNextPage || isFetchingNextPage}
                    >
                        {isFetchingNextPage || isLoading ? 'Загружаем...' : hasNextPage ? 'Загрузить еще' : 'Всё загружено'}
                    </Button>
                </Box>
                {showBtnUp && <IconButton
                    sx={{position: 'fixed', bottom: 8, right: '10%', padding: '4px', transform: 'rotate(90deg)'}}
                    onClick={onClickUP}>
                    <ArrowBackOutlinedIcon fontSize={'large'}/>
                </IconButton>
                }
            </Box>
        </>
    );
};

export default CountryListPage;


