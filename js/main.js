(function(){
  "use strict";

  var hours = document.querySelector('.current-time .hours');
  var minutes = document.querySelector('.current-time .minutes');
  var seconds = document.querySelector('.current-time .seconds');

  var awaitingHover = document.getElementById('awaiting-hover');
  var hoverVar = false;

  var progressBar = document.getElementById('original-progress-bar');
  var currentTime = new Date();
  var secondCount = currentTime.getSeconds();

  function displayTime(){
    var currentTime = new Date();
    var hrCount = currentTime.getHours();
    var minCount = currentTime.getMinutes();
    var secCount = currentTime.getSeconds();
    hours.textContent = ("0" + hrCount).slice(-2);
    minutes.textContent = ("0" + minCount).slice(-2);
    seconds.textContent = ("0" + secCount).slice(-2);
  }

  displayTime();
  window.setInterval(displayTime, 1000);

  function displayHexCode(){
    var currentTime = new Date();
    var hrCount = currentTime.getHours();
    var minCount = currentTime.getMinutes();
    var secCount = currentTime.getSeconds();
    hours.textContent = ("0" + (hrCount/13).toString(16)).slice(-2);
    minutes.textContent = ("0" + (minCount/13).toString(16)).slice(-2);
    seconds.textContent = ("0" + (secCount/13).toString(16)).slice(-2);
  }

  awaitingHover.addEventListener('mouseenter', function(){hoverVar = true});
  awaitingHover.addEventListener('mouseleave', function(){hoverVar = false});

  function checkHover(){
    var currentTime = new Date();
    var hrCount = currentTime.getHours();
    var minCount = currentTime.getMinutes();
    var secCount = currentTime.getSeconds();
    var currentRed = ("0" + (hrCount/13).toString(16)).slice(-2)
    var currentGreen = ("0" + (minCount/13).toString(16)).slice(-2)
    var currentBlue = ("0" + (secCount/13).toString(16)).slice(-2);
    var colorCode = '#' + currentRed + currentGreen + currentBlue;

    if(hoverVar==true){
      displayHexCode();
      document.body.style.backgroundColor = colorCode;
    }
    else{
      displayTime();
      document.body.style.backgroundColor = colorCode;
    };
  }

  window.setInterval(checkHover, 100);

  function minuteProgress(){
    currentTime = new Date();
    secondCount = currentTime.getSeconds();
    progressBar.style.width=(secondCount / 60 * 100) + '%';
  }

  // minuteProgress();
  window.setInterval(minuteProgress, 100);

}());
