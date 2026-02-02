const age=prompt("enter your age");
const prom=new Promise((resolve,reject)=>{
    if(age>=18)
    {
        resolve("Access Granted");
    }
    else{
        reject("Access Denied - you must be 18+");
    }
});

prom .then((result)=>{alert(result);})
 .catch((error)=>{alert(error);})