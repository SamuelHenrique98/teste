let msg = ''

function time(msg) {
    setTimeout(function(){
        console.log(msg);
    }, 2000);
}

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}

const deckJogador = [
    'carta 1',
    'carta 2',
    'carta 3',
    'carta 4',
    'carta 5',
    'carta 6',
    'carta 7',
    'carta 8',
    'carta 9',
    'carta 10',
    'carta 11',
    'carta 12'
]

const deckOponente = [
    'carta 1',
    'carta 2',
    'carta 3',
    'carta 4',
    'carta 5',
    'carta 6',
    'carta 7',
    'carta 8',
    'carta 9',
    'carta 10',
    'carta 11',
    'carta 12'
]

let deckJogEmb = shuffle(deckJogador)

let deckOpEmb = shuffle(deckOponente)

let maoJog = []


console.log(deckJogEmb);

// console.log(deckOpEmb);

// Turnos
for (let index = 0; index < 6; index++) {
    
    if (index == 0) {
        msg = 'Campo 1 revelado'
        maoJog = [deckJogEmb[0], deckJogEmb[1], deckJogEmb[2]]
        console.log(maoJog);
        time(msg)
    }

    if (index == 1) {
        msg = 'Campo 1 revelado'
        time(msg)
    }

    if (index == 2) {
        msg = 'Campo 1 revelado'
        time(msg)
    }

    if (index == 5) {
        msg = 'Fim de jogo'
        time(msg)
    }
}