var wsUri = "ws://127.0.0.1:5000/ws";
var output;
var websocket = new WebSocket(wsUri);

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

// function getValue(input) {
//     //var textField = document.txt.value;
//     //writeToScreen("SENT: " + document.getElementById('msg').value);
//     websocket.send(input);
// }

function testWebSocket() {
    websocket.onopen = function(evt) {
        onOpen(evt)
    };
    websocket.onclose = function(evt) {
        onClose(evt)
    };
    websocket.onmessage = function(evt) {
        onMessage(evt)
    };
    websocket.onerror = function(evt) {
        onError(evt)
    };
}

function onOpen(evt) {
    writeToScreen("CONNECTED");
    //doSend("WebSocket rocks");
}

function onClose(evt) {
    writeToScreen("DISCONNECTED");
}

function onMessage(evt) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
    //websocket.close();
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);