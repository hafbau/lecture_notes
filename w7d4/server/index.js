/**
 * GAME LOGIC
 * ===
 * - client joins server
 * - client receives ongoing games
 * - client joins game
 *  + client sends move
 *  + server broadcasts game state
 *    - remaining prices
 *    - who is winning
 *    - 
 */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { remainingPrices, moveGotPrice, generateRandomId } = require('./helpers')
//Create express app
const app = express();

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const broadcastExcept = (msg, ws) => {
  wss.clients.forEach(function each(client) {
    if (client !== ws) {
      client.send(JSON.stringify(msg));
    }
  });
}

wss.on('connection', (ws) => {
  // send to newly connected client
  const playerId = generateRandomId();
  ws.send(JSON.stringify({
    type: 'JOINED',
    playerId,
    pricesCount: remainingPrices.length
  }))

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
      console.log(message);
      // try {
      const parsedMessage = JSON.parse(message);
      // } catch(e) {
      //   parsedMessage = message
      // }
      const { type, playerId, ...coords } = parsedMessage;
      if (type === 'MOVE' && playerId) {
        
        if(moveGotPrice(coords)) {
          ws.send(JSON.stringify({ type: 'ZOOM', zoom: 1.1 }));
          coords.zoom = 1.1;
          broadcastExcept({
            type: 'PRICES_COUNT',
            pricesCount: remainingPrices.length
          })
        }
        // broadcast to all except this current client
        broadcastExcept({
          ...coords,
          type: 'SERVER_MOVE'
        }, ws);
      }
      
    });
    // console.log('a client connected', ws);
    //send immediately a feedback to the incoming connection    
    ws.send(JSON.stringify({msg:'Hi there, I am a WebSocket server'}));
});

server.listen(PORT, () => console.log('server listening on', PORT));