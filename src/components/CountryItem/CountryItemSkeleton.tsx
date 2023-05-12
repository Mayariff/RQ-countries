import {ImageListItem, ImageListItemBar, Skeleton} from "@mui/material";

const CountryItemSkeleton = () => {
    return (
        <ImageListItem>
            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={'100%'}/>
            <ImageListItemBar
                title={'Загрузка...'}
            />
        </ImageListItem>
    );

};

export default CountryItemSkeleton;