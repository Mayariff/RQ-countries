import React, {ReactNode, useCallback, useState} from 'react';
import {List, Typography} from "@mui/material";
import Btn from "./Btn/Btn";

type propsType = {
    title: string
    btnTitle?: string
    children: ReactNode
    scrollHandler: () => void
}

const PointContainer = React.memo(({title, btnTitle, children, scrollHandler}: propsType) => {

    const [isOpen, setIsOpen] = useState(false)

    const changeIsOpen = useCallback(() => {
        scrollHandler()
        setIsOpen(prev => !prev)
    }, [])
    return (<>{isOpen && <>
        <Typography component="h2" sx={{paddingLeft: '16px'}}> {title} </Typography>
        <List sx={{width: '100%', maxWidth: 550}}>
            {children}
        </List>
    </>
    }
        <Btn isOpen={isOpen} changeIsOpen={changeIsOpen} startTitle={btnTitle}/>
    </>)

})

export default PointContainer;