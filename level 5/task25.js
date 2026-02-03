const orderId=prompt("enter the order ID:");
async function processOrder(orderId){

    const prom =new Promise((resolve,reject)=>{
        setTimeout(function(){

             if(orderId%2===0)
                {
                    resolve("Order processed successfully");
                }
                else{
                    reject("Order processing failed");
                }
        },2000);
});

    try{

      let i=await prom;
         console.log(i);
         alert(i);

     }

     catch(error)
     {
         console.log(error);
         alert(error);
     }
}

processOrder(orderId);