const userd='{name: "John Doe", email: "john@example.com", age: 25}';
const prom= new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve("User data: "+userd);
    },3000);
});

console.log("Loading---");

prom.then((result)=>{console.log(result);})