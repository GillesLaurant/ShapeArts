// Imports
require("dotenv").config();
const app = require("express")();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const appController = require("./controllers/app.controller");
const userController = require("./controllers/user.controller");
const editUserController = require("./controllers/editUser.controller");

app.use(cors());
// Instantiate server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // origin: [process.env.CLIENT_HOST, process.env.SOCKET_UI_HOST],
    methods: ["GET", "POST"],
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });

// Socket middleware authenticated
io.use((socket, next) => {
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
server.listen(process.env.SERVER_PORT, () => {
  console.log(`SERVER listen => ${process.env.SERVER_PORT}`);
});
