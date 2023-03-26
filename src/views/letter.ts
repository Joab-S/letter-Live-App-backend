const messageElement = document.querySelector('.message');
const socket = io(`ws://${window.location.host}/stream-message/${code}`);

socket.on('update', (data) => {
  messageElement.innerHTML = data;
});
