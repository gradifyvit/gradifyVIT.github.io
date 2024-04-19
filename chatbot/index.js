document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });
  
  function output(input) {
    let product;
  
    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");
  
    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    // Update DOM
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="chatbot/user.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "chatbot/bot-mini.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Fake delay to seem "real"
    setTimeout(() => {
      botText.innerText = `${product}`;
      textToSpeech(product)
    }, 1000
    )
  
  }
  
  var icon = document.getElementById("icon");
  function updateTheme() {
      var theme = localStorage.getItem("theme");
      if (theme === "light") {
          document.body.classList.add("light-theme");
          document.body.classList.remove("dark-theme");
          icon.classList.remove("fa-toggle-on");
          icon.classList.add("fa-toggle-off");
      } else {
          document.body.classList.add("dark-theme");
          document.body.classList.remove("light-theme");
          icon.classList.remove("fa-toggle-off");
          icon.classList.add("fa-toggle-on");
      }
  }
  
  updateTheme();
  
  icon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
  
      icon.classList.toggle("fa-toggle-on");
      icon.classList.toggle("fa-toggle-off");
  
      if (document.body.classList.contains("light-theme")) {
          localStorage.setItem("theme", "light");
      } else {
          localStorage.setItem("theme", "dark");
      }
      updateChart();
  }
  
  
      document.getElementById("toggle-navigation").addEventListener("click", function() {
        var navigationPage = document.getElementById("navigation-page");
        if (navigationPage.style.display === "flex") {
          navigationPage.style.animation = "pop-out 0.3s ease forwards";
          setTimeout(function() {
            navigationPage.style.display = "none";
          }, 300);
        } else {
          navigationPage.style.display = "flex";
          navigationPage.style.animation = "pop-in 0.3s ease forwards";
        }
      });