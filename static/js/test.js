'use strict';

function bingo(ticket, win){
  let result = 0;
  for (var i = 0; i < ticket.length; i++) {
    if (ticket[i][0].charCodeAt(i) == ticket[i][1]) result += 1;
  }
  return result >= win ? 'Winner!' : 'Loooser!';
}