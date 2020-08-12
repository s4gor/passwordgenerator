'use strict';
function loader() {
    var charac = [];
    var container = '';

    for (let i = 36; i<= 126; i++) {
        if (i == 44 || i == 124 || i == 38 || i == 39 || i == 43 || i == 45 || i == 58 || i == 59 || i == 60 || i == 61 || i == 62 || i == 39) {
            continue;
        }
        charac.push(i);
    }

    for (let i = 1; i<= 10; i++) {
        container += String.fromCharCode(charac[Math.floor(Math.random() * charac.length )]);
    }

    document.getElementById('pass').value = container;
    document.getElementById('copied').innerHTML = '';
}

function copier() {
    pass.select();
    document.execCommand('copy');
    document.getElementById('copied').innerHTML = 'COPIED!!!';
}

function clr() {
  document.getElementById('pass').value = '';
  document.getElementById('copied').innerHTML = '';
}
