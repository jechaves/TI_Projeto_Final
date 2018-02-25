
console.log('JavaScript file OK!');  //Para inicialmente verificar que o ficheiro de JS esta a funcionar

/*
 * Criação da canvas e das suas caractristicas
 * largura e altura
 */
var canvas = document.querySelector('canvas');  //Pega no elemento canvas da pagina html e coloca na variavel
canvas.width = window.innerWidth;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
canvas.height = window.innerHeight;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
var c = canvas.getContext('2d');  //contexto da canvas, onde se vao criar as coisas

var raioMaximo = 100;
var coresArray = ['#111930', '#163540', '#FFBD2B', '#FF6B03', '#7B1323'];
var bolasArray = [];  //Cria um array para guardar os valores dos circulos
var rato = 
        {
            x: undefined,
            y: undefined
        };  //Cria um objeto para guardar as coordenadas do rato

/*
 * Evento que esta a "escuta" do movimento do rato
 */
window.addEventListener('mousemove', 
    function(event)
    {
        rato.x = event.x;
        rato.y = event.y;
//        console.log(rato);
    });  //Cada vez que o rato se mexe o evento dispara e as variaveis do rato são atualizadas

window.addEventListener('resize',
    function()
    {
        canvas.width = window.innerWidth;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
        canvas.height = window.innerHeight;  //Tamanho da canvas o tamanho de toda a janelo do browser, do lado esquerdo o browser por defeito tem 8px, é preciso alterar no CSS
        init();
    });

function Circulo(x, y, dx, dy, raio)  //Cria um objeto
{
    /*
    * Valores passados que criam o objetos e as suas caractisticas
    */
    this.x = x;  //Da o valor de x a esta instancia do objeto
    this.y = y;  //Da o valor de y a esta instancia do objeto
    this.dx = dx;  //Da o valor de dx (movimento do objecto) a esta instancia do objeto
    this.dy = dy;  //Da o valor de dy (movimento do objecto) a esta instancia do objeto
    this.raio = raio;  //Da o valor do raio a esta instancia do objeto
    this.raioMinimo = raio;
    this.cor = coresArray[Math.floor(Math.random() * coresArray.length)];
    
    /*
     * Metodo que desenha a figura desejada
     */
    this.desenha = function()  //Metodo para ser chamado e desenhar
    {
        c.beginPath();  //Inicia o desenho na canvas
        c.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);  //Desenha um circulo
        c.fillStyle = this.cor;
        c.fill();
        //c.strokeStyle = "blue";  //Da cor a linha que desenha a figura
        //c.stroke();  //"Escreve" a figura na canvas
    };
    
    /*
     * Metodo que atualiza a figura na canvas
     */
    this.atualiza = function()
    {
        /*
         * Verifica onde esta o circulo
         * SE
         * o valor de x menos o raio for menor que 0 que dizer que chegou ao fim do lado esquedo da canvas
         * OU
         * o valor de x mais o raio for maior que o tamanho da janela (innerWidth) quer dizer que chegou ao fim do lado direito da canvas
         */
        if ( this.x - this.raio < 0 || this.x + this.raio > innerWidth )  //Verifica onde esta o circulo
            {
                this.dx = -this.dx;  //Caso alguma das condicoes anteriores seja verdadeira inverte-se a direçao do circulo dx
            }
        if (this.y + this.raio > innerHeight || this.y - (this.raio + 65) < 0) //A mesma coisa da condição anterior, mas para os limites superior e inferior
            {
                this.dy = -this.dy;
            }
        /*
         * Aos valores x e y que são a posição do circulo
         * soma-se dx e dy que vão fazer com que o circulo se desloque (velocidade do circulo)
         * Pode dizer-se que dx e dy são a velocidade do circulo
         */
        this.x += this.dx;
        this.y += this.dy;
        
        /*
         * Interatividade como rato
         */
        if (rato.x - this.x < 50 && rato.x - this.x > -50 && rato.y - this.y < 50 && rato.y - this.y > -50)  //verifica a posisão do rato em relação a bola
        {
            if ( this.raio < raioMaximo)
            {
                this.raio += 2;  //Se a distancia for inferior ao valor acima testado aumenta o raio da bola
            }
        }
        else if (this.raio > this.raioMinimo)
        {
            this.raio -= 0.5;
        }
        
        
        this.desenha();  //Volta a chamar o metodo desenha com os dados de posição do circulo atualizados, o que vai fazer o circulo mover-se
    };

}






//console.log(bolasArray);
//var bola = new Circulo( x, y, dx, dy, raio);  //Cria uma instancia do objeto

function init()
{
    bolasArray = [];
    for (var i = 0; i < 1500; i++) //Corre o loop i vezes e por cada uma cria um circulo
    {
        /*
         * valores iniciais para a criação do circulo
         */
        var raio = ((Math.random() * 10) + 5);
        var x = ((Math.random() * (innerWidth - (raio * 2))) + raio);  //O valor x e gerado aleatoriamente e como vai de 0 a 1 multiplicado pelo tamanho da canvas da sempre um valor inferior a propria canvas
        var y = ((Math.random() * (innerHeight - (raio * 2))) + (raio + 65));  //O valor y e gerado aleatoriamente e como vai de 0 a 1 multiplicado pelo tamanho da canvas da sempre um valor inferior a propria canvas
        var dx = (Math.random() - 0.5) * 2;  //O valor da velocidade é gerado aleatoriamente (entre 1 e 10)
        var dy = (Math.random() - 0.5) * 2;  //O valor da velocidade é gerado aleatoriamente (entre 1 e 10)
        bolasArray.push(new Circulo( x, y, dx, dy, raio));  //Cada vez que o ciclo corre cria uma bola e o valor é colocado no array

    }
}

function animacao()
{
    requestAnimationFrame(animacao);  //A funcao chama-se a si propria criando um loop
    c.clearRect(0, 0, innerWidth, innerHeight);  //Limpa a canvas antes da proxima animacao
    for (var i = 0; i < bolasArray.length; i++)  //Corre todo o array
    {
        bolasArray[i].atualiza();  //Cada bola do Array é atualizada para a nova posição
    }
    
    //bola.atualiza();  //Chama o metodo atualiza que esta dentro da função circulo
 
}

init();
animacao();  //Chama a função animação
