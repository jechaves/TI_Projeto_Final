
function iniciar(){
    var frm = document.getElementById("formulario");
    var altura = frm.txtaltura.value;
    var peso = frm.txtpeso.value;
    var imc = peso/(altura * altura);
    alert(imc.toFixed(2));
}