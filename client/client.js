$(document).ready(function(){
  function writeEvent(text){
    $("#chat_messages").append("<li>" + text + "</li>");
	 $("#chat_messages").scrollTop($("#chat_messages").prop("scrollHeight") - $("#chat_messages").prop("clientHeight"));
  }
  var name = prompt("What's your name?");

  writeEvent("Welcome to RPS! Please select a button to begin");

  var sock = io();
  sock.emit('message', name + " has connected");
  sock.on('message', writeEvent);
  

  function onFormSubmitted(e)
  {
    e.preventDefault();
    var textMessage = $('#chat').val();
    $('#chat').val(" ");
    sock.emit('message', name + ": " + textMessage);
  }

  function addButtonListeners()
  {
    ['rock', 'paper', 'scissors'].forEach(function(id)
    {
      button = document.getElementById(id);
      button.addEventListener('click', function()
      {
        sock.emit('turn', id);
      });
    });
  }

  $('#say').click(onFormSubmitted);

  addButtonListeners();
});
