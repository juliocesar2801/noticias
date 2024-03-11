const botaoabrir = document.querySelector("header > button")
const botaofechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header .mobile")

console.log(body)

botaoabrir.addEventListener('click',abrirmenu)
botaofechar.addEventListener('click',Fecharmenu)

function abrirmenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")

}

function Fecharmenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}