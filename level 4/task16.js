const prom= new Promise(function(myResolve,myReject)
{
    setTimeout(function()
    { 
      myResolve("Promise resolved successfully!");
    },2000);

});

console.log("Promises created");

prom.then(function(value)
{
  console.log(value);//2 sec por value show korbe
});

