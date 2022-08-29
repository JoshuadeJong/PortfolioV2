import React from 'react';
import Box from "@mui/material/Box";

import Project from "type/Project";
import {Center, MGrid} from "component/layout";
import {Image} from "@material-ui/icons";

type Props = {
    reverse?: boolean,
    imagePath?: string,
    project: Project,
    children?: React.ReactNode,
};

function ProjectContainer(props: Props) {
    const {reverse, imagePath, children} =  props

    const height = 400
    const imageCols = reverse ? [1, 8] : [6, 13]
    const childCols = reverse ? [7, 13] :  [1, 7]

    return (
        <MGrid row={12} column={12} height={`${height}px`}>

            {/* Image */}
            <Box sx={{
                display: {
                    sm: 'block',
                    xs: 'none',
                },
                gridRowStart: 1,
                gridRowEnd: 13,
                gridColumnStart: {
                    md: imageCols[0],
                    sm: 1,
                },
                gridColumnEnd: {
                    md: imageCols[1],
                    sm: 13,
                },
                zIndex: 100,
            }}
            >
                <Box
                    sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems: 'center',
                        minHeight:`${height}px`,
                    }}
                >
                    <Box
                        component='img'
                        src={imagePath || 'error.jpg'}
                        sx={{
                            maxWidth: '100%',
                            height: `${height}px`,
                            opacity: .50,
                            '&:hover': {
                                opacity: 1,
                                transition: '0.3s'
                            }
                        }}
                    />
                </Box>
            </Box>

            {/* Card */}
            <Box sx={{
                gridRowStart: {
                    sm: 2,
                    xs: 1,
                },
                gridRowEnd: {
                    sm: 12,
                    xs: 13
                },
                gridColumnStart: {
                    md: childCols[0],
                    sm: 3,
                    xs: 1,
                },
                gridColumnEnd: {
                    md: childCols[1],
                    sm: 11,
                    xs: 13,
                },
                zIndex: 200,
            }}
            >
                {/*<Box sx={{width: '100%', height: '100%', backgroundColor: 'green'}} />*/}
                {children}
            </Box>

        </MGrid>
    )
}

export default ProjectContainer;