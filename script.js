'use strict';

let generate = document.getElementById('generate');
let copy = document.getElementById('copier');
let clear = document.getElementById('clear');
let rangeVal = document.getElementById('rangeVal');
let passLen = document.getElementById('passLen');
var passwordLength = 8;


passLen.addEventListener('change', () => {
    passwordLength = passLen.value;
    rangeVal.innerHTML = passwordLength;
});


generate.addEventListener('click', () => {
    let charac = [];
    let container = '';

    let cCap = document.getElementById('capLet');
    let cSm = document.getElementById('smLet');
    let cNum = document.getElementById('number');
    let cPunc = document.getElementById('punc');

    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = capital.toLowerCase();
    let punctuation = `".</?>,!';@#$&*-_`;
    let number = "0123456789";

    var total = "";

    if(cCap.checked) {
        total += capital;
    }

    if(cSm.checked) {
         total += small;
    }

    if(cNum.checked) {
         total += number;
    }

    if(cPunc.checked) {
         total += punctuation;
    }

    for (let i = 1; i<= passwordLength; i++) {
        container += total[Math.floor(Math.random() * total.length )];
    }

    document.getElementById('pass').value = container;
    document.getElementById('copied').innerHTML = '';
});

copy.addEventListener('click', () => {
        pass.select();
    document.execCommand('copy');
    let a = document.getElementById('pass').value;
    if (a == '') {
        document.getElementById('copied').innerHTML = 'Nothing to Copy';
    } else {
        document.getElementById('copied').innerHTML = 'COPIED!!!';
    }
})

clear.addEventListener('click', () => {
      document.getElementById('pass').value = '';
  document.getElementById('copied').innerHTML = '';
});

