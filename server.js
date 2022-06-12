// Imports
require("dotenv").config();
const app = require("express")();
const { createServer } = require("http");
const { Server } = require("socket.io");

// Instantiate server
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [process.env.CLIENT_HOST, process.env.SOCKET_UI_HOST],
    credentials: true,
  },
  // serveClient: false,
});

// Initialisation header
io.engine.on("initial_headers", (headers, req) => {
  headers["set-cookie"] = "JWTCookie=";
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Controllers socket
const onConnection = (socket) => {
  console.log(socket.id, socket.rooms);
};

// Connection socket
io.on("connection", onConnection);

// Listener server
httpServer.listen(process.env.SERVER_PORT, () => {
  console.log(`SERVER listen => ${process.env.SERVER_PORT}`);
});
