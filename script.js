const themes = ['light', 'dark'];
let currentTheme = localStorage.getItem('theme') || 'light';

// Funktion zum Setzen des Themas in den body und zur Speicherung im localStorage
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Event-Listener für den Themenswitcher-Button
// Ändert das aktuelle Thema zwischen 'light' und 'dark'
document.getElementById('theme-switcher').addEventListener('click', () => {
    currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
    setTheme(currentTheme);
});

// Setzt das aktuelle Thema beim Laden der Seite
setTheme(currentTheme);