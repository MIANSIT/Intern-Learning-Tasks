let username=prompt("enter username:");
let password=prompt("password:");

async function login(username,password){
  const log=new Promise((resolve,reject)=>{
    setTimeout(function(){
        if(username==="admin" && password==="pass123")
    {
        resolve("correct login"); 
    }
    else{
        reject("incorrect login");
    }
},2000);
  });

  let i;
  try{
     i= log;
    alert(i);
  }
  catch(error)
  {
    alert(error);
  }
  
  return [i];
}

login(username,password) 