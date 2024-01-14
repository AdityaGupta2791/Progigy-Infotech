window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;
  let appendMinutes = document.querySelector('#minutes');
  let appendTens = document.querySelector('#tens');
  let appendSeconds = document.querySelector('#seconds');
  let startBtn = document.querySelector('#start');
  let lapBtn = document.querySelector('#lap');
  let resetBtn = document.querySelector('#reset');
  let lapTimesContainer = document.querySelector('#lap-times');
  let Interval;
  let lapCounter = 1;

  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = '0' + minutes;
      seconds = 0;
      appendSeconds.innerHTML = '0' + 0;
    }
  };

  startBtn.onclick = () => {
    if (startBtn.innerHTML === 'Start') {
      Interval = setInterval(startTimer, 10);
      startBtn.innerHTML = 'Pause';
    } else {
      clearInterval(Interval);
      startBtn.innerHTML = 'Start';
    }
  };

  lapBtn.onclick = () => {
    if (minutes || seconds || tens) {
      const lapTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(tens)}`;
      const lapItem = document.createElement('div');
      lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
      lapTimesContainer.appendChild(lapItem);
      lapCounter++;
    }
  };

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    lapCounter = 1;
    lapTimesContainer.innerHTML = '';
    startBtn.innerHTML = 'Start';
  };

  const padNumber = (number) => {
    return (number < 10 ? '0' : '') + number;
  };
};