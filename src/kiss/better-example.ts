

const faculty = (number: number): number => {
    const isSmallerThanOne = number <= 1
    if (isSmallerThanOne) {
        return 1
    }

    return number * faculty(number - 1)
}




export default faculty