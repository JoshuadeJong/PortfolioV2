import React from 'react';
import MediaSize from "./MediaSize";

function getMediaSize(): MediaSize {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width: width,
        height: height,
    }
}

export default  getMediaSize