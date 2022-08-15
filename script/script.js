function start () {
    const img = document.querySelector(`#img`)

    const pergunta1 = String(window.prompt(`Qual é a capital do brasil? `))
       if(pergunta1 == 'Brasilia' || pergunta1 == 'brasilia') {
        window.alert(`Acertou!!`)
       } else {
        window.alert(`Errou!!`)
       }

    const pergunta2 = String(window.prompt(`Em qual Planeta estamos vivendo ? `))
    if(pergunta2 == 'Terra' || pergunta2 == 'terra') {
        window.alert(`Acertou!!`)

    } else {
        window.alert(`Errou!!`)
    }

    const pergunta3 = String(window.prompt(`Qual jogador de futebol conquistou mais copas do mundo como jogador de futebol profissional? `))
    if(pergunta3 == 'Pelé' || pergunta3 == 'pelé') {
        window.alert(`Acertou!!`)
    } else {
        window.alert(`Errou!!`)
    }

    const pergunta4 = Number(window.prompt(`Em que ano acabou a segunda guerra mundial? ex.. 1000 `))
    if(pergunta4 == '1945') {
        window.alert(`Acertou!!`)
    } else {
        window.alert(`Errou!!`)
    }

    const pergunta5 = Number(window.prompt(`Em que ano aconteceu a pandemia de gripe espanhola? ex.. 1000`))
    if(pergunta5 == '1918') {
        window.alert(`acertou!!`)
    } else {
        window.alert(`errou!`)
    }

    if(pergunta1 == 'Brasilia' || pergunta1 == 'brasilia' && pergunta2 == 'Terra' || pergunta2 == 'terra' && pergunta3 == 'Pelé' || pergunta3 == 'pelé' && pergunta4 == '1945' && pergunta5 == '1918') {
        window.alert(`Parabéns você está aprovado!!!`)

        img.src = `imagens/aprovado.png`



    } else {
        window.alert(`Você está reprovado!`)

        img.src = `imagens/reproved.png`


    }


    










}