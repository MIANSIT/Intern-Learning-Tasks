let range=prompt("enter range for fibonacci:");

let sum;
let a=0;// tnitial calcution start from 0 and 1
let b=1;
for(i=0;i<range;i++)
{ 
   sum=a+b;
   a=b;
   b=sum;
   console.log(" "+sum);
}


