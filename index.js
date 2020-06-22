function hash (key, arrayLen){
    let total = 0
    for (let char of key) {
        //map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}



class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let_PRIME = 31;
        for(let i=0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) -96
            total = (total*_PRIME + value) %this.keyMap.length;          //Template
        }
        return total;
    }
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value])
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i=0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }

}



// let a = 3     //declaring a with value of 3
// function addTwo(x) {     //creating function with addtwo as the name, adding x as a parameter
//     let ret = x + 2     //setting variable 'ret' to x + 2
//     return ret            //returning the outcome
// }
// let b = addTwo(a)   //setting the function addTwo, to b
// console.log(b)        //printing the variable b, which is the addTwo function which will return the result of the function.

// let val1 = 2
// function multiplyThis(n) {
//     let reg = n * val1
//     return reg 
// }
// let multiplied = multiplyThis(6)
// console.log('example of scope:', multiplied)


// let val = 7   //setting 'val' to the value 7
// function createAdder() {    //creating function called createAdder
//     function addNumbers(a, b) {  //creating another function called addNumbers with 2 parameters 'a, b'
//         let ret = a + b   //declaring another variable inside of function called 'ret' with the value of adding a + b
//         return ret   //returning the outcome of ret
//     }
//     return addNumbers //returning the function addNumbers
// }
// let adder = createAdder()  //setting 'createAdder' function to 'adder' 
// let sum = adder(val, 8)   //setting 'sum' to be 'adder' with the value of, the 'val' variable and the number 8
// console.log('example of function returning a function: ', sum)

function createCounter(){ //creating the function, no parameters
    let counter = 0   //declaring 'counter' with the value of 0
    const myFunction = function(){  //creating an anonymous function inside of function called 'myFunction'
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)