import config from '../src/config';
import io from "socket.io-client";

const socket = io(
    config.BOT_SERVER_ENDPOINT,
    { transports: ['websocket', 'polling', 'flashsocket'] }
  );

export default socket

