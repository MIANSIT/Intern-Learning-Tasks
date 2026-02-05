const accid = prompt("Enter your account id:");
let balance = 1000;
let keeprunning = true;
let history=[];

function deposit(dp)
{
    return new Promise((resolve,reject)=>{

        setTimeout(function(){
             if(dp>=500 && dp<=100000)
              {
                balance+=dp;
                resolve("balance"+balance);
                history=history.concat("deposit:"+dp);
              }

              else{
                reject("balance is large");
              }
        },1000);
    });

}

function  withdraw(wd)
{
   return new Promise((resolve,reject)=>{
    setTimeout(function(){
           if(wd<=balance && wd>0)
            {
              balance-=wd;
             resolve(",success.balance left:"+balance);
             history=history.concat("witdraw: "+wd);
            }
            else{
             reject("amount is much more than current amout");
            }

    },1000);
   });
}

function  transiction()
{
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
        let h=history.join();
        if(history.length===0)
        {
            resolve("no histiory");
        }
        else{
           reject("histroy:"+h);
        }
           
    },1000);
});
}


if (accid === "1234") 
{
     async function atm()
     {
        while(keeprunning)
     {
        let action=prompt("1.check banalnce\n 2.deposit money\n 3.withdraw money\n 4.transiction history\n 5.exit");
      try{
        if(action==="1")
           {
             alert("Balance: "+balance);
             
           }
         else if(action==="2")
          {
            let dp=Number(prompt("enter the deposite amoun(500-100000)):"));
            await deposit(dp);
            alert("deposit successfully");
           
          }

         else if(action==="3")
          {
             let wd=Number(prompt("enter the withdraw amount:"));
             await withdraw(wd);
             alert("withdraw successfully");
             
          }

          else if(action==="4")
         {
           await transiction();
         }

         else if(action==="5")
         {
              keeprunning=false;
         }
       
     }
     catch(error)
     {
        alert(error);
     }
   }
}


    atm();

}


else
{
    alert("Incorrect Account ID.");
}





