// step-1
const lc = new RTCPeerConnection();
const dc = lc.createDataChannel('channel');
dc.onmessage = e => console.log("Just got a message", e.data);
dc.onopen = e => console.log("Connection opened!");
lc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP", JSON.stringify(lc.localDescription));
lc.createOffer().then(o => lc.setLocalDescription(o)).then(a => console.log("set successfully!"));

// setp-3
const answer = "<peer-b-answer-sdp>";
lc.setRemoteDescription(answer);
dc.send("Yo peer B whats up");