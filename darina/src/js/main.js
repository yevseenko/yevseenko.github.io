const data = [
  { date: '01.11', minutes: 345 },
  { date: '02.11', minutes: 258 },
  { date: '03.11', minutes: 116 },
  { date: '04.11', minutes: 3 },
  { date: '05.11', minutes: 156 },
  { date: '06.11', minutes: 187 },
  { date: '07.11', minutes: 154 },
  { date: '08.11', minutes: 367 },
  { date: '09.11', minutes: 200 },
  { date: '10.11', minutes: 347 },
  { date: '11.11', minutes: 117 },
  { date: '12.11', minutes: 54 },
  { date: '13.11', minutes: 35 },
  { date: '14.11', minutes: 545 },
  { date: '15.11', minutes: 111 },
  { date: '16.11', minutes: 78 },
  { date: '17.11', minutes: 156 },
  { date: '18.11', minutes: 218 },
  { date: '19.11', minutes: 222 },
  { date: '20.11', minutes: 108 },
  { date: '21.11', minutes: 5 },
  { date: '22.11', minutes: 380 },
  { date: '23.11', minutes: 410 },
  { date: '24.11', minutes: 17 },
  { date: '25.11', minutes: 172 },
  { date: '26.11', minutes: 158 },
  { date: '27.11', minutes: 255 },
  { date: '28.11', minutes: 128 },
  { date: '29.11', minutes: 354 },
  { date: '30.11', minutes: 20 },
];

let firstDate = 0;

const list = document.querySelector('#root');
const result = document.querySelector('#sum');
const info = document.querySelector('#info');

data.forEach((el) => {
  list.innerHTML += `<div class="item">
      <div class="item-title">${el.date}</div>
      <div class="item-content">${el.minutes}</div>
    </div>`;
});

const nextDate = () => {
  const dataArray = document.getElementsByClassName('item');
  let someSum = 0;
  let someArr = [];

  if (firstDate <= data.length - 8) {
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].classList.remove('selected');
    }

    for (let i = firstDate; i < firstDate + 8; i++) {
      someSum += data[i].minutes;
      someArr.push(data[i].minutes);

      dataArray[i].classList.toggle('selected');
    }

    result.innerHTML = `${someSum}`;
    info.innerHTML = `${someArr.join(' + ')}`;

    firstDate += 1;
  }
};

const prevDate = () => {
  const dataArray = document.getElementsByClassName('item');
  let someSum = 0;
  let someArr = [];

  if (firstDate > 0) {
    firstDate -= 1;

    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].classList.remove('selected');
    }

    for (let i = firstDate; i < firstDate + 8; i++) {
      someSum += data[i].minutes;
      someArr.push(data[i].minutes);

      dataArray[i].classList.toggle('selected');
    }

    result.innerHTML = `${someSum}`;
    info.innerHTML = `${someArr.join(' + ')}`;
  }
};

const reset = () => {
  const dataArray = document.getElementsByClassName('item');
  firstDate = 0;

  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i].classList.remove('selected');
  }

  result.innerHTML = '';
  info.innerHTML = '';
};
