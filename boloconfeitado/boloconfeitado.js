function p(){
    var bolo = window.document.getElementsByName("bolo")
    var tamanho = ""
    var res = document.getElementById("res")
    res.innerHTML = "TAMANHO : PEQUENO <br>"
    var sabor = document.getElementsByName("sabor")
var saboresc = " "
if(sabor[0].checked){
    saboresc = "CHOCOLATE"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[1].checked){
    saboresc = "CASTANHA"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[2].checked){
    saboresc = "PRESTÍGIO"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[3].checked){
    saboresc = "LEITE NINHO"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[4].checked){
    saboresc= "COCO"
    res.innerHTML += `SABOR : ${saboresc}`
}
}
function m(){
    var bolo = window.document.getElementsByName("bolo")
    var tamanho = ""
    var res = document.getElementById("res")
    res.innerHTML = "TAMANHO : MÉDIO<br>"
    var sabor = document.getElementsByName("sabor")
var saboresc = " "
if(sabor[0].checked){
    saboresc = "CHOCOLATE"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[1].checked){
    saboresc = "CASTANHA"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[2].checked){
    saboresc = "PRESTÍGIO"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[3].checked){
    saboresc = "LEITE NINHO"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[4].checked){
    saboresc= "COCO"
    res.innerHTML += `SABOR : ${saboresc}`
}
}
function g(){
    var bolo = window.document.getElementsByName("bolo")
    var tamanho = ""
    var res = document.getElementById("res")
    res.innerHTML = "TAMANHO : GRANDE <br>"
    var sabor = document.getElementsByName("sabor")
var saboresc = " "
if(sabor[0].checked){
    saboresc = "CHOCOLATE"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[1].checked){
    saboresc = "CASTANHA"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[2].checked){
    saboresc = "PRESTÍGIO"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[3].checked){
    saboresc = "LEITE NINHO"
    res.innerHTML += `SABOR : ${saboresc}`
}else if(sabor[4].checked){
    saboresc= "COCO"
    res.innerHTML += `SABOR : ${saboresc}`
}
}
