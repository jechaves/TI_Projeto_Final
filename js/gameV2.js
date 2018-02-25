
/*
 * Criação da canvas e das suas caractristicas
 * largura e altura
 */
var canvas = document.getElementById('canvasJogoV2');  //Pega no elemento canvas da pagina html e coloca na variavel
//console.log(canvas);
var c = canvas.getContext('2d');  //contexto da canvas, onde se vao criar as coisas
//console.log(c);
canvas.width = 800;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
canvas.height = 600;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
//console.log(canvas);




function startGame() {
    console.log("new game");
}