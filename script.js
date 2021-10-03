function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var time = data.getHours()
    var clock = time + ':' + data.getMinutes()
    msg.innerHTML = `It's currently ${clock}.`
    if (time >= 0 && time < 12) {
        // GOOD MORNING!
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#d8be88'
    
    }
    else if (time => 12 && time <= 18) {
        // GOOD AFTERNOON!
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#e9a76d'
    }
    else {
        // GOOD EVENING!
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#79659f'
    }
    }    
