import React, {useCallback, useState} from 'react';
import {Box, Skeleton} from "@mui/material";
import InputNotesBlock from "./InputNotesBlock/InputNotesBlock";
import NoteList from "./NoteList/NoteList";
import {useGetNotes} from "./NotesQueries";
import {PointContainer} from "../PointContainer";


type propsType = {
    scrollHandler: () => void
}

const NotesBlock = React.memo(({scrollHandler}: propsType) => {

    const [noteName, setNoteName] = useState('');
    const {isLoading, isError} = useGetNotes()

    const changeHandler = useCallback((value: string) => setNoteName(v => value), [])

    return (<PointContainer title={'Оставь свои заметки о стране:'} btnTitle={'Заметки о путешествиях'}
                            scrollHandler={scrollHandler}>

            <Box sx={{display: "flex", flexDirection: 'column', padding: '20px 30px 0px'}}>
                <InputNotesBlock value={noteName} changeValue={changeHandler} disabled={isLoading || isError}/>
                {isLoading ?
                    <Skeleton variant="rectangular" sx={{height: '30px', marginTop: '10px'}}/>
                    : <NoteList/>}
            </Box>
        </PointContainer>
    );
});

export default NotesBlock;