window.onload = function() {
    render();
}

const state = {
    menu: [
        { id: 0, name: 'menuItem', link: '#' },
        { id: 1, name: 'menuItemSecond', link: '#' },
        { id: 2, name: 'menuItemThird', link: '#' }
    ]
};

function render() {
    document.body.innerHTML = '<nav>' +
        state.menu.map(function(item) {
            return ('<a href="'+item.link+'">'+item.name+'</a>')
        }).join(' | ') +
        '</nav>';
}

document.addEventListener('click', function(e) {
    state.menu.push({ name: 'newLink' });
    render();
});
