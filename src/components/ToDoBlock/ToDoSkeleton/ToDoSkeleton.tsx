import React from 'react';
import {Box, Skeleton} from "@mui/material";

const ToDoSkeleton = () => {
    return (
        <Box width="100%">
            <Box mb={1}>
                <Skeleton variant="text" animation="wave" />
            </Box>
            <Box mb={1}>
                <Skeleton variant="text" animation="wave" />
            </Box>
            <Box mb={1}>
                <Skeleton variant="text" animation="wave" />
            </Box>
            <Box mb={1}>
                <Skeleton variant="text" animation="wave" />
            </Box>
            <Box mb={1}>
                <Skeleton variant="text" animation="wave" />
            </Box>
            <Box mb={1}>
                <Skeleton variant="text" animation="wave" />
            </Box>
        </Box>
    );
};

export default ToDoSkeleton;