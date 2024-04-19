const scriptURL = 'https://script.google.com/macros/s/AKfycbybhij1eySVmFJhY86ls7gR5MXlgrOXQIYYo5LZ4UyoN-N9UUAo4aYpZ6M5zsXTVrcM/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Feedback sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

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