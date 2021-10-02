function carregar() {
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours() + ':' + data.getMinutes()
msg.innerHTML = `It's currently ${hora}.`
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
