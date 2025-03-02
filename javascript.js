
function switchToDay() {
    var node = document.getElementById('daytime-sky');
    var oppositeNode = document.getElementById('night-sky');

    node.style.display = 'block';
    oppositeNode.style.display = 'none';
    document.getElementById("pagestyle").setAttribute("href", "daytime.css");
}

function switchToNight() {
    var node = document.getElementById('night-sky');
    var oppositeNode = document.getElementById('daytime-sky');

    node.style.display = 'block';
    oppositeNode.style.display = 'none';
    document.getElementById("pagestyle").setAttribute("href", "nighttime.css");
}

window.onload = initate;