let city="Dhaka";
let condition="Sunny";
async function getWeather(city){

    const ct=new Promise((resolve,reject)=>{
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=23.71&longitude=90.40&current_weather=true`)
        .then(response=>response.json())
        .then(data=>{
            const realt=data.current_weather.temperature;
           resolve(`weather in ${city}:${realt}C ${condition}`);
        })

        .catch(reject);
    });

    let i;
    console.log("Fetching weather...");
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