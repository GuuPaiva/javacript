function clicar(){
    var area = document.getElementById('area')
    area.innerText = "Deus te ama"
    area.style.background = "darkviolet"
}

function entrar(){
    var area = document.getElementById('area')
    area.innerText = "Jesus"
    area.style.background = "aqua"
}

function sair(){
    var area = document.getElementById('area')
    area.innerText = "Fica com Deus"
    area.style.background = "blue"
}

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)