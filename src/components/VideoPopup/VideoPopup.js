import React from 'react';
import ModalVideo from 'react-modal-video';
import useGlobalContext from '../../hooks/useGlobalContext';

const VideoPopup = ({videoId}) => {
    const { isVideoOpen, setIsVideoOpen} = useGlobalContext();
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isVideoOpen}
                videoId={videoId} onClose={() => setIsVideoOpen(false)} />
        </>
    );
};

export default VideoPopup;