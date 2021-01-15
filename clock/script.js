const clock = {
  currentHour(){
    return new Date().getHours();
  },
  currentMinutes(){
    return new Date().getMinutes();
  },
  currentSeconds(){
    return new Date().getSeconds();
  }
};


function displayActualDate(){
  setInterval(() => {
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
  
    hours.innerHTML = clock.currentHour();
    minutes.innerHTML = clock.currentMinutes();
    seconds.innerHTML = clock.currentSeconds();
  }, 1000);  
}

displayActualDate();

class Clock{
  constructor(futureDate){
    this.futureDate = futureDate;
  }
}