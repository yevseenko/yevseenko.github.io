(function () {
  console.log('Hello world');
  const img = document.querySelector('#image');

  img.onclick = function () {
    let start = Date.now();
    let grays = 1;
    let con = 1;

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 3000) {
        clearInterval(timer);
        return;
      }

      grays -= 0.1 / 3;
      con += 0.01;

      draw(grays, con);

    }, 100);

    function draw(grays, con) {
      img.style.webkitFilter = `contrast(${con}) grayscale(${grays})`;
    }
  }
})();
