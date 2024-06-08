let product=(x,y)=>{
    return x*y
}
console.log(product(3,2))
const person={
    name:"vivek",
    agw:25,
    greet(){
        console.log("hi i am "+ this.name)
    }
}
person.greet()