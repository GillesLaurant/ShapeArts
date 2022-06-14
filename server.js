// Imports
require("dotenv").config();
const app = require("express")();
const http = require("http");
const { Server } = require("socket.io");

const cors = require("cors");
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
  // serveClient: false,
});

// Initialisation header
io.engine.on("initial_headers", (headers, req) => {
  headers["set-cookie"] = "JWTCookie=";
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.use((socket, next) => {
  const clientKey = socket.handshake.auth.key;
  if (clientKey !== process.env.CLIENT_KEY) {
    console.log("APP UNKNOW", clientKey);
    socket.emit("connect_error", { error: new Error("APP NOT REGISTER") });
    next(console.log("APP NOT REGISTER"));
  }
  next();
});

// Controllers socket
const onConnection = (socket) => {
  console.log(socket.id, socket.rooms);
};

// Connection socket
io.on("connection", onConnection);

// Listener server
server.listen(process.env.SERVER_PORT, () => {
  console.log(`SERVER listen => ${process.env.SERVER_PORT}`);
});
