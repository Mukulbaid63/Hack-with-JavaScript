const sec = document.querySelector(".sec");
      const min = document.querySelector(".min");
      const hr = document.querySelector(".hr");
      setInterval(function(){
        let time  = new Date();
        let secs = time.getSeconds() * 6;
        let mins = time.getMinutes() * 6;
        let hrs = time.getHours() * 30;
        sec.style.transform = `rotateZ(${secs}deg)`;
        min.style.transform = `rotateZ(${mins}deg)`;
        hr.style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
      });