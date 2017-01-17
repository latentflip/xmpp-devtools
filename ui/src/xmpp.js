
import { RAW_IN, RAW_OUT } from './store';

import store from './store';

window.store = store;

window.sendMessage = (xml) => {
  store.dispatch({
    type: RAW_OUT,
    payload: {
      dir: 'out',
      time: Date.now(),
      socket_id: 1,
      msg: xml
    }
  });
};

window.recvMessage = (xml) => {
  store.dispatch({
    type: RAW_IN,
    payload: {
      dir: 'in',
      time: Date.now(),
      socket_id: 1,
      msg: xml
    }
  });
};

let sockets = {};
let socketIdCounter = 0;

// replace native websocket constructor
let _WebSocket = window.WebSocket;
window.WebSocket = function WebSocket (url, protocols) {
  // save socket url in the id map for referencing later
  const id = socketIdCounter++;
  sockets[url] = id;

  // init the socket
  const socket = new _WebSocket(url, protocols);

  // replace Websocket's send method with a logging one
  const _send = socket.send;
  socket.send = function (msg) {
    setTimeout(() => {
      store.dispatch({
        type: RAW_OUT,
        payload: {
          dir: 'out',
          time: Date.now(),
          socket_id: id,
          msg
        }
      });
    }, 0);
    _send.call(this, msg);
  };

  // add an event listener for incoming messages
  socket.addEventListener('message', (msg) => {
    setTimeout(() => {
      store.dispatch({
        type: RAW_IN,
        payload: {
          dir: 'in',
          socket_id: id,
          time: Date.now(),
          msg: msg.data
        }
      });
    }, 0);
  });

  return socket;
};
