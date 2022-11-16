const text = 'Broke all the rules, played all the fools'



const dryBetterExamples = {
    countLetterInText: (letterTarget: string) => {
        const lowerLetterTarget = letterTarget.toLowerCase()

        const lowerText = text.toLowerCase()

        let result = 0
        for (const letter of lowerText) {
            if (letter === lowerLetterTarget) {
                result++
            }
        }

        return result
    },


}

export default dryBetterExamples