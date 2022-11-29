
var darab = 0
var elso = 9
var masodik = 3
var harmadik = 0
var negyedik = 0
var otodik = 0
var hatodik = 0

function genonce() {
    var num1 = Math.floor(Math.random()* (7 - 1) + 1);
    var num2 = Math.floor(Math.random()* (7 - 1) + 1);
    if(num1 == num2){
        genonce();
        return;
    }
    let finalvalue = `Az utolsó dobás eredménye: ${num1} és ${num2}`
    let value = `${num1} és ${num2}`
    document.getElementById("num").innerHTML = finalvalue;
    table = document.getElementById('values')
    window.onload = function () {}
    if (num1 === 1) {
        if(elso == 0) {genonce(); return} else {elso--}
    }
    if (num1 === 2) {
        if(masodik == 0) {genonce(); return} else {masodik--}
    }
    if (num1 === 3) {
        if(harmadik == 0) {genonce(); return} else {harmadik--}
    }
    if (num1 === 4) {
        if(negyedik == 0) {genonce(); return} else {negyedik--}
    }
    if (num1 === 5) {
        if(otodik == 0) {genonce(); return} else {otodik--}
    }
    if (num1 === 6) {
        if(hatodik == 0) {genonce(); return} else {hatodik--}
    }
    if (num2 === 1) {
        elso++
    }
    if (num2 === 2) {
        masodik++
    }
    if (num2 === 3) {
        harmadik++
    }
    if (num2 === 4) {
        negyedik++
    }
    if (num2 === 5) {
        otodik++
    }
    if (num2 === 6) {
        hatodik++
    }
    darab++;
    document.getElementById("darabszam").innerHTML = `Dobások száma eddig: ${darab}`;
    table = document.getElementById("values")
    table.innerHTML += `<tr><th scope="col">${darab}.</th><th scope="col">${value}</th><td>${elso}</td><td>${masodik}</td><td>${harmadik}</td><td>${negyedik}</td><td>${otodik}</td><td>${hatodik}</td></tr>`;
}

function gen50x(){
    for(var i= 0; i < 50; i++){genonce();}
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
