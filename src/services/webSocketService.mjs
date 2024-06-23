import { WebSocketServer } from "ws";

class WebSocketService {
  constructor(port) {
    this.wss = new WebSocketServer({ port });
    this.initialize();
  }

  initialize() {
    this.wss.on("connection", (ws) => {
      ws.on("message", (message) => {
        console.log("Received:", message);
        this.broadcast(`Broadcast: ${message}`);
      });
    });

    console.log(
      `WebSocket server is running on ws://localhost:${this.wss.options.port}`
    );
  }

  broadcast(data, sender) {
    this.wss.clients.forEach((client) => {
      if (client !== sender) {
        client.send(data);
      }
    });
  }
}

const webSocketService = new WebSocketService(8080);
export default webSocketService;