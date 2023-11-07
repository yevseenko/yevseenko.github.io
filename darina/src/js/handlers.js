import db from './db.js';

const dataArray = document.getElementsByClassName('item');
const result = document.querySelector('#sum');
const info = document.querySelector('#info');

const nextDate = () => {
  if (db.firstDate < dataArray.length - 8) {
    db.firstDate++;
    renderSelected(db.firstDate);
  }
};

const prevDate = () => {
  if (db.firstDate > 0) {
    db.firstDate--;
    renderSelected(db.firstDate);
  }
};

const reset = () => {
  db.firstDate = -1;

  for (let i = 0; i < dataArray.length; ++i) {
    dataArray[i].classList.remove('selected');
  }

  result.innerHTML = '';
  info.innerHTML = '';
};

const renderSelected = (startElement) => {
  let someSum = 0;
  let someArr = [];

  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i].classList.remove('selected');
  }

  for (let i = startElement; i < startElement + 8; i++) {
    someSum += db.dates[i].minutes;
    someArr.push(db.dates[i].minutes);

    dataArray[i].classList.toggle('selected');
  }

  result.innerHTML = `${someSum}`;
  info.innerHTML = `${someArr.join(' + ')}`;
};

export default { nextDate, prevDate, reset };
