window.setInterval(function() {
    var maze = document.querySelector('#maze');
    var option = Math.random();
    var div = document.createElement('div');
    if (option > 0.5) {
        div.classList.add('cross');
    } else {
        div.classList.add('cross');
        div.classList.add('anti');
    }
    maze.appendChild(div);
    window.scrollTo(0, maze.scrollHeight);
}, 10);