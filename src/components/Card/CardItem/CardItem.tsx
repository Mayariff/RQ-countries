import React, {useCallback, useState} from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

import {countryType} from "../../../types/api-types";
import {usePrefetchToDo} from "../CardQueris";

import NotesBlock from "../../NotesBlock";
import {ClosedToDo, ToDoBlock} from "../../ToDoBlock";
import {MoreInfoBlock} from "../../MoreInfoBlock";

import {LoremImage} from "../../../assets";


type propsType = {
    makeScrollHandler: () => void
    data: countryType
}

const CardItem = React.memo(({makeScrollHandler, data}: propsType) => {

    const prefetchToDo = usePrefetchToDo()

    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = useCallback((value: boolean) => {
        setIsOpen(prev => value)
        makeScrollHandler()
    }, [])

    return (<Card sx={{minWidth: 450, borderRadius: 0}} onMouseEnter={prefetchToDo} >
            <CardMedia
                sx={{height: 280}}
                image={data?.image || LoremImage}
                title={data!.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                            sx={{display: 'flex', justifyContent: 'space-between'}}>
                    {data!.title}
                    {data!.country_code &&
                        <img src={`https://www.countryflagicons.com/SHINY/32/${data!.country_code}.png`}
                             alt={data!.title}/>}
                </Typography>
            </CardContent>
            {isOpen ? <ToDoBlock handleIsOpen={onClickHandler} /> : <ClosedToDo handleIsOpen={onClickHandler}/>}
            <MoreInfoBlock scrollHandler={makeScrollHandler}/>
            <NotesBlock scrollHandler={makeScrollHandler}/>
        </Card>
    );
});

export default CardItem;