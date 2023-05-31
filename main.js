document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var welcomeMessage = document.getElementById("welcome-message");
  
    welcomeMessage.textContent = "hello world" + nameInput.value + "! Bem-vindo .";
    nameInput.value = "";
  });




  