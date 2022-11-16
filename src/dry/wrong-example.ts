const text = 'Broke all the rules, played all the fools'



const dryWrongExamples = {
    countAInText: () => {
        const LETTER_TARGET = 'A'
        const lowerLetterTarget = LETTER_TARGET.toLowerCase()

        const lowerText = text.toLowerCase()

        let result = 0
        for (const letter of lowerText) {
            if (letter === lowerLetterTarget) {
                result++
            }
        }

        return result
    },

    countBInText: () => {
        const LETTER_TARGET = 'B'
        const lowerLetterTarget = LETTER_TARGET.toLowerCase()

        const lowerText = text.toLowerCase()

        let result = 0
        for (const letter of lowerText) {
            if (letter === lowerLetterTarget) {
                result++
            }
        }

        return result
    }
}

export default dryWrongExamples