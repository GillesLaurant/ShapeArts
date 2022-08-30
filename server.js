// Imports
require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");

// Controllers
const appController = require("./controllers/app.controller");
const userController = require("./controllers/user.controller");
const editUserController = require("./controllers/editUser.controller");

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static("static"));

app.get("/*", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const httpServer = createServer(app);

console.log(process.env);
// Instantiate server
const io = new Server(httpServer, {
  cors: {
    origin:
      process.env.NODE_ENV !== "production"
        ? [process.env.CLIENT_HOST, process.env.SOCKET_UI_HOST]
        : "194.31.150.245/7721",
    methods: ["GET", "POST"],
    credentials: true,
  },
  serveClient: false,
});

// Socket middleware authenticated
io.use((socket, next) => {
  // console.log('SOCKET', socket);
  const clientKey = socket.handshake.headers["secure-header"];
  if (clientKey === process.env.CLIENT_KEY) {
    console.log("user connected", socket.id);

    next();
  } else {
    console.log("APP UNKNOW", clientKey);

    next(new Error());
  }
});

// Controllers socket
const onConnection = (socket) => {
  appController(io, socket);
  userController(io, socket);
  editUserController(io, socket);
};

// Connection socket
io.on("connection", onConnection);

// Listener server
httpServer.listen(
  process.env.NODE_ENV !== "production"
    ? process.env.SERVER_PORT
    : process.env.SERVER_PORT_PROD,
  () => {
    console.log(
      `SERVER listen => ${
        process.env.NODE_ENV !== "production"
          ? process.env.CLIENT_HOST
          : process.env.CLIENT_HOST_PROD
      }`
    );
  }
);
