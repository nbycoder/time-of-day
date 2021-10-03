function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    if (minute < 10) {
        minute = '0' + minute
    }
    var clock = hour + ':' + minute
    msg.innerHTML = `It's currently ${clock}.`
    if (hour >= 0 && hour < 12) {
        // GOOD MORNING!
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#d8be88'
    
    }
    else if (hour => 12 && hour <= 18) {
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
