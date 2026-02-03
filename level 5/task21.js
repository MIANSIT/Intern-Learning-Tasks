async function rifat(){
   const prom= new Promise((resolve,reject)=>{

      setTimeout(function(){resolve("resloved");},2000);
   });
  

   let p1;
   try{
   p1=await prom;
   alert(p1);
   }

   catch(error)
   {
    alert(error);
   }
   return [p1];
}

console.log(rifat());

rifat();