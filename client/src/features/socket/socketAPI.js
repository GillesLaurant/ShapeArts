import { io } from "socket.io-client";

/*******    SOCKET     *******/
export default class socketAPI {
  socket;

  /*******    CONNECT     *******/
  connect() {
    // SOCKET
    this.socket = io.connect("http://localhost:3003", {
      withCredentials: true,
      extraHeaders: {
        "secure-header": "ShApEsArTsSeRvEr",
      },
      auth: {
        tokenId: -1,
      },
      reconnectionAttempts: 5,
    });

    return new Promise((resolve, reject) => {
      // Success connect
      this.socket.on("connect", () => {
        resolve();
      });
      // Error connect
      this.socket.on("connect_error", (error) => reject(error));
    });
  }

  /*******    DISCONNECT     *******/
  disconnect() {
    return new Promise((resolve) => {
      this.socket.disconnect(() => {
        this.socket = null;
        resolve();
      });
    });
  }

  /*******    EMITER     *******/
  emit(event, data) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");
      return this.socket.emit(event, data, (response) => {
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }
        return resolve();
      });
    });
  }

  /*******    LISTENER     *******/
  on(event, fun) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");
      this.socket.on(event, fun);
      resolve();
    });
  }
}
