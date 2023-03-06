function Funcao() {

    var nome = document.getElementById("nome").value;
    var res =  "Prazer em conhece-lo!   "
    document.getElementById("respon").innerHTML = res + nome;

}

function cor() {

    var ren = document.getElementById("r2").value;
    var res 
    if(ren == 's')
    {

        res = "Que otimo, fui programado utilizando java script e html com um pouquinho de css";
    }

    

    else if(ren == 'n'){

        res = "que pena, programacao pode ser complicado as vezes";

    }

    else{

        res = "Resposta nao encontrada tente novamente"

    }
    document.getElementById("rer").innerHTML = res

}
