console.log('###################################');
//Teste

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

//do while
console.log('Testes do while');
a2 = 1;
console.log('Valor inicial de a2 = ' + a2);
do
{
    console.log('valor de a2, quando entra no do = ' + a2);
    a2++;
    console.log('valor de a2, quando sai do do = ' + a2);
}
while ( a2++ < 5);
console.log('valor de a2, quando sai do while = ' + a2);

console.log('-----------------------------------');

//for
console.log('Testes for');
for ( a3 = 1; a3 < 5; a3++)
{
    console.log('valor de a3, quando entra no for = ' + a3);
    a3++;
    console.log('valor de a3, quando sai no for = ' + a3);
}
console.log('valor de a3, quando termina o for = ' + a3);

console.log('###################################');

//Arrays
console.log('Testes de arrays');
console.log('###################################');
var arr1 = [1,2,3,4,5,6];  //Cria uma array
console.log('array1 = ' + arr1);
var arr2 = new Array(9,8,7,6,5,4);  //Cria uma array é igual ao metodo anterior
console.log('array2 = ' + arr2);
console.log('-----------------------------------');
console.log('typeOf -> Tipo de variavel array = ' + typeof arr1);
console.log('-----------------------------------');
console.log('[] -> array1 elemento 0 = ' + arr1[0]);  //Mostra o elemento da array, comeca a contar do 0
console.log('-----------------------------------');
console.log('Length -> array1 tamanho = ' + arr1.length);  //Da o tamanho da array, não comeca a contar do 0
console.log('-----------------------------------');
console.log('Sort -> array2 ordenada = ' + arr2.sort());  //Ordena a array
console.log('-----------------------------------');
console.log('Reverse -> array1 invertida = ' + arr1.reverse());  //Inverte a array
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
var pushArray1 = arr1.push(8);  //Adiciona o numero 8 no fim da array
console.log('Push() -> array1 adiciona o numero 8 = ' + arr1);
console.log('Push() -> Devolve o novo conprimento da array1 = ' + pushArray1);
arr1[arr1.length] = 9;  //Adiciona o numero 9 no fim da array, como a contagem do tamanho comeca no 1 o retorno do tamanho e sempre superior ao maior index da mesma
console.log('arr1[arr1.length] -> array1 adiciona o numero 9 = ' + arr1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
var popArray1 = arr1.pop();  //Elimina o ultimo elemento da array, se fizermos o display mostra o elemento que eliminamos
console.log('Pop -> Elimina o ultimo elemento da array1 = ' + arr1);
console.log('Pop -> Devolve o elemento eliminado  = ' + popArray1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
var shiftArray1 = arr1.shift();
console.log('Shift -> Elimina o primeiro elemento da array = ' + arr1);
console.log('Shift -> Devolve o elemento eliminado = ' + shiftArray1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
var unshiftArray1 = arr1.unshift(0);
console.log('Unhift -> Adiciona um novo primeiro elemento aa array = ' + arr1);
console.log('Unhift -> Devolve o novo tamanho da array = ' + unshiftArray1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
arr1[3] = 4444;
console.log('Array[x] -> Muda o valor do elemeto [3] ou 4 da array = ' + arr1);
console.log('Valor da array1 = ' + arr1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
arr1.splice(1,2);
console.log('Splice(x, y) -> Elimina os elementos apartir da posicao x (1) e o y(2) é o numero de elementos a eliminar= ' + arr1);
arr1.splice(2, 0, 'a', 'b');
console.log('Splice(x, y, a, b) -> Adiciona os elementos atraz da posicao x (2) e o y(0) é o numero de elementos a eliminar= ' + arr1);
arr1.splice(1, 4, "z");
console.log('Splice(x, y, a, b) -> Adiciona os elementos atraz da posicao x (1) e o y(4) é o numero de elementos a eliminar= ' + arr1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5];
arr2 = [6,7,8,9,0];
console.log('Array1 = ' + arr1);
console.log('Array2 = ' + arr2);
var concatArray1 = arr1.concat(arr2);
console.log('Concat() -> Junta as duas arraya numa nova variavel, não altera as existentes = ' + concatArray1);
concatArray2 = concatArray1.concat(['a', 'b', 'c']);
console.log('Concat() -> Junta numa nova array a array1 e a, b, c, não altera as existentes = ' + concatArray2);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
var sliceArray1 = arr1.slice(2);
console.log('Slice(x) -> Retorna a array a partir da posicao x(2) = ' + sliceArray1);
var sliceArray2 = arr1.slice(2,4);
console.log('Slice(x, y) -> Retorna a array a partir da posicao x(2) e ate mas não incluindo a posição y(4) = ' + sliceArray2);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
joinArray1 = arr1.join('-');  //Se não atribuirmos a funcao join a uma variavel so o display da mesma é afetado
console.log('Join(x) -> Separa os elementos da array com o carater x = ' + joinArray1);
console.log('Join -> Tipo de variavel returnado = ' + typeof joinArray1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
stringArray1 = arr1.toString();  //Se não atribuirmos a funcao toString a uma variavel so o display da mesma é afetado
console.log('toString() -> Transforma a array1 numa string = ' + stringArray1);
console.log('toString() -> Tipo de variavel returnado = ' + typeof stringArray1);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
console.log('Array1 = ' + arr1);
function myFilter(arr)
{
    return arr >= 4;
}
var filterArray1 = arr1.filter(myFilter);
console.log('Filter(func) -> Chama a função func que vai retornar (>= 4) e criar uma nova array com os elementos que passarem = ' + filterArray1);
var filterArray2 = arr1.filter(a => a >= 2);  // usa a funcao abreviada
console.log('Filter -> Tambem se pode fazer logo o filtro/funcao (a=>a>=2) dentro do filtro = ' + filterArray2);
console.log('-----------------------------------');
arr1 = [1,2,3,4,5,6];
var forEachArray1 = [];
console.log('Array1 = ' + arr1);
function myForForEach(v, i, a)
{
    if ( v >= 3)
    {
        console.log('ForEach -> Valores que passaram na confirmação (>=3): Index: ' + i + ' Valor: ' + v + ' Array: ' + a);
        forEachArray1.push(v);
    }

}
console.log('ForEach -> Para cada elemento da array cahama a funcao e passa os parametros: Valor, Index e Array')
arr1.forEach(myForForEach);
console.log('ForEach -> Array = ' + forEachArray1);
console.log('-----------------------------------');

//percorre a array
console.log('Percore os elementos da array');
for ( i = 0; i < arr1.length; i++)
{
    console.log('O elemento ' + i + ' da array1 é = ' + arr1[i]);
}
console.log('-----------------------------------');

