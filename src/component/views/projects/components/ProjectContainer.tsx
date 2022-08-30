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

    const [imageWidth, setImageWidth] = React.useState(0)
    const imageContainerRef = React.useRef<HTMLDivElement>()
    React.useEffect(() => {
        const updateWindowDimensions = () => {
            if (imageContainerRef.current) {
                console.log(imageContainerRef.current?.offsetWidth)
                setImageWidth(imageContainerRef.current?.offsetWidth)
            }
        }
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions)
        return () => window.removeEventListener('resize', updateWindowDimensions)

    })

    const height = 400
    const imageCols = reverse ? [1, 8] : [6, 13]
    const childMdCols = reverse ? [7, 13] :  [1, 7]
    const childSmCols = reverse ? [4, 12] : [2, 10]

    return (
        <MGrid row={12} column={12} height={`${height}px`}>

            {/* Image */}
            <Box
                sx={{
                    gridRowStart: 1,
                    gridRowEnd: 13,
                    gridColumnStart: {
                        md: imageCols[0],
                        xs: 1,
                    },
                    gridColumnEnd: {
                        md: imageCols[1],
                        xs: 13,
                    },
                    zIndex: 100,
                 }}
            >
                <Box
                    ref={imageContainerRef}
                    sx={{
                        textAlign: {
                            sm: reverse ? 'left' : 'right',
                            xs: 'unset'
                        },
                    }}
                >
                    <Box
                        component='img'
                        src={imagePath || 'error.jpg'}
                        sx={{
                            height: `${height}px`,
                            maxWidth: '100%',
                            objectFit: 'cover',
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
                gridRowStart: 2,
                gridRowEnd: 12,
                gridColumnStart: {
                    md: childMdCols[0],
                    sm: childSmCols[0],
                    xs: 2
                },
                gridColumnEnd: {
                    md: childMdCols[1],
                    sm: childSmCols[1],
                    xs: 12
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