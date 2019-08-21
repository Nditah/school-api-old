"use strict";

/* eslint-disable no-var */
var socket = io();
var messages = document.getElementById("messages");

(function () {
  $("form").submit(function (e) {
    var li = document.createElement("li");
    e.preventDefault(); // prevents page reloading
    socket.emit("chat message", $("#message").val());

    messages.appendChild(li).append($("#message").val());
    var span = document.createElement("span");
    messages.appendChild(span).append("by " + "Anonymous" + ": " + "just now");

    $("#message").val("");

    return false;
  });

  socket.on("received", function (data) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var messages = document.getElementById("messages");
    messages.appendChild(li).append(data.message);
    messages.appendChild(span).append("by " + "anonymous" + ": " + "just now");
    console.log("Hello bingo!");
  });
})();

// fetching initial chat messages from the database
(function () {
  fetch("/chats").then(function (data) {
    return data.json();
  }).then(function (json) {
    json.map(function (data) {
      var li = document.createElement("li");
      var span = document.createElement("span");
      messages.appendChild(li).append(data.message);
      messages.appendChild(span).append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
    });
  });
})();

//is typing...

var messageInput = document.getElementById("message");
var typing = document.getElementById("typing");

//isTyping event
messageInput.addEventListener("keypress", function () {
  socket.emit("typing", { user: "Someone", message: "is typing..." });
});

socket.on("notifyTyping", function (data) {
  typing.innerText = data.user + " " + data.message;
  console.log(data.user + data.message);
});

//stop typing
messageInput.addEventListener("keyup", function () {
  socket.emit("stopTyping", "");
});

socket.on("notifyStopTyping", function () {
  typing.innerText = "";
});
//# sourceMappingURL=chat.js.map