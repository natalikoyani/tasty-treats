let link = 'theme';
let styleSheet = findLink(link);

let switcher = document.querySelectorAll('.switcher');
let localStorageTheme = localStorage.getItem('darkTheme');
localStorageTheme = localStorageTheme ? JSON.parse(localStorageTheme) : false
allCheck(localStorageTheme);
if (styleSheet) {
     styleSheet.disabled = !localStorageTheme;
}


function allCheck(bol) {
     switcher.forEach(s => s.checked = bol)
}


switcher.forEach(s => s.addEventListener('click', (event) => {
     let val = event.target.checked;
     allCheck(val);
     localStorage.setItem('darkTheme', JSON.stringify(val));
     if (styleSheet) {
          styleSheet.disabled = !val
     }
}));




function findLink(name) {
     let links = document.getElementsByTagName('link');
     return Array(...links).find(link => link.href.indexOf(name) !== -1);
}