let link = document.getElementById('dark-theme')

let switcher = document.querySelectorAll('.switcher');
let localStorageTheme = localStorage.getItem('darkTheme');
localStorageTheme = localStorageTheme ? JSON.parse(localStorageTheme) : false
allCheck(localStorageTheme);
link.disabled = !localStorageTheme;

function allCheck(bol) {
     switcher.forEach(s => s.checked = bol)
}


switcher.forEach(s => s.addEventListener('click', (event) => {
     let val = event.target.checked;
     allCheck(val);
     localStorage.setItem('darkTheme', JSON.stringify(val));
     link.disabled = !val
}));