const socket = io();
const form = document.getElementById("chat-form");
const messageInput = document.getElementById("message");
const nameInput = document.getElementById("name");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = messageInput.value.trim();
  const name = nameInput.value.trim();

  if (msg && name) {
    socket.emit("chat message", { name, msg });
    messageInput.value = "";
  }
});

socket.on("chat message", ({ name, msg }) => {
  const p = document.createElement("p");
  const safeName = escapeHTML(name);
  const safeMsg = escapeHTML(msg);
  const time = new Date().toLocaleTimeString();

  p.innerHTML = `<strong>${safeName}</strong> ${safeMsg}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
});

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
