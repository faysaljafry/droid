import React, { useContext } from "react";
import { AspectRatio, Box, Image } from "@chakra-ui/react";


import { SocketContext } from '../Context'
function VideoFeed() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  return (
    <Box>
      
      <div style={ {display: 'flex', flexDirection: 'row'}}>
        <div>
          <video playsInline muted ref={myVideo} autoPlay></video>
        </div>
        
      {callAccepted && !callEnded && (
            <div><video playsInline ref={userVideo} autoPlay /></div>
      )}
      </div>
    </Box>
  );
}

export default VideoFeed;
