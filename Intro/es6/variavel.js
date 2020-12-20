// eu não posso alterar esse valor ao decorrer do código, essa é a função do const
const serie = 'Friends'

if(true){
    // o let mantém a variável apenas dentro do bloco, se eu tentanr imprimir for do if da erro
    let serie2 = 'GOT'
    console.log(serie2)
}

console.log(serie)
