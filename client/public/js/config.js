turnConfig = {
    iceServers: [
    {   
      urls: [ "stun:https://ec2-3-82-208-227.compute-1.amazonaws.com" ]
    }, 
    {   
      username: "jafri",   
      credential: "jafri1234!",   
      urls: [       
        "turn:3.82.208.227:3478?transport=udp",       
        "turn:3.82.208.227:3478?transport=tcp",       
       ]
     }
   ]
}