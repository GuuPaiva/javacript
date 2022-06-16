/**solução 1
function verificarPalindromo(string){
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
 }

 console.log(verificarPalindromo(""));

 //**Solução 2

 function verificarPalindromo2(string){
    if (!string) return "string inexistente";

    for (let i =0; i <string.letgth; / 2; i ++){
        if(string[i] !== string.letgth -1 -i)
        return false;

    }
 }

 console.log(verificarPalindromo2)**/
