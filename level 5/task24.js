
async function total(){

const stime=Date.now();

async function step1(){
    const prom1=new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Step 1 completed");
        },1000);

    });


    let i= await prom1;
      try{
        console.log(i);
    }

    catch(error)
    {alert(error);}
    return [i];

}
async function step2(){
    const prom2=new Promise((resolve,reject)=>
    {
        setTimeout(function(){
            resolve("step 2 completed");
        },2000);
    });

    let i= await prom2;
      try{
        console.log(i);
    }

    catch(error)
    {alert(error);}
    return [i];
}
async function step3(){
    const prom3=new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("step 3 completed");
        },1000);
    });

    
    let i= await prom3;//let i can not be intefare for {} diffrences
      try{
        console.log(i);
    }

    catch(error)
    {alert(error);}
    return [i];
}

  await step1();
  await step2();
  await step3();
 const etime=Date.now();
 const ttime=(etime-stime)/1000;
 console.log(ttime);
}

total();

