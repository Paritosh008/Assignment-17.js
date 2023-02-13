function nextfunc(str){
let itr = str[Symbol.iterator]();
let result = itr.next()
console.log(result);
while(!result.done){
    console.log(result.value)
    result = itr.next();
}

}

let str = "BlockChain"
nextfunc(str);