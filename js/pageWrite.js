
function funcData(){

    var data = new Date();

    document.getElementById("data_1").innerHTML = data;
    document.getElementById("data_2").innerHTML = data.toDateString();
}

function funcMudaTexto1(){

    t = document.getElementById("txtcaixa1").value = "Este e outro texto!";
}

function funcMudaTexto2(){

    document.getElementById("texto2").innerHTML = "Este e outro texto!";
}

function funcContador1(){
    // setInterval(function(){},1000);
    // corre a funcao de 1000 em 1000 milisegundos
    // t e apenas um contador de tempo
    var numero = 0;

    var t = setInterval(function(){
        document.getElementById("numeroDoContador1").innerHTML = numero;
        if (numero === 10) clearInterval(t);  // se o numero for igual a 10 para o contador de tempo
        numero++; // aumenta o numero em 1
    },1000);
}

// A mesma coisa que o de cima mas com funcoes separadas
var n = 10;
var t;
function funcContador2(){
    t = setInterval(funcDecrescente, 1000);
}

function funcDecrescente(){
    document.getElementById("numeroDoContador2").innerHTML = n;
    n--;
    if (n === 0)
        clearInterval(t);
}