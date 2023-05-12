import React from 'react';
import {countryType} from "../../types/api-types";
import {IconButton, ImageListItem, ImageListItemBar} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {pathToUrl} from "../../utils/routing";
import {pageRoutes} from "../../Routes";
import {LoremImage} from "../../assets";

type propsType = {
    country: countryType
}


const CountryItem = React.memo(({country}: propsType) => {

    const navigate = useNavigate()
    const {id, title, country_code, image} = country
    const img = image ? image : LoremImage

    return (
        <ImageListItem onClick={() => navigate(pathToUrl(pageRoutes.country, {id}))}
                       sx={{filter: 'sepia(.35)', '&:hover': {filter: 'sepia(0)'}}}>
            <img
                src={`${img}?w=161&fit=crop&auto=format`}
                srcSet={`${img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={title}
                loading="lazy"
            />
            <ImageListItemBar
                title={title}
                actionIcon={
                    country_code && <IconButton
                        sx={{color: 'rgba(255, 255, 255, 0.4)'}}
                        aria-label={`info about ${title}`}
                    >
                        <img src={`https://www.countryflagicons.com/FLAT/24/${country_code}.png`}/>
                    </IconButton>
                }

            />
        </ImageListItem>
    );
});

export default CountryItem;