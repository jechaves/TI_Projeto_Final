document.addEventListener("DOMContentLoaded", init);

var canvas;

var ctx;

function init()
{
    canvas = document.querySelector("canvas");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx=canvas.getContext("2d");  // get context: objecto que permite desenhar coisas

    anda();
}

var x=innerWidth/2;
var y=innerHeight/2;
var dx=4, dy=4;

function anda()
{
    if( x + 50 > innerWidth || x - 50 < 0)
    {
        dx =- dx;
    }
    if( y + 50 > innerHeight || y - 115 < 0)
    {
        dy =- dy;
    }
    
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    x+=dx;
    y+=dy;
    ctx.beginPath();
    ctx.arc( x, y, 50, 0, Math.PI * 2);  // desenha uma circunferencia posicao,
    ctx.fillStyle = "green";
    ctx.stroke();
    ctx.fill();
    requestAnimationFrame(anda);
}