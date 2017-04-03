window.onload = function() {
    render();
}

const state = {
    menu: [
        { id: 0, name: 'Home', link: '#home' },
        { id: 1, name: 'App', link: '#app' },
        { id: 2, name: 'About us', link: '#about' }
    ],
    currentPage: 'Home'
};

function render() {
    document.body.innerHTML = '<nav>' +
        state.menu.map(function(item) {
            return ('<a href="'+item.link+'">'+item.name+'</a>')
        }).join(' | ') +
        '</nav><div class="page"><h1>'+state.currentPage+'</h1></div>';
}

document.addEventListener('click', function(e) {
    Object.assign(state, {currentPage: e.target.text});
		render();
});






















if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}
