let link = 'dark-theme.css'

let switcher = document.querySelectorAll('.switcher');
let localStorageTheme = localStorage.getItem('darkTheme');
localStorageTheme = localStorageTheme ? JSON.parse(localStorageTheme) : false
allCheck(localStorageTheme);
setTheme(localStorageTheme);

function allCheck(bol) {
     switcher.forEach(s => s.checked = bol)
}


switcher.forEach(s => s.addEventListener('click', (event) => {
     let val = event.target.checked;
     allCheck(val);
     localStorage.setItem('darkTheme', JSON.stringify(val));
     setTheme(val);
}));

function setTheme(val) {
     if (val) {
          enableCSS();
     }
     else {
          disableCSS();
     }
}

// Включити CSS файл
function enableCSS() {
     var cssSheet = document.createElement('link');
     cssSheet.rel = 'stylesheet';
     cssSheet.href = `../css/${link}`;
     document.head.appendChild(cssSheet);
}

// Виключити CSS файл
function disableCSS() {
     var links = document.getElementsByTagName('link');
     Array(...links).forEach(l => {
          if (l.href.indexOf(link) !== -1) {
               l.parentNode.removeChild(l);
          }
     });
}