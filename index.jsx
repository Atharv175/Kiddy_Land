import React from "react";
import { useParams } from "react-router-dom"; 
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const RoomPage=()=>{
    const {roomId}=useParams();
    const myMeeting=async(element)=>{
    const appID=1879295622 ;
    const serverSecret="442b45291c9f08455c387e142a36e2ff";
    const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Atharv Patel");
    const zc=ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost:3000/room/${roomId}`
            }

        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton:false,
    });


};
    return <div>
        <div ref={myMeeting}/>
    </div>;
};
export default RoomPage;