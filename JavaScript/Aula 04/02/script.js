function somar(){
    var tn1 = document.getElementById('tntx1')
    var tn2 = document.querySelector('tntx2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.Value)
    var s = n1 + n2 
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`

}