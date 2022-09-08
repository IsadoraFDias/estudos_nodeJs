const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem de programação preferida: ', (language) => {
    if(language === 'Python') {
        console.log('Isso nem é linguagem de programação')
    }else{console.log (`Minha linguagem preferida é ${language}`)}
    readline.close()
})

