function calcular(){
    var txtv = document.getElementById('txtvel')
    var vel = Number(txtv.value)
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h<p>`
    if(vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade`
    } else {
        res.innerHTML += 'Dirija sempre com segurança!'
    }
}

