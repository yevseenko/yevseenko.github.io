(function () {
  console.log('Hello world');
  const img = document.querySelector('#image');
  const words = document.querySelector('#words');

  img.onclick = function () {
    let start = Date.now();
    let elementGrayscale = 1;
    let elementContrast = 1;
    let elementBrightness = 1;
    let elementStartOpacity = 0;

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      if (timePassed >= 3000) {
        clearInterval(timer);
        return;
      }

      elementGrayscale -= 0.1 / 3;
      elementContrast += 0.012;
      elementStartOpacity += 0.1 / 3;
      elementBrightness += 0.01;

      draw(elementGrayscale, elementContrast, elementStartOpacity, elementBrightness);

    }, 100);

    function draw(a, b, c, d) {
      img.style.webkitFilter = `
        grayscale(${a})
        contrast(${b})
        brightness(${d})`;
      words.style.opacity = c;
    }
  }
})();
