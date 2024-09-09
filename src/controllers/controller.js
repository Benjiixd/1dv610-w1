/**
 *
 */
export class Controller {
  /**
   *
   * @param req
   * @param res
   */
  async toPirate (req, res) {
    try {
      console.log(`Received data: ${JSON.stringify(req.body)}`)
      console.log(req.body)
      let text = req.body.text
      text = text.split('')
      /**
       *
       * @param char
       */
      function isConsonant (char) {
        const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
        const consonants2 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

        if (consonants.includes(char) || consonants2.includes(char)) {
          return true
        } else {
          return false
        }
      }

      let pirate = []

      for (let i = 0; i < text.length; i++) {
        if (isConsonant(text[i])) {
          pirate.push(text[i], 'o', text[i])
        } else {
          pirate.push(text[i])
        }
      }

      pirate = pirate.join('')

      console.log(pirate)

      
      res.render("/", {text: pirate})
      //res.send(pirate)
    } catch (err) {
      console.error(err)
    }
  }

  /**
   *
   * @param req
   * @param res
   */
  async fromPirate (req, res) {
    console.log(`Received data: ${JSON.stringify(req.body)}`)
      let text = req.body.text

    text = text.split('')

    /**
     *
     * @param char
     */
    function isConsonant (char) {
      const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
      const consonants2 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

      if (consonants.includes(char) || consonants2.includes(char)) {
        return true
      } else {
        return false
      }
    }

    let pirate = []

    for (let i = 0; i < text.length; i++) {
      if (isConsonant(text[i]) && text[i + 1] === 'o' && text[i] === text[i + 2]) {
        pirate.push(text[i])
        i = i + 2
      } else {
        pirate.push(text[i])
      }
    }

    pirate = pirate.join('')

    console.log(pirate)
    res.send(pirate)
  }

  async get(req, res){
    console.log(req.headers)
    res.render("index")
  }
}
