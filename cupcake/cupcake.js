function chocolate(){
    var quatidade = document.getElementById("quant")
    var res = document.getElementById("res")

if(quatidade.value == 0){
    window.alert("INFORME A QUANTIDADE!")
}else{
    res.innerHTML = `PEDIDO FINALIZADO!<br>
                    ${quatidade.value} UNI....<br>
                     SABOR : CHOCOLATE`
}
}
function baunilha(){
    var quatidade = document.getElementById("quant")
    var res = document.getElementById("res")

if(quatidade.value == 0){
    window.alert("INFORME A QUANTIDADE!")
}else{
    res.innerHTML = `PEDIDO FINALIZADO!<br>
                    ${quatidade.value} UNI...<br>
                     SABOR : BAUNILHA`
}
}
function morango(){
    var quatidade = document.getElementById("quant")
    var res = document.getElementById("res")

if(quatidade.value == 0){
    window.alert("INFORME A QUANTIDADE!")
}else{
    res.innerHTML = `PEDIDO FINALIZADO!<br>
                    ${quatidade.value} UNI...<br>
                     SABOR : MORANGO`
}
}