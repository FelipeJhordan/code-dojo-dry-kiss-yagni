
type User = {
    age: number,
    name: string,
    email: string,
}



const yagniWrongExample = {
    validate: () => {

        const validateEmail = ({ email }: User) => {
            const AT_FIRST_OCCURRENCE = 2
            const hasAtInEmail = email.indexOf('email', AT_FIRST_OCCURRENCE) == -1

            return hasAtInEmail
        }

        const validateName = ({ name }: User) => {
            const BEST_NAME = 'Jhordan'
            const upperBestName = BEST_NAME.toUpperCase()
            const isBestName = upperBestName === name.toUpperCase()

            return isBestName
        }

        const validateAge = ({ age }: User) => {
            const OF_AGE = 18
            const isOfAge = age >= OF_AGE

            return isOfAge
        }

        const validationsInUse: Function[] = [validateEmail, validateAge]

        const user: User = {
            age: 2,
            email: "mockemail@uol.com",
            name: "Jhordan"
        }


        const applyValidators = validationsInUse.reduce((previousValue, validationFn) => {
            return validationFn(user)
        }, true);

        if (!applyValidators) {
            return false
        }
    }
}

export default yagniWrongExample