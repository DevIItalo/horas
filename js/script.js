function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora > 0 && hora < 12){
        //bom dia
        img.src = 'manha.png';
        document.body.style.background = '#ffde61';
    } else if (hora > 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png';
        document.body.style.background = '#f78c46';
    } else {
        //boa noite
        img.src = 'noite.png';
        document.body.style.background = '#26baf2';
    }
}

