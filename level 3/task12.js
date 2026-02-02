let num= prompt("enter the number to get total from 1 to this number:");

let number=num;
let sum,avg;

for(let i=1;i<=number;i++)
{
     sum=(i*(i+1))/2;// n(n+1)/2
     avg=((i*(i+1))/2)/i; // normal average
}
 console.log("total="+sum);
  console.log("total="+avg);
