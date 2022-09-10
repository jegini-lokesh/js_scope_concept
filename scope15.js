// --------------------------start of scope concept history------------------before es6 we havw local scopae and global scope are present the other name for global scope is functional scope
// after es6 we receive new scope that is block scope.
// --------------------------end of scope concept history------------------
//------------------------ start local scope example--------------------------
//definition: A variable which is declare insde a function that variable act like a local scope (we can not use that variable out side of the function block)
// function local() {
//     var a=10;
// }
// var c=a+30; //we receive error a is not define ani .
// alert(c);
// console.log(c);
// document.write("welocme local scope")
//------------------------ end local scope example--------------------------

//------------------------start global scope example--------------------------
//definition: A variable declare inside a outside a block and we can use where we want that is global scope.
//  function globla() {
//      c=a+30;
//      alert(c);
//      console.log(c);
//  }
//  var a=50;
// globla()

//------------------------ end global scope example--------------------------
// --------------------------- start conclusion of global in (function and block scope)-----------------
// var a=10;
// let b=20;
// const c=50;
// {
//     alert(a);
//     alert(b);
//     alert(c);
// }
//this three key word satisify globla scope property

// ---------------------------end conclusion of global in (function and block scope)-----------------
//------------------------------ start local scope vs global scope priority 
// local scope is first priority (for same variable we declare local and global and we check)
// function local() {
//     var x=100;//10:30
//     alert(x)
// }
// var x=200;
// local()
//eg-2
// function local() {
//     alert(x)
// }

// { //here we declare x in block( block means define someting in curly bracess (if,for,if else,while  ))
//     var x=200;
// }
// local()

//------------------------------ end local scope vs global scope priority 
/// how the var,let const act inside (function blok and block)-----------------
// {
//     var x=20;
// }
// var c=x+50;
// alert(c);
// function keyWord(){
//     var a=10;
// }
// var d=a+50; //a is not defined erroe shows
// alert(d)
//note "var" has a  global scope if we declare nside block.
//if we delare a varibale inside a fuction block with any key word we cant use out side function.
//here i discuss about "let" and "const" (this two are block level scope)
// function keyword(){
//     alert(x); //x is not define
//     console.log(x)
//     alert(y);
//     console.log(y) //y si not define
// }
//  keyword()
// {
//  let x=50; //this two key words are block scope if declase inside a block we can able to acess out of block
//  const y=100;
// }
//eg-2
{
    let x=50; //this two key words are block scope if declase inside a block we can able to acess out of block
    const y=100;
    var z=200;// this not not consis block scope 
}
  alert(z);//this show not define
  alert(y);//this show not define
  alert(x); //this will give output
