const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("chat message", ({ name, msg }) => {
    io.emit("chat message", { name, msg });
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
}); 