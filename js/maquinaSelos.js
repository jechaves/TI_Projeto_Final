/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcular(){
    var frm = document.getElementById("formulario01");
    var valor = parseInt(frm.quantia.value);
    var divisao = Math.floor(valor / 5);
    var resto = valor % 5;
    var s3 = 0;
    var s5 = 0;
    
    if ((valor >= 5 || valor == 3) && valor != 7){
        switch(resto){
            case 0:
                s3 = 0;
                s5 = divisao;
                break;
            case 1:
                s3 = 2;
                s5 = divisao - 1;
                break;
            case 2:
                s3 = 4;
                s5 = divisao - 2;
                break;
            case 3:
                s3 = 1;
                s5 = divisao;
                break;
            case 4:
                s3 = 3;
                s5 = divisao - 1;
                break;
        }
        
        
        document.getElementById("selos3").innerHTML = s3;
        document.getElementById("selos5").innerHTML = s5;
    }
    else {
    alert("O valor que introduziu não é valido!");
    }
}
