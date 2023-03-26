const url = `ws://${window.location.host}/stream-message/${code}`;
console.log("url hbs:", url);

const socket = io(url);
const message = `${ message }`;

socket.on(`update-{{code}}`, (data) => {
  const messageElement = document.querySelector('.message');
  messageElement.innerHTML = data;
});