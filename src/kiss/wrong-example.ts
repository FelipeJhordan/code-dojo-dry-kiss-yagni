

const faculty = (n: number): number =>
    n <= 1 ? 1 : n * faculty(n - 1)




export default faculty