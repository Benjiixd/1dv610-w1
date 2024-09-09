function toPirate() {    
    let text = 'Hello, World!'

    text = text.split('')

    function isConsonant (char) {
        let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
        let consonants2 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

        if (consonants.includes(char) || consonants2.includes(char)) {
            return true
        } else {
            return false
        }
    }

    let pirate = []

    for(let i = 0; i < text.length; i++) {
        if (isConsonant(text[i])) {
            pirate.push(text[i], 'o', text[i])
        } else {
            pirate.push(text[i])
        }
    }

    pirate = pirate.join('')

    console.log(pirate)
}

function fromPirate() {    
    let text = 'HoHelollolo, WoWororloldod!'

    text = text.split('')

    function isConsonant (char) {
        let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
        let consonants2 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

        if (consonants.includes(char) || consonants2.includes(char)) {
            return true
        } else {
            return false
        }
    }

    let pirate = []

    for(let i = 0; i < text.length; i++) {
        if (isConsonant(text[i]) && text[i + 1] === 'o' && text[i] === text[i + 2]) {
            pirate.push(text[i])
            i = i + 2
        } else {
            pirate.push(text[i])
        }
    }

    pirate = pirate.join('')

    console.log(pirate)
}

fromPirate()