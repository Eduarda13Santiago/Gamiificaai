let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //Menu fechadi - tem a classe menu-fechado
    //Menu aberto - nao tem a classe menu-fechado

    //Se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        //Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        //Mostrar icone do x
        iconeX.style.display = "inline"
        //Esconder o icone-barras
        iconebarras.style.display = "none"

    } else {
        //Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        //Mostrar icone-barras
        iconebarras.style.display = "inline"
        //Esconder o icone do x
        iconeX.style.display = "none"

    }
}

onresize = () => {

    //Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    //Mostrar icone do x
    iconeX.style.display = "inline"
    //Esconder o icone-barras
    iconebarras.style.display = "none"

}

//Carrossel
let banner = document.querySelector(".banner")

//let slides = [0,1,2]
//slides[0]-> primeiro-banner
//slides[1]-> segundo-banner
//slides[2]-> terceiro-banner
let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    //Remover o slide anterior
    banner.classList.remove(slides[slideAtual])
    //Somar 1 na variavel slideAtual
    slideAtual++

    //Mostrar slide de acordo com o slideAtual
    banner.classList.add(slides[slideAtual])

}

