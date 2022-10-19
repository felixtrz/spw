const SocketIOClientWrapper = require('./socket-io-client-wrapper.js');

class SimplePeerWrapper {
  constructor(options) {
    this.socketClient = new SocketIOClientWrapper(options);
    this.peerClient = this.socketClient.peerClient;
  }

  connect() {
    this.peerClient.init();
  }

  isConnectionStarted() {
    return this.peerClient.isPeerStarted();
  }

  send(data) {
    this.peerClient.sendData(data);
  }

  on(event, callback) {
    this.peerClient.setEventCallback(event, callback);
  }

  onCreated(callback) {
    this.socketClient._onCreatedCallback = callback;
  }

  onPeerJoined(callback) {
    this.socketClient._onPeerJoinedCallback = callback;
  }

  close() {
    this.peerClient.terminateSession();
  }
}

module.exports = SimplePeerWrapper;
