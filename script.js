function updateClock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var colon = document.getElementById("colon");

    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    if (currentHours < 10) {
      currentHours = "0" + currentHours;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    
    hours.innerText = currentHours;
    minutes.innerText = currentMinutes;
    seconds.innerText = currentSeconds;
    colon.innerText = ":"
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  