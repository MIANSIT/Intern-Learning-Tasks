const value=new Promise((resolve,reject)=>
    {
      const number=Math.random();
      if(number>0.5)
      {
        resolve("Success!");
      }
      else{
        reject("Failed!");
      }
    }
);

value .then((result)=> {console.log(result);})
.catch((error)=>{console.log(error);})