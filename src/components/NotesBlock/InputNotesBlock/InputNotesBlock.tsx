import React, {ChangeEventHandler, useState} from 'react';
import {Box, IconButton, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {usePostNote} from "../NotesQueries";


type propsType = {
    value: string
    changeValue: (value: string) => void
    disabled?: boolean
}

const InputNotesBlock = React.memo(({value, changeValue, disabled}: propsType) => {

    const [localError, setLocalError] = useState<string | null>(null)
    const {mutateAsync: addNote, isLoading} = usePostNote(
        (oldData, newData) => oldData.reverse().concat(newData))

    const onClickHandler = async () => {
        if (value.trim()) {
            await addNote({value})
            changeValue('')
        }
    }


    const changeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        if (e.currentTarget.value.trim().length < 61) {
            changeValue(e.currentTarget.value)
            setLocalError(null)
        } else {
            setLocalError('Превышено максимальное количество символов')
        }

    }
    return (
        <Box display="flex" alignItems="center" mb={2}>
            <TextField
                label={localError ? localError : "Добавь заметки о стране"}
                variant="outlined"
                value={value}
                onChange={changeHandler}
                fullWidth
                disabled={disabled || isLoading}
                inputProps={{
                    'data-testid': 'input',
                }}
                error={!!localError}
            />
            <IconButton
                color="primary"
                aria-label="add"
                onClick={onClickHandler}
                size="small"
                disabled={disabled || !value.trim() || isLoading || !!localError}
                data-testid="add"
            >
                <AddIcon/>
            </IconButton>
        </Box>
    );
});

export default InputNotesBlock;