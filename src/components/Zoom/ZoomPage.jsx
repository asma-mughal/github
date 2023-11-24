import React,{useEffect, useState} from 'react';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
const ZoomPage = () => {
    const [meetingJoined, setMeetingJoined] = React.useState(false);
    const client = ZoomMtgEmbedded.createClient();

    let authEndpoint = 'http://localhost:4000'
    let sdkKey = 'y_aZp_04TCqkc9MCZv5OQ'
    let meetingNumber = '87223638743'; // Update with the actual meeting number: 87223638743
    let passWord = '852e9b'; // Update with the actual passcode: 852e9b
    let role = 0
    let userName = 'React'
    let userEmail = ''
    let registrantToken = ''
    let zakToken = ''
    let leaveUrl = 'http://localhost:3000'

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    }).then(res => res.json())
    .then(response => {
      startMeeting(response.signature)
    }).catch(error => {
      console.error(error)
    })
  }

  function startMeeting(signature) {

    let meetingSDKElement = document.getElementById('meetingSDKElement');

    client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: 'en-US',
      customize: {
        meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button');
              }
            }
          ]
        }
      }
    });

    client.join({
      signature: signature,
    	sdkKey: sdkKey,
    	meetingNumber: meetingNumber,
    	password: passWord,
    	userName: userName,
      userEmail: userEmail,
      tk: registrantToken,
      zak: zakToken
    })
  }

  return (
    <div>
    <h1>Zoom Integration</h1>
    <main>
        <h1>Zoom Meeting SDK Sample React</h1>
 <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        <button onClick={getSignature}>Join Meeting</button>
      </main>
  </div>
  )
}

export default ZoomPage
