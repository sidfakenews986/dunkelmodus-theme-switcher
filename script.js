const themes = ['light', 'dark'];
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

document.getElementById('theme-switcher').addEventListener('click', () => {
    currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
    setTheme(currentTheme);
});

setTheme(currentTheme);