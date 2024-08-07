var setaDireita = window.document.getElementById("setadireita")
var Samantha = window.document.getElementById("Samantha")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Samantha.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style = "display:flex; margin-top:60px"
}


function RolarParaEsquerda() {
    Samantha.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style = "display:flex; margin-top:60px"
    setaEsquerda.style ="display:none"
}