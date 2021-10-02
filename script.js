function carregar() {
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var heading = document.getElementsByTagName("h1")
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `It's currently ${hora}:${minuto}.`
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'imagens/manha.png'
    document.body.style.backgroundColor = '#d8be88'

}
else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    img.src = 'imagens/tarde.png'
    document.body.style.backgroundColor = '#e9a76d'
}
else {
    // BOA NOITE!
    img.src = 'imagens/noite.png'
    document.body.style.backgroundColor = '#79659f'
}
}
