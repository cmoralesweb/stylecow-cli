(function () {
  var ws,
    style = document.createElement('style'),
    link = document.querySelector('link[rel="stylesheet"]');
  document.head.appendChild(style);

  function socket () {
    if (!ws || ws.readyState !== 1) {
      ws = new WebSocket('ws://127.0.0.1:8080');
      ws.onmessage = function (e) {
        style.innerHTML = e.data;
        if (link) {
          link.parentNode.removeChild(link);
          link = null;
        }
      }
    }
  }

  setInterval(socket, 1000);
})();