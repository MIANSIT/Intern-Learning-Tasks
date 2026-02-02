const prom1=new Promise((resolve,reject)=>{
     setTimeout(function(){
        resolve("First task done");
     },1000);
});
const prom2=new Promise((resolve,reject)=>{
   setTimeout(function(){
    resolve("Second task done");
   },2000);
});
const prom3=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Third task done");
    },1500);
});

Promise.all([prom1,prom2,prom3]).then((result)=>{console.log(result);})
.catch((error)=>{console.log(error);})
