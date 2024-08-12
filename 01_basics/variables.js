/*
primitive datatypes:  7 types
String,Number,Boolean,null,undefined,Symbol,BigInt
//reference (non primitive)
array,objects,functions
*/

const score=100
const scorev=100.3
const islogin=false
const outside=null
let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);
//const bigno=456789036474833n

const heros=['shaktiman','naagraj','doga']
let obj={
    name:"sneha",
    age:21
}

const myfun = function(){
    console.log("hello world"); 
}

console.log(typeof heros);
//---------stack(primitive),  heap(non primitive)


let myname="sneha gauni"
let anothername=myname
anothername="gauni sneha"
console.log(myname);

console.log(anothername);

let user1={
    email:"snehagauni@gmail.com",
    upi:"user@ybl"
}

let user2=user1
user2.email="gaunisneha123@.com"
console.log(user1.email);
console.log(user2.email);







// node 01_basics/variables.js
