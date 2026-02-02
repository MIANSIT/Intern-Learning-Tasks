let num=prompt("enter the number to do reverse:");

let number=num;
let  rev=0;
let ldigit;

while( number!=0)
{
  ldigit=number%10;
  rev=(rev*10)+ldigit;
  number=parseInt(number/10);// get the logic from  https://www.geeksforgeeks.org/java/java-reverse-number-program/
 
}
console.log("reverse number"+rev);
console.log("real number"+num);