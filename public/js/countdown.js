(function() {

  var deadline = '2016-10-15';

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(endtime){
    var day = document.getElementById('timer-day');
    var hour = document.getElementById('timer-hour');
    var min = document.getElementById('timer-min');
    var sec = document.getElementById('timer-sec');
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      day.innerHTML = t.days;
      hour.innerHTML = t.hours;
      min.innerHTML = t.minutes;
      sec.innerHTML = t.seconds;
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }

  initializeClock(deadline);

})();
