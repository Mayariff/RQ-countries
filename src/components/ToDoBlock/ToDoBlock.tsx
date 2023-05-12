import React, {useCallback, useState} from 'react';
import {Button, CardActions, List, Typography} from "@mui/material";
import {ExpandLess} from "@mui/icons-material";
import ToDoPoint from "./ToDoPoint/ToDoPoint";
import {useGetToDo, useUpdateDoneItems} from "./ToDoQueries";
import {useGetCountry} from "../../pages";


type propsType = {
    handleIsOpen: (value: boolean) => void
}

const ToDoBlock = React.memo(({handleIsOpen}: propsType) => {

    const {data: toDoList} = useGetToDo()
    const {data: country} = useGetCountry()
    const {mutateAsync: changeIsDoneStatus} = useUpdateDoneItems((oldData, newData) => ({...oldData!, ...newData}))

    const [doneItems, setDoneItems] = useState(country!.done_items)

    const onClickHandler = () => handleIsOpen(false)
    const handleChange = useCallback(async (id: string, isChecked: boolean) => {
        try {
            await setDoneItems(prevValue => isChecked ? [...prevValue, id] : prevValue.filter((item) => item !== id))
            await changeIsDoneStatus({done_items: doneItems})
        } catch (e) {
            await setDoneItems(prevValue => !isChecked ? [...prevValue, id] : prevValue.filter((item) => item !== id))
        }
    }, [])


    return (<>
            <Typography component="h2" sx=
                {{paddingLeft: '16px'}}> {'Что мы успели сделать:'} </Typography>
            <List sx={{width: '100%', maxWidth: 550}}>
                {
                    toDoList!.map((item) => <ToDoPoint key={item.id} item={item}
                                                       handleChange={handleChange}
                                                       done_items={doneItems}/>)
                }
            </List>
            <CardActions>
                <Button
                    size="small"
                    startIcon={<ExpandLess/>}
                    onClick={onClickHandler}
                >
                    Свернуть
                </Button>
            </CardActions>
        </>
    );
});

export default ToDoBlock;