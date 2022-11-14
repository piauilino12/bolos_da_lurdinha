function finalizar(){
    var fnum = document.getElementById('quantidade')
    var res = document.getElementById("res")
    var saboresc = document.getElementsByName("sabor")
    var sabor = " "
    if(fnum.value == 0){
        window.alert("Informe a Quantidade!")
    }else{
        if(saboresc[0].checked){
            sabor = "Chocolate"
            res.innerHTML = `PEDIDO FINALIZADO!<br>
                            QUANTIDADE : ${fnum.value} uni<br>
                            SABOR : ${sabor}`
        }else if(saboresc[1].checked){
            sabor = "Castanha"
            res.innerHTML = `PEDIDO FINALIZADO!<br>
            QUANTIDADE : ${fnum.value} uni<br>
            SABOR : ${sabor}`
        }else if(saboresc[2].checked){
            sabor = "Leite Ninho"
            res.innerHTML = `PEDIDO FINALIZADO!<br>
            QUANTIDADE : ${fnum.value} uni<br>
            SABOR : ${sabor}`
        }else if(saboresc[3].checked){
            sabor = "Casadinho"
            res.innerHTML = `PEDIDO FINALIZADO!<br>
            QUANTIDADE : ${fnum.value} uni<br>
            SABOR : ${sabor}`
        }else if(saboresc[4].checked){
            sabor = "Coco"
            res.innerHTML = `PEDIDO FINALIZADO!<br>
            QUANTIDADE : ${fnum.value} uni<br>
            SABOR : ${sabor}`
        }
    }
}

function chocolate(){
    
}
