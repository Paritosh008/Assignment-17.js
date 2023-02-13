function iteratechar(str){

    let pointstr =str[Symbol.iterator]();
    let result = pointstr.next();
    while(!result.done){
    console.log(result.value)
    result = pointstr.next();

    }

}
let str = "iNeuron";
iteratechar(str);
