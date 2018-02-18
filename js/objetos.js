var txtModelo, txtTemperatura;

function termoestato(model, temp)
{
    this.Modelo = model;
    var Temperatura = parseInt(temp);

    this.getTemperatura = function ()
    {
        txtModelo.value = this.Modelo;
        txtTemperatura.value = Temperatura;
    };

    this.setTemperatura = function (newTemp)
    {
        Temperatura = parseInt(newTemp);
        txtTemperatura.value = Temperatura;
    };

    this.variaTemperatura = function (varTemp)
    {
        Temperatura += parseInt(varTemp);
        if (Temperatura > 100 || Temperatura < -50)
        {
            alert("Cuidado com a temperatura!!!!");
        }
        else
        {
            txtTemperatura.value = Temperatura;
        }
    };
}

function initTermoestato()
{
    txtModelo = document.getElementById("txtModelo");
    txtTemperatura = document.getElementById("txtTemperatura");
    termo1 = new termoestato('Termo-1', 50);
    termo1.getTemperatura();
    termo1.setTemperatura(90);
    termo1.variaTemperatura(-40);
}
