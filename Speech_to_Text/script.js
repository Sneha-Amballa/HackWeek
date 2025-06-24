const startBtn = document.getElementById("startBtn");
const transcriptArea = document.getElementById("transcript");

let mediaRecorder;
let socket;
let isRecording = false;

startBtn.onclick = async () => {
  if (!isRecording) {
    startBtn.textContent = "Stop Listening";
    transcriptArea.value = "";
    isRecording = true;
    startRecording();
  } else {
    startBtn.textContent = "Start Listening";
    isRecording = false;
    mediaRecorder.stop();
    socket.close();
  }
};

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  const socketUrl = "wss://api.deepgram.com/v1/listen";
  socket = new WebSocket(socketUrl, ["token", "d3657e844d5439fccc09b20cb7ff6e202dc2f8b7"]);

  socket.onopen = () => {
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0 && socket.readyState === 1) {
        socket.send(event.data);
      }
    };
    mediaRecorder.start(250);
  };

  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);
    if (data.channel?.alternatives[0]?.transcript) {
      transcriptArea.value += data.channel.alternatives[0].transcript + " ";
    }
  };
}
