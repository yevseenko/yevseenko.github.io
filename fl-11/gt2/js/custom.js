(function () {
  const btn = document.querySelector('#calculate');
  const input = document.querySelectorAll('input');
  const checkbox = document.querySelector('#checkbox');

  //par
  const parSideA = document.querySelector('#parSideA'),
    parSideB = document.querySelector('#parSideB'),
    parAngle = document.querySelector('#parAngle'),
    parArea = document.querySelector('#parArea'),
    parHeight = document.querySelector('#parH'),
    par = document.querySelector('#par');

  //circle
  const circleR = document.querySelector('#circleR'),
    circleArea = document.querySelector('#circleArea'),
    circleLength = document.querySelector('#circleLength'),
    circle = document.querySelector('#circle');

  //ellipse
  const verticalR = document.querySelector('#ellipseVR'),
    horizontalR = document.querySelector('#ellipseHR'),
    ellipseArea = document.querySelector('#ellipseArea'),
    ellipseLength = document.querySelector('#ellipseLength'),
    ellipse = document.querySelector('#ellipse');

  //square
  const square = document.querySelector('#square'),
    squareArea = document.querySelector('#squareArea'),
    squareDiagonal = document.querySelector('#squareDiagonal'),
    squareSide = document.querySelector('#squareSide');

  //rectangle
  const rectangle = document.querySelector('#rectangle'),
    rectangleSideA = document.querySelector('#rectangleSideA'),
    rectangleArea = document.querySelector('#rectangleArea'),
    rectangleDiagonal = document.querySelector('#rectangleDiagonal'),
    rectangleSideB = document.querySelector('#rectangleSideB');

  //triangle
  const triangle = document.querySelector('#triangle'),
    triangleSideA = document.querySelector('#triangleSideA'),
    triangleAngleA = document.querySelector('#triangleAngleA'),
    triangleAngleB = document.querySelector('#triangleAngleB'),
    triangleAngleC = document.querySelector('#triangleAngleC'),
    triangleArea = document.querySelector('#triangleArea'),
    triangleHeight = document.querySelector('#triangleHeight'),
    triangleSideC = document.querySelector('#triangleSideC'),
    triangleSideB = document.querySelector('#triangleSideB');


  const calculatedResults = {};

  function draw(h, w, el) {
    if (w > 40 || h > 40 || w < 0 || h < 0) {
      console.log(`Invalid value for element => ${el.getAttribute('name')}`);
      return;
    }
    el.style.height = `${h*10}px`;
    el.style.width = `${w*10}px`;
  }

  function drawParallelogram(sideA, sideB, angle) {
    const obj = {
      sideA: sideA,
      sideB: sideB,
      angle: angle
    };
    const angleInRad = obj.angle * Math.PI / 180
    obj.area = obj.sideA * obj.sideB * Math.abs(Math.sin(angleInRad));
    obj.height = obj.area / obj.sideB;
    calculatedResults['parallelogram'] = {
      area: obj.area,
      height: obj.height
    };
    draw(obj.height, obj.sideB, par);
    changeSkew(90 - obj.angle, par);
  }

  function drawCircle(radius) {
    const obj = {
      radius: radius,
      diameter: radius * 2
    };
    obj.area = Math.pow(obj.radius, 2) * Math.PI;
    obj.circumference = obj.diameter * Math.PI;
    calculatedResults['circle'] = {
      area: obj.area,
      circumference: obj.circumference
    };
    draw(obj.diameter, obj.diameter, circle);
  }

  function drawEllipse(ellipseHR, ellipseVR) {
    const obj = {
      hRad: ellipseHR,
      vRad: ellipseVR
    };
    obj.area = obj.vRad * obj.hRad * Math.PI;
    obj.circumference = 2 * Math.PI * Math.sqrt((Math.pow(obj.hRad, 2) + Math.pow(obj.vRad, 2)) / 2);
    calculatedResults['ellipse'] = {
      area: obj.area,
      circumference: obj.circumference
    };
    draw(obj.vRad * 2, obj.hRad * 2, ellipse);
  }

  function drawSquare(side) {
    const obj = {
      side: side
    };
    obj.area = side * side;
    obj.diagonal = side * Math.sqrt(2);
    calculatedResults['square'] = {
      area: obj.area,
      diagonal: obj.diagonal
    };
    draw(side, side, square);
  }

  function drawRectangle(sideA, sideB) {
    const obj = {
      sideA: sideA,
      sideB: sideB
    };
    obj.area = sideA * sideB;
    obj.diagonal = Math.sqrt(Math.pow(obj.sideA, 2) + Math.pow(obj.sideB, 2));
    calculatedResults['rectangle'] = {
      area: obj.area,
      diagonal: obj.diagonal
    };
    draw(sideA, sideB, rectangle);
  }

  function drawTriangle(sideA, sideB) {
    const obj = {
      sideA: sideA,
      sideB: sideB,
      angleB: 90
    };
    const tgAlpha = sideA / sideB;
    obj.angleC = Math.atan(tgAlpha) * 180 / Math.PI;
    obj.angleA = 90 - obj.angleC;
    obj.area = obj.sideA * obj.sideB / 2;
    obj.height = obj.sideA * obj.sideB / Math.sqrt((Math.pow(obj.sideA, 2)) + (Math.pow(obj.sideB, 2)));
    obj.sideC = Math.sqrt((Math.pow(obj.sideA, 2)) + (Math.pow(obj.sideB, 2)));
    calculatedResults['triangle'] = {
      angleA: obj.angleA,
      angleB: obj.angleB,
      angleC: obj.angleC,
      area: obj.area,
      height: obj.height,
      sideC: obj.sideC
    };
    draw(obj.sideA, obj.sideB, triangle);
  }

  function changeSkew(skew, el) {
    el.style.transform = `skew(-${skew}deg)`;
  }

  function renderParallelogramResults() {
    parArea.innerText = calculatedResults.parallelogram.area.toFixed(2);
    parHeight.innerText = calculatedResults.parallelogram.height.toFixed(2);
  }

  function renderCircleResults() {
    circleArea.innerText = calculatedResults.circle.area.toFixed(2);
    circleLength.innerText = calculatedResults.circle.circumference.toFixed(2);
  }

  function renderEllipseResults() {
    ellipseArea.innerText = calculatedResults.ellipse.area.toFixed(2);
    ellipseLength.innerText = calculatedResults.ellipse.circumference.toFixed(2);
  }

  function renderSquareResults() {
    squareArea.innerText = calculatedResults.square.area.toFixed(2);
    squareDiagonal.innerText = calculatedResults.square.diagonal.toFixed(2);
  }

  function renderRectangleResults() {
    rectangleArea.innerText = calculatedResults.rectangle.area.toFixed(2);
    rectangleDiagonal.innerText = calculatedResults.rectangle.diagonal.toFixed(2);
  }

  function renderTriangleResults() {
    triangleAngleA.innerText = calculatedResults.triangle.angleA.toFixed(2);
    triangleAngleB.innerText = calculatedResults.triangle.angleB.toFixed(2);
    triangleAngleC.innerText = calculatedResults.triangle.angleC.toFixed(2);
    triangleArea.innerText = calculatedResults.triangle.area.toFixed(2);
    triangleHeight.innerText = calculatedResults.triangle.height.toFixed(2);
    triangleSideC.innerText = calculatedResults.triangle.sideC.toFixed(2);
  }

  function render() {
    drawParallelogram(parSideA.value || 10, parSideB.value || 20, parAngle.value || 20);
    drawCircle(circleR.value || 10, circle);
    drawEllipse(horizontalR.value || 10, verticalR.value || 5);
    drawSquare(squareSide.value || 20);
    drawRectangle(rectangleSideA.value || 10, rectangleSideB.value || 20);
    drawTriangle(triangleSideA.value || 10, triangleSideB.value || 20);
  }

  function calculate() {
    renderParallelogramResults();
    renderCircleResults();
    renderEllipseResults();
    renderSquareResults();
    renderRectangleResults();
    renderTriangleResults();
  }

  btn.onclick = function () {
    render();
    calculate();
  };

  input.forEach(function (elem) {
    elem.addEventListener('input', function () {
      if (checkbox.checked) {
        render();
        calculate();
      }
    });
  });

  render();
}());
