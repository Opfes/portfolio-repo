
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

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'daytime') {
            switchToDay()
        } else {
            switchToNight()
        }
        localStorage.setItem('theme', theme);
        toggle.checked = theme === 'daytime';
    }

    // Function to toggle the theme
    function toggleTheme() {
        const currentTheme = document.getElementById('night-sky');
        const newTheme = currentTheme.style.display === 'block' ? 'daytime' : 'nighttime';
        setTheme(newTheme);
    }

    // Initialize the theme
    const savedTheme = localStorage.getItem('theme');
    console.log("savedTheme:", savedTheme);
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    console.log("systemPreference:", systemPreference);
    const initialTheme = savedTheme || systemPreference || 'dark'; // Default to dark mode
    var drewTheme = 'daytime'
    if (initialTheme === 'dark' || initialTheme === 'nighttime') {
        drewTheme = 'nighttime'
    }
    setTheme(drewTheme);

    // Add event listener to the toggle
    toggle.addEventListener('change', toggleTheme);
});


window.onload = initate;