const button = document.getElementById("start-record");
const taskList = document.getElementById("task-list");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Sorry, your browser does not support the Web Speech API.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  button.addEventListener("click", () => {
    button.innerHTML='Stop Speaking';
    recognition.start();
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.trim();
    button.innerHTML='Start Speaking';
    addTask(transcript);
  });

  recognition.addEventListener("end", () => {
    console.log("Speech recognition stopped.");
  });
}

function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  taskList.appendChild(li);
}
