//Version 1
let version1 = [];

function aloita(){
    if (version1.length >= 10){
        return;
    }
    let person = prompt("Anna kaverin nimi:")
    if(person != null && person.trim() !== ""){
        version1.push(person.trim());
        paivitalista1();
    }
}
function paivitalista1(){
    let lista = "";
    for (let i = 0; i < version1.length; i++){
        lista += (i+1) + ". " + version1[i] +"<br>";
    }
    document.getElementById("kaveri1").innerHTML = lista;
}

//Version 2
let version2 = [];

function lisaa(){
    if (version2.length >= 10){
        return;
    }
    let input = document.getElementById("nimi");
    let person = input.value.trim();
    if(person !== ""){
        version2.push(person);
        paivitalista2();
        input.value= "";
    }
    
}
function paivitalista2(){
    let lista = "";
    for ( let i = 0; i < version2.length; i++){
        lista += (i+1) + ". " + version2[i] + "<br>";
    }
    document.getElementById("kaveri2").innerHTML = lista;
}

function poista(){
    let input = document.getElementById("nimi");
    let person = input.value.trim();
    let index = version2.indexOf(person);
    if (index !== -1){
        version2.splice(index, 1);
        paivitalista2();
        input.value = "";
    }
}


function jarjesta(){  
    version2.sort();
    paivitalista2();
}