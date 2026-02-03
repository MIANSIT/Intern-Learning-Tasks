let city="Dhaka";
let temp="25C";
let condition="Sunny";
//was not sure to how to make a  api
async function getWeather(city){

    const ct=new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("weather in: "+city+":"+temp+","+condition);
        },3000);
    });

    let i;
    console.log("Fetching weather for "+city);
    try{
        i=await ct;
        console.log(i);
    }

    catch(error)
    {
        console.log(error);
    }
    return [i];
}

getWeather(city);