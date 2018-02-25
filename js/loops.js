//while
console.log('Testes while');

a1 = 1;
console.log('Valor inicial de a = ' + a1);
while (a1++ < 5)
{
    console.log('Valor de a1 quando entra no while = ' + a1);
    a1++;
    console.log('Valor de a1 quando sai do while = ' + a1);
}
console.log('Valor do a1 quando termina o while = ' + a1);

console.log('-----------------------------------');
document.getElementById("rodapeWhile").innerHTML += "teste idiota";