/* 

 */

document.addEventListener("DOMContentLoaded", init);

var canvas;

var ctx;

function init()
{
    canvas = document.querySelector("canvas");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    canvas.style.backgroundColor = "red";
    ctx=canvas.getContext("2d");  // get context: objecto que permite desenhar coisas
    ctx.fillStyle="green";
    ctx.fillRect(10,10,50,50);   //posição, largura, altura
    
    ctx.fillStyle = "yellow";
    ctx.fillRect(100,100,50,50);   //posição, largura, altura
    
    ctx.strokeStyle = "black"; // desenha uma linha do beginPath ao closePath, ctx.stroke: escreve a linha acima descrita
    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(100,300);
    ctx.lineTo(20,200);
    ctx.closePath();
    ctx.fillStyle = "Blue";
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI * 2);  // desenha uma circunferencia posicao,
    ctx.fillStyle = "pink";
    ctx.stroke();
    ctx.fill();
}
