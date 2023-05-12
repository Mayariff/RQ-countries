import React from 'react';
import {Button, CardActions} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

type propsType = {
    isOpen: boolean
    changeIsOpen: () => void
    startTitle?: string
}

const Btn = React.memo(({isOpen, changeIsOpen, startTitle = 'Открыть', ...restProps}: propsType) => {
    return (
        <CardActions>
            <Button
                size="small"
                startIcon={isOpen ? <ExpandLess/> : <ExpandMore/>}
                onClick={changeIsOpen}
                {...restProps}
            >
                {isOpen ? 'Свернуть' : startTitle}

            </Button>
        </CardActions>
    );
});
export default Btn;