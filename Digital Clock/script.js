function clock(){
         var hours = document.getElementById('hour');
         var minutes = document.getElementById('minutes');
         var seconds = document.getElementById('seconds');
         var h = new Date().getHours();
         var m = new Date().getMinutes();
         var s = new Date().getSeconds();

         h = (h < 10) ? "0" + h : h;
         m = (m < 10) ? "0" + m : m;
         s = (s < 10) ? "0" + s : s;

         hours.innerHTML = h;
         minutes.innerHTML = m;
         seconds.innerHTML = s;
     }

     
var inter = setInterval(clock, 1000);