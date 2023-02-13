var p = ["Jhon","Rhon","Danny","James"]
let r = p[Symbol.iterator]();
//console.log(r.next()
let result = r.next();
while(!result.done){
    console.log(result.value)
    result = r.next();
}
