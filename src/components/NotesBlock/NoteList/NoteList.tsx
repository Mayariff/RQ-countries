import {Box, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import NoteListItem from "./NoteListItem";
import {useGetNotes} from "../NotesQueries";

const NoteList = () => {

    const {data} = useGetNotes()

    return (<Box>
        {!!data?.length ? data.map((item, idx) => <NoteListItem key={item.id || idx} item={item}/>)
            : <Typography gutterBottom component="div"
                          sx={{height: '30px', color: grey[600]}}>
                Заметок нет... Напиши первым!
                <PanToolAltOutlinedIcon/>
            </Typography>
        }
    </Box>)
}


export default NoteList;