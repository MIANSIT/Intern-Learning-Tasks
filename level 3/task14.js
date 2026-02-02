let number=prompt("enter to check the prime number:");

let prime=1;
for(let i=2;i<number;i++)
{
    if(number%i===0)
    {
        prime=0;
    }
}

if(prime)
{
   
     console.log("prime");
  
}
else{
    console.log(" not prime");
}

    
