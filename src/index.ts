import dryWrongExamples from "./dry/wrong-example"
import dryBetterExamples from './dry/better-example'

import kissWrongExample from "./kiss/wrong-example"
import kissBetterExample from "./kiss/better-example"

import yagniWrongExample from "./yagni/wrong.example"

console.info("DryExamples \n")

console.log("Wrong")
console.log(dryWrongExamples.countAInText())
console.log(dryWrongExamples.countBInText())


console.log("Best")
console.log(dryBetterExamples.countLetterInText('A'))
console.log(dryBetterExamples.countLetterInText('B'))


console.info("\nDryExamples\n")

console.log("Wrong")
console.log(kissWrongExample(1))

console.log("Best")
console.log(kissBetterExample(1))


console.info("\nYagniExamples\n")

console.log(yagniWrongExample.validate())