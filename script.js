var scrolltop = 0;
window.setInterval(function() {
    scrolltop += 10;
    var maze = document.querySelector('#maze');
    var option = Math.random();
    var div = document.createElement('div');
    var text;
    if (option > 0.5) {
        div.classList.add('cross');
    } else {
        div.classList.add('cross');
        div.classList.add('anti');
    }
    maze.appendChild(div);
    window.scrollBy(0, scrolltop);
}, 10);