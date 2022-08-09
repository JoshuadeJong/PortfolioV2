import React from 'react';
import MediaSize from "./MediaSize";
import getMediaSize from "./getMediaSize";

function useMediaSize(): MediaSize {
    const [mediaSize, setMediaSize] = React.useState(useMediaSize());

    React.useEffect(() => {
        function handleResize() {
            setMediaSize(getMediaSize());
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return mediaSize;
}

export default useMediaSize