import db from './db.js';
import handlers from './handlers.js';

(function () {
  const list = document.querySelector('#root');
  const nextBtn = document.querySelector('#next');
  const prevBtn = document.querySelector('#prev');
  const resetBtn = document.querySelector('#reset');

  const controller = new AbortController();
  const { signal } = controller;

  nextBtn.addEventListener('click', handlers.nextDate, { signal });
  prevBtn.addEventListener('click', handlers.prevDate, { signal });
  resetBtn.addEventListener('click', handlers.reset, { signal });

  db.dates.forEach((el) => {
    list.innerHTML += `<div class="item">
      <div class="item-title">${el.date}</div>
      <div class="item-content">${el.minutes}</div>
    </div>`;
  });
})();
