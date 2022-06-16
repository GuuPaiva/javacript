function verificarPais(){
    var txtpais = document.getElementById('txtpais').value
    var veri = document.querySelector('div#veri')
    veri.innerHTML = `Você mora no ${txtpais}`
    if (txtpais == 'Brasil'){
        veri.innerHTML != "Você é brasileiro"
    } else{
        veri.innerHTML != "Você é estrangeiro"
    }
}


