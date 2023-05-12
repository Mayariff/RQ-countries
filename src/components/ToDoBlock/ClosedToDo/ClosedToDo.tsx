import React from 'react';
import {Button, CardActions} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

type propsType = {
    handleIsOpen: (value: boolean) => void
}

const ClosedToDo = React.memo(({handleIsOpen}: propsType) => {

    const onClickHandler=()=>  handleIsOpen(true)

    return (
        <CardActions>
            <Button
                size="small"
                startIcon={<ExpandMore/>}
                onClick={onClickHandler}
            >
                Что мы успели сделать в стране
            </Button>
        </CardActions>
    );
});

export default ClosedToDo;