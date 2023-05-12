import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {grey} from "@mui/material/colors";
import {PointContainer} from "../PointContainer";
import {useGetCountry} from "../../pages";
import {selectDataType} from "../../types";


type propsType = {
    scrollHandler: () => void
}

const MoreInfoBlock = React.memo(({scrollHandler}: propsType) => {

    const {data} = useGetCountry()

    const countryInfoArray:selectDataType[] = [
        {field: 'Столица', value: data?.capital || '-'},
        {field: 'Численность', value: data?.population || '-'},
        {field: 'Процент от населения Земли', value: data?.world_population_percent || '-'},
    ]

    return (
        <PointContainer title={'Информация о стране:'} btnTitle={'О стране'} scrollHandler={scrollHandler}>
            {
                countryInfoArray.map(item => <ListItem key={item.value} sx={{padding: '4px 30px'}}>
                        <ListItemIcon>
                            <SendIcon fontSize={'small'} color={'primary'}/>
                        </ListItemIcon>
                        <ListItemText
                            secondaryTypographyProps={{color: grey[900]}}
                            secondary={`${item.field} : ${item.value} ${item.field.indexOf('Процент') > -1 ? '%' : ''}`}/>
                    </ListItem>
                )
            }
        </PointContainer>
    );
})

export default MoreInfoBlock;