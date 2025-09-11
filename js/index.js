// var a=2;
// console.log(a);
// console.log(a+5);
// function info(nam,age,branch){
//     return `hi, ${nam},my age is ${age} and branch is ${branch}`;
// }
// let ans=info("siddhartha",20,"cse");
// console.log(ans);



// let data = (nam, age, branch) => { return `hi, ${nam},my age is ${age} and branch is ${branch}` };
// console.log(data("sid",20,"it"));

// const info=()=>{
//     let sum=0;
//     for(let i of arguments)
//     {
//         sum+=i;
//     }
//     console.log(sum);
// }
// info(1,2,3,4,5,6);

// }
// let sum=function sum(){
//     let sum=0;
//     for(let i of arguments)
//     {
//         sum+=i;
//     }
//     console.log(sum);
// }
// sum(1,2,3,4,5);

// IIFE
// (function(){
//     console.log("hi");
// })();



function selectLanguage(lang='python'){
    let data;
    if(lang=='java'){
        function javaCompiler(){
            return "java compiler calling";
        }
        data=javaCompiler();
    }
    else if(lang=='c'){
        function cCompiler(){
            return "c compiler calling";
        }
        data=cCompiler();
    }
    else
    {
        data="language not supported";
    }
    return data;
}
console.log(selectLanguage());