
//console.log('JavaScript file OK!');  //Para inicialmente verificar que o ficheiro de JS esta a funcionar


//Variaveis para a canvas
var canvas;  //Variavel para guadar a canvas
var canvasWidth = 800;  //Largura da canvas
var canvasHeight = 600;  //Altura da canvas
var c;  //Variavel com que se vao desenhar os objetos na canvas


//Variaveis globais para a bola
var bola;  //Variavel para guardar os dados da bola
var bolasArray = [];  //Cria um array para guardar os valores dos circulos

//Variaveis para a barra
var barra;  //Varivel para guardar os dados da barra

//Variaveis para os contadores
var pontosTotal = 0;
var pontosMax = 0;

/*
 * Criação da canvas e das suas caractristicas
 * largura e altura
 */
canvas = document.getElementById('canvasJogo');  //Pega no elemento canvas da pagina html e coloca na variavel
canvas.width = canvasWidth;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
canvas.height = canvasHeight;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
//console.log(canvas);

c = canvas.getContext('2d');  //contexto da canvas, onde se vao criar as coisas
//console.log(c);

function contador()
{
    pontosTotal += 1;
    if (pontosTotal > pontosMax)
    {
        pontosMax = pontosTotal;
    }
    document.getElementById('pontosTotal').innerHTML = pontosTotal;
    document.getElementById('pontosMax').innerHTML = pontosMax;
}

function Circulo()  //Cria um objeto
{
    /*
    * Valores passados que criam o objetos e as suas caractisticas
    */
    this.x = (canvasWidth / 2);  //Da o valor de bolaX a esta instancia do objeto
    this.y = (canvasHeight / 2);  //Da o valor de bolaY a esta instancia do objeto
    this.vx = (Math.floor(Math.random() * 4) + 1) + 4;  //Velocidade X da bola, vai sempre para a direita
    this.vy = (Math.floor(Math.random() - 0.5) * 8);  //Velocidade y da bola, devido ao -0.5 pode ir para cima ou para baixo
    if ( this.vy < 0)
    {
        this.vy -= 4;
    }
    this.vy += 4
//    this.vy = (Math.floor(Math.random() * 5) - 2) * 3;  //Velocidade y da bola, devido ao -0.5 pode ir para cima ou para baixo - ((Math.random() * 5 ) -2) * 3
//    this.vy = ;  //Velocidade y da bola, devido ao -0.5 pode ir para cima ou para baixo
    this.raio = 30;  //Da o valor do bolaRaio a esta instancia do objeto

    /*
    * Metodo que desenha a figura desejada
    */
    this.desenha = function()  //Metodo para ser chamado e desenhar
    {
        c.beginPath();  //Inicia o desenho na canvas
        c.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);  //Desenha um circulo
        c.strokeStyle = "black";  //Cor da linha
        c.fillStyle = "white";  //Cor de enchimento
        c.stroke();  //Escreve a linha
        c.fill();  //Escreve o enchimento
    };

    /*
     * Metodo que atualiza a figura na canvas
     */
    this.atualiza = function()
    {
        /*
         * Verifica onde esta o circulo
         * SE
         * o valor de bolaX menos o bolaRaio for menor que 0 que dizer que chegou ao fim do lado esquedo da canvas
         * OU
         * o valor de bolaX mais o bolaRaio for maior que o tamanho da janela (innerWidth) quer dizer que chegou ao fim do lado direito da canvas
         */
        if (this.y + this.raio > canvasHeight || this.y - this.raio < 0) //A mesma coisa da condição anterior, mas para os limites superior e inferior
        {
            this.vy = -this.vy;
        }
        if ( this.x + this.raio > canvasWidth )  //Verifica onde esta o circulo e se bate no lado direito
        {
            this.vx = -this.vx;  //Caso alguma das condicoes anteriores seja verdadeira inverte-se a direçao do circulo bolaVelocidadeX
        }

        if ( this.x - this.raio < barra.x && this.y > barra.py && this.y < barra.py + barra.y )  //Verifica onde esta o circulo e se bate no lado esquerdo ou na barra
        {
            this.vx = -this.vx;  //Caso alguma das condicoes anteriores seja verdadeira inverte-se a direçao do circulo bolaVelocidadeX
            this.vx += 0.5;
            this.vy += 0.5;
            contador();

        }

        if ( this.x < 0 - this.raio)
        {
            //bola = null;
            bola = new Circulo();
            pontosTotal = 0;
            document.getElementById('pontosTotal').innerHTML = pontosTotal;

        }
        /*
         * Aos valores bolaX e bolaY que são a posição do circulo
         * soma-se bolaVelocidadeX e bolaVelocidadeY que vão fazer com que o circulo se desloque (velocidade do circulo)
         * Pode dizer-se que bolaVelocidadeX e bolaVelocidadeY são a velocidade do circulo
         */

        this.x += this.vx;
        this.y += this.vy;



        this.desenha();  //Volta a chamar o metodo desenha com os dados de posição do circulo atualizados, o que vai fazer o circulo mover-se
    };
}

function Retangulo()  //Cria um objeto
{
    /*
    * Valores passados que criam o objetos e as suas caractisticas
    */
    this.x = 10;  //Largura da barra
    this.y = 100;  //Comprimento da barra
    this.py = (canvasHeight / 2) - (this.y / 2);  //Posicao inicial da barra
    this.vy = 0;  //Velicidade com que a barra se mexe

    /*
    * Metodo que desenha a figura desejada
    */
    this.desenha = function()  //Metodo para ser chamado e desenhar
    {
        c.beginPath();  //Inicia o desenho na canvas
        c.fillStyle = "black";  //Cor de enchimento
        c.strokeStyle = "black";  //Cor da linha
        c.fillRect(0,this.py,this.x,this.y);
        c.stroke();  //Escreve a linha
        c.fill();  //Escreve o enchimento
    };
    this.atualiza = function()
    {
        //console.log(vy);
        if (this.py >= 0 && this.py <= (canvasHeight - this.y))
        {
            this.py = this.py + this.vy;
        }
        else if (this.py <= 0)
        {
            this.py = 0;
        }
        else if ( this.py >= (canvasHeight - this.y))
        {
            this.py = (canvasHeight - this.y)
        }
        //console.log(this.py);
        this.desenha();  //Volta a chamar o metodo desenha com os dados de posição do circulo atualizados, o que vai fazer o circulo mover-se
    };
}


window.addEventListener('keydown',
    function(event)
    {
        //console.log(event);
        if (event.code === "ArrowUp")
        {
            barra.vy = -8;
        }
        if (event.code === "ArrowDown")
        {
            barra.vy = 8;
        }

    });

window.addEventListener('keyup',
    function(event)
    {
        //console.log(event);
        barra.vy = 0;
    });

function animacao()
{
    requestAnimationFrame(animacao);
    c.clearRect(0, 0, innerWidth, innerHeight);  //Limpa a canvas
    bola.atualiza();  //Chama o metodo atualiza que esta dentro da função circulo
    barra.atualiza();  //Chama o metodo atualiza que esta dentro da função circulo


}

function startGame()
{
    //console.log('Inicio do jogo!!');
    //bola = new Circulo( bolaX, bolaY, bolaVelocidadeX, bolaVelocidadeY, bolaRaio);  //Cria uma instancia do objeto
    bola = new Circulo();  //Cria uma instancia do objeto circulo, cria a bola
    barra = new Retangulo();  //Cria a barra
    animacao();
}