(function () {
  console.log('Hello wowwrld');
  const listDiv = document.querySelector('#list');
  const currentPlayer = document.querySelector('#currentPlayer');
  const playerCommand = document.querySelector('#playerCommand');

  const player = {
    name: 'John',
    email: 'someemail@gmail.com',
    summ: 5000,
    score: 0,
    command: [],
    msg: ''
  };

  const arr = [{
      name: 'baka',
      age: 15,
      skill: 2,
      cost: 500
    },
    {
      name: 'banana',
      age: 19,
      skill: 2,
      cost: 500
    },
    {
      name: 'baklajana',
      age: 27,
      skill: 2,
      cost: 500
    },
    {
      name: 'nomana',
      age: 32,
      skill: 7,
      cost: 1500
    },
    {
      name: 'nenomana',
      age: 40,
      skill: 2,
      cost: 500
    },
    {
      name: 'zamana',
      age: 37,
      skill: 3,
      cost: 500
    }
  ];

  listDiv.addEventListener('click', takeId, false);

  function takeId(e) {
    const pl = arr.find(item => item.name == e.target.id);
    if (player.summ >= pl.cost) {
      player.summ -= pl.cost;
      player.command.push(pl);
      player.msg = '';
    } else {
      player.msg = 'You do not have money';
    }
    renderCurrentPlayer();
    renderPlayerCommand();
  }

  function renderList() {
    listDiv.innerHTML = `
      All Biathlethes:
      <ul>
      ${arr.map(item => `
        <li id="${item.name}">
          Name: <span class="info">${item.name}</span>
          Skill: <span class="info">${item.skill}</span>
          Cost: <span class="info">${item.cost}</span>
        </li>
        `).join('')}
      </ul>
      `;
  }

  function renderCurrentPlayer() {
    currentPlayer.innerHTML = `
      Player: <span class="info">${player.name}</span>
      /
      Current cost: <span class="info">0</span>
      /
      Rest: <span class="info">${player.summ}</span>
      <span class="warning">${player.msg}</span>
      `;
  }

  function renderPlayerCommand() {
    if (player.command.length < 1) playerCommand.innerHTML = `
      Player command:
      <span class="warning">Nothing to view</span>
      `;

    playerCommand.innerHTML = `
      Player command:
      <ul>
        ${player.command.map(item => `<li><span class="info">${item.name}(${item.cost})</span></li>`).join(' ')}
      </ul>
    `;
  }

  function render() {
    renderList();
    renderCurrentPlayer();
    renderPlayerCommand();
  }

  render();
})();
