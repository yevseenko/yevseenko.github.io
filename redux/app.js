window.onload = function() {
    render();
}

const state = {
    menu: [
        { key: 0, name: 'Home', link: '#home' },
        { key: 1, name: 'App', link: '#app' },
        { key: 2, name: 'Player', link: '#player' },
        { key: 3, name: 'Enemy', link: '#enemy' },
        { key: 4, name: 'Godville', link: '#godville' },
        { key: 5, name: 'About us', link: '#about' }
    ],
    currentPage: 'Home'
};

function render() {
    document.body.innerHTML = Menu();

    document.body.firstChild.addEventListener('click', function(e) {
        if (e.target.text === 'Home') {
            Object.assign(state, { currentPage: Home() });
        }

        if (e.target.text === 'App') {
            Object.assign(state, { currentPage: App() });
        }

        if (e.target.text === 'Player') {
            Object.assign(state, { currentPage: Player() });
        }

        if (e.target.text === 'Godville') {
            Object.assign(state, { currentPage: Godville() });
        }

        if (e.target.text === 'About us') {
            Object.assign(state, { currentPage: About });
        }

        render();
    });
};

function Menu() {
    return '<nav>' +
        state.menu.map(function(item) {
            return ('<a href="' + item.link + '">' + item.name + '</a>')
        }).join(' | ') +
        '</nav><div class="page">' + state.currentPage + '</div>';
}

function Player() {
    return '<div class="player"><input type="text"/><button>Add</button></div>';
}

function Home() {
	return 'Home';
}

function App() {
	return '<div class="row">' + Hero() + Events() + Enemy() + '</div>';
}

function Godville() {
	return 'Godville app';
}

const About = (function() {
	return 'About us somewhere';
}());

const Hero = function() {
	const hero = {
		name: 'myHero',
		hitpoints: 150,
		currentHp: 150,
		damage: Math.random(100)
	}
	return '<div class="col-xs-4">Hero frame</div>';
}

const Enemy = function() {
	const enemy = {
		name: 'myEnemy',
		hitpoints: 150,
		currentHp: 150,
		damage: Math.random(100)
	}
	return '<div class="col-xs-4">Enemy frame</div>';
}

const Events = function() {
	return '<div class="col-xs-4">Events: <button class="btn btn-xs btn-primary">Attack</button></div>'
}






















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
