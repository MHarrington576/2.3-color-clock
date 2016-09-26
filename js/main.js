(function(){
  "use strict";

  var hours = document.querySelector('.current-time .hours');
  var minutes = document.querySelector('.current-time .minutes');
  var seconds = document.querySelector('.current-time .seconds');

  var awaitingHover = document.getElementById('awaiting-hover');
  var hoverVar = false;

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
    hours.textContent = ("0" + hrCount.toString(16)).slice(-2);
    minutes.textContent = ("0" + minCount.toString(16)).slice(-2);
    seconds.textContent = ("0" + secCount.toString(16)).slice(-2);
  }

  awaitingHover.addEventListener('mouseenter', function(){hoverVar = true});
  awaitingHover.addEventListener('mouseleave', function(){hoverVar = false});

  function checkHover(){
    var currentTime = new Date();
    var hrCount = currentTime.getHours();
    var minCount = currentTime.getMinutes();
    var secCount = currentTime.getSeconds();
    var backgroundColorVar = "#" + ("0" + hrCount.toString(8)).slice(-2) + ("0" + minCount.toString(8)).slice(-2) + ("0" + hrCount.toString(8)).slice(-2);

    if(hoverVar==true){
      displayHexCode();
      document.body.style.backgroundColor = backgroundColorVar;
    }
    else{
      displayTime();
      document.body.style.backgroundColor = backgroundColorVar;
    };
  }

  window.setInterval(checkHover, 100);

  function barFunction(){
    var n = new Date();
    var t = (n.getSeconds()/60*100).toFixed();
    document.getElementById('progress-bar-itself').style.width = t + '%';
  }

  var minuteBar = barFunction;

  barFunction();
  window.setInterval(minuteBar, 1000);

}());
