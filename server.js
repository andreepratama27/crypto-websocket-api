const express = require("express");
const WebSocket = require("ws");
const http = require("http");

const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const BTC_DUMMY_PRICE = 399317643;

wss.on("connection", (ws) => {
  setInterval(() => {
    ws.send(
      JSON.stringify({
        x: Date.now(),
        y: [
          Math.round(BTC_DUMMY_PRICE + Math.random() * 1000), // Open Price
          Math.round(BTC_DUMMY_PRICE + Math.random() * 1000), // High Price
          Math.round(BTC_DUMMY_PRICE + Math.random() * 1000), // Low Price
          Math.round(BTC_DUMMY_PRICE + Math.random() * 1000), // Close Price
        ],
      })
    );
  }, 15000); // will ticking every 15 seconds
});

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server start on port 3001`);
});
