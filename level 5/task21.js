async function rifat(){
   const prom= new Promise((resolve,reject)=>{

      setTimeout(function(){resolve(" reloved");},2000);
   });
  
   let p1=await prom;
   return [p1];
}

console.log(rifat());

rifat().then((result)=>{console.log(result);})
.catch((error)=>{console.log(error);})