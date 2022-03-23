let countdownDate = new Date('Jul 10, 2022 00:00:00').getTime();

let updateCDD = setInterval(function () {

    let timeNow = new Date().getTime();

    let t = countdownDate - timeNow;

    let days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000 ) % 60);

   document.getElementById('timer').innerHTML =
   days + 'd' + ' ' + hours + 'h' + ' ' + minutes + 'm' + ' ' + seconds + 's';
   
   if (t < 0) {
       clearInterval(updateCDD);
       document.getElementById('timer').innerHTML = 'Time is up';
   }
}, 1000);