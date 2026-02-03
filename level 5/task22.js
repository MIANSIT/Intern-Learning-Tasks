let username=prompt("enter username:");
let pass=prompt("password:");

async function login(){
  const log=new Promise((resolve,reject)=>{
    setTimeout(function(){
        if(username==="admin" && pass==="pass123")
    {
        resolve("correct login"); 
    }
    else{
        reject("incorrect login");
    }
},2000);
  });

  let l=await log;
  return [l];
}

login() .then((result)=>{alert(result);})
.catch((error)=>{alert(error);})