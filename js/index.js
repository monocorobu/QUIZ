//pergunta e resposta 
let pergunta = document.getElementById('pergunta')
let resp1 = document.getElementById('labelcheck1')
let resp2 = document.getElementById('labelcheck2')
let resp3 = document.getElementById('labelcheck3')
let resp4 = document.getElementById('labelcheck4')

//botão

let botaoprox = document.querySelector('#botao_prox')

//placar
let pontos = 0
let placar = 0
let tempo = document.querySelector('#tempo')

//perguntas 

var questoes = [Q0 = {
        nQuestao: 0,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q1 = {
        nQuestao: 1,
        pergunta: "aaaaaa",
        resposta1: "1",
        resposta2: "2",
        resposta3: "3",
        resposta4: "4",
        certa: "",

    }, Q2 = {
        nQuestao: 2,
        pergunta: "bbbbbbb",
        resposta1: "b1",
        resposta2: "b2",
        resposta3: "b3",
        resposta4: "b4",
        certa: "",

    }, Q3 = {
        nQuestao: 3,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q4 = {
        nQuestao: 4,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q5 = {
        nQuestao: 5,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q6 = {
        nQuestao: 6,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q7 = {
        nQuestao: 7,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q8 = {
        nQuestao: 8,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q9 = {
        nQuestao: 9,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q10 = {
        nQuestao: 10,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q11 = {
        nQuestao: 11,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q12 = {
        nQuestao: 12,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q13 = {
        nQuestao: 13,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q14 = {
        nQuestao: 14,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q15 = {
        nQuestao: 15,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q16 = {
        nQuestao: 16,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q17 = {
        nQuestao: 17,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q18 = {
        nQuestao: 18,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q19 = {
        nQuestao: 19,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q20 = {
        nQuestao: 20,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q21 = {
        nQuestao: 21,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q22 = {
        nQuestao: 22,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q23 = {
        nQuestao: 23,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q24 = {
        nQuestao: 24,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q25 = {
        nQuestao: 25,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q26 = {
        nQuestao: 26,
        pergunta: "aaaaaa",
        resposta1: "1",
        resposta2: "2",
        resposta3: "3",
        resposta4: "4",
        certa: "",

    }, Q27 = {
        nQuestao: 27,
        pergunta: "bbbbbbb",
        resposta1: "b1",
        resposta2: "b2",
        resposta3: "b3",
        resposta4: "b4",
        certa: "",

    }, Q28 = {
        nQuestao: 28,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q29 = {
        nQuestao: 29,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q30 = {
        nQuestao: 30,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q31 = {
        nQuestao: 31,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q32 = {
        nQuestao: 32,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q33 = {
        nQuestao: 33,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q34 = {
        nQuestao: 34,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q35 = {
        nQuestao: 35,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q36 = {
        nQuestao: 36,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q37 = {
        nQuestao: 37,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q38 = {
        nQuestao: 38,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q39 = {
        nQuestao: 39,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q40 = {
        nQuestao: 40,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q41 = {
        nQuestao: 41,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q42 = {
        nQuestao: 42,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q43 = {
        nQuestao: 43,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q44 = {
        nQuestao: 44,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q45 = {
        nQuestao: 45,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q46 = {
        nQuestao: 46,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q47 = {
        nQuestao: 47,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q48 = {
        nQuestao: 48,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q49 = {
        nQuestao: 49,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }, Q50 = {
        nQuestao: 50,
        pergunta: "",
        resposta1: "",
        resposta2: "",
        resposta3: "",
        resposta4: "",
        certa: "",

    }]
    /* sorteando qual pergunta vai ser */
let totalDeQuestoes = (questoes.length) - 1
    // este index é o numero da questão ele é aleatorio
let index = Math.floor(Math.random() * 50)
let questao = 'Q' + index
console.log(questao)


/* montando as perguntas na tela */


if (questao == 'Q0') {

} else if (questao == 'Q1') {

    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4


} else if (questao == 'Q2') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q3') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q4') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q5') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q6') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q7') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q8') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q9') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q10') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q11') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q12') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q13') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q14') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q15') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q16') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q17') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q18') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q19') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q20') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q21') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q22') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q23') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q24') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q25') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q25') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q27') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q28') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q29') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q30') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q31') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q32') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q33') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q34') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q35') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q36') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q37') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q38') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q39') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q40') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q41') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q42') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q43') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q44') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q45') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q46') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q47') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q48') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q49') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

} else if (questao == 'Q50') {
    pergunta.textContent = questoes[index].pergunta

    resp1.textContent = questoes[index].resposta1
    resp2.textContent = questoes[index].resposta2
    resp3.textContent = questoes[index].resposta3
    resp4.textContent = questoes[index].resposta4

}




//MONTAR A QUESTÃO

/* pergunta.textContent = questao.nQuestao */