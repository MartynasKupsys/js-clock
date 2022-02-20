const sekundes = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const sekundes1 = document.querySelector(".container");
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  sekundes1.textContent = `${hours} : ${minutes} : ${seconds}`;
};

setInterval(sekundes, 1000);

// window.onresize();
