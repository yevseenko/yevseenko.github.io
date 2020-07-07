(function () {
  console.log('Hello world');
  const img = document.querySelector('#image');
  const words = document.querySelector('#words');

  img.onclick = function () {
    let start = Date.now();
    let grays = 1;
    let con = 1;
    let opp = 0;

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 3000) {
        clearInterval(timer);
        return;
      }

      grays -= 0.1 / 3;
      con += 0.01;
      opp += 0.1 / 3;

      draw(grays, con, opp);

    }, 100);

    function draw(grays, con, opp) {
      img.style.webkitFilter = `contrast(${con}) grayscale(${grays})`;
      words.style.opacity = opp;
    }
  }
})();
