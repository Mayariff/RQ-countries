import {Card, CardContent, CardMedia, Skeleton, Typography} from "@mui/material";


const CardSkeleton = () => {
    return (
        <Card sx={{width: '450px', height: '492px', borderRadius: 0}}>
            <CardMedia
                children={<Skeleton sx={{height: '280px'}} variant="rectangular"/>}
                sx={{height: 280}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Skeleton variant="rectangular"/>
                </Typography>
                <Typography gutterBottom component="div">
                    <Skeleton variant="rectangular" sx={{width: '276px', height: '30px', margin: '20px 0 0'}}/>
                </Typography>
                <Typography gutterBottom component="div">
                    <Skeleton variant="rectangular" sx={{width: '276px', height: '30px', margin: '20px 0 0'}}/>
                </Typography>
                <Typography gutterBottom component="div">
                    <Skeleton variant="rectangular" sx={{width: '276px', height: '30px', margin: '20px 0 0'}}/>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardSkeleton;