$(document).ready(function(){
  function writeEvent(text){
    $("#chat_messages").append("<li>" + text + "</li>");
  }

  writeEvent("Welcome to RPS! Please select a button to begin");

  var sock = io();
  sock.on('message', writeEvent);

  function onFormSubmitted(e)
  {
    e.preventDefault();
    var textMessage = $('#chat').value;
    $('#chat').value = '';

    sock.emit('message', textMessage);
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
