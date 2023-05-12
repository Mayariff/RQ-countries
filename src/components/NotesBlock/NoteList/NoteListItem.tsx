import React from 'react';
import {Box, IconButton, ListItem, ListItemIcon, ListItemText, Skeleton} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {grey} from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import {countryNotesType} from "../../../types/api-types";
import {useDeleteNote} from "../NotesQueries";

type propsType = {
    item: countryNotesType
}

const NoteListItem = React.memo(({item}: propsType) => {

    const {
        mutate: deleteNote,
        isLoading
    } = useDeleteNote((oldData, deletedId) => oldData.reverse().filter(c => c.id !== deletedId))

    const onDelete = () => deleteNote(item.id!)

    return (
        <Box display="flex" alignItems="center">
            {isLoading ? <Skeleton variant="rectangular" sx={{width: '100%', height: '20px'}}/> :
                <ListItem sx={{padding: 0, margin: 0}}>
                    <ListItemIcon>
                        <SendIcon fontSize={'small'} color={'primary'}/>
                    </ListItemIcon>
                    <ListItemText
                        secondaryTypographyProps={{color: grey[900]}}
                        secondary={item.value}/>
                </ListItem>
            }
            <Box ml={1}>
                <IconButton
                    color="primary"
                    aria-label="delete"
                    size="small"
                    onClick={onDelete}
                    data-testid={`delete-${item.id}`}
                    disabled={isLoading}
                >
                    <DeleteIcon/>
                </IconButton>
            </Box>
        </Box>
    );
});

export default NoteListItem;