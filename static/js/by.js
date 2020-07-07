(function () {
  console.log('Hello world');
  const first = document.querySelector('#first');
  const second = document.querySelector('#second');

  second.onclick = function () {
    let start = Date.now();
    let opp = 0;
    let con = 1;

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 3000) {
        clearInterval(timer);
        return;
      }

      opp += 0.1 / 3;
      con += 0.01;

      draw(opp, con);

    }, 100);

    function draw(opp, con) {
      second.style.opacity = opp;
      second.style.webkitFilter = `contrast(${con})`;
    }
  }
})();
