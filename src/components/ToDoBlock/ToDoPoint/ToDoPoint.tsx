import {toDoType} from "../../../types/api-types";
import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";

type propsType = {
    item: toDoType
    handleChange: (id: string, isChecked: boolean) => void
    done_items: string[]
}

const ToDoPoint = React.memo(({item, handleChange, done_items}: propsType) => {

    const labelId = `checkbox-list-label-${item.id}`;
    const isChecked = done_items.includes(item.id)
    const onChangeHandler = () => handleChange(item.id, !isChecked)

    return <ListItem sx={{padding: '0px 15px'}}>
        <ListItemButton dense sx={{padding: '0px 15px'}}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                    onChange={onChangeHandler}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.description}/>
        </ListItemButton>
    </ListItem>
})

export default ToDoPoint;