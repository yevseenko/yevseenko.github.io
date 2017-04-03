window.onload = function() {
    render();
}

const state = {
    menu: [
        { key: 0, name: 'Home', link: '#home' },
        { key: 1, name: 'App', link: '#app' },
        { key: 2, name: 'Player', link: '#player' },
        { key: 3, name: 'Godville', link: '#godville' },
        { key: 3, name: 'About us', link: '#about' }
    ],
    currentPage: 'Home'
};

function render() {
    document.body.innerHTML = '<nav>' +
        state.menu.map(function(item) {
            return ('<a href="' + item.link + '">' + item.name + '</a>')
        }).join(' | ') +
        '</nav><div class="page">' + state.currentPage + '</div>';

    document.body.firstChild.addEventListener('click', function(e) {
        if (e.target.text === 'Home') {
            Object.assign(state, { currentPage: '<h2>Home</h2>' });
        }

        if (e.target.text === 'App') {
            Object.assign(state, { currentPage: '<h2>App</h2>' });
        }

        if (e.target.text === 'Player') {
            Object.assign(state, { currentPage: '<div class="player"><input type="text"/><button>Add</button></div>' });
        }

        if (e.target.text === 'About us') {
            Object.assign(state, { currentPage: '<h2>About us</h2>' });
        }

        render();
    });
};






















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
