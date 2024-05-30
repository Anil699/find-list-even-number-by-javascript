 function findEvens(arr) {
    let evens = []
    //let odds = []
    for (let num of arr) {
        if (num % 2 === 0) {
            evens.push(num)
        }
        //else {
          //  odds.push(num)
        //}
    }
    return evens
    //return odds

    //const numbers = arr.filter(num => num % 2 === 0)
    //   return numbers
    
} 

const arr = [1, 2, 3, 4, 5, 6, 7]

const numbers = findEvens(arr)
console.log(numbers) 


/* function findEvens(arr) {
    let evens = []
    for (let num of arr) {
        if (num % 2 === 0) {
            evens.push(num)
        }
        return evens
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbers = findEvens(arr)
console.log(numbers) */
