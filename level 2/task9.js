let weight=prompt("Enter the weight in Kg:");
let height=prompt("Enter the height in meter:");

let BMI=weight/(height*height);

if(BMI<18.5)
{ alert("UnderWeight"); }
else if(BMI>=18.5 && BMI<=24.9)
{ alert("Normal"); }
else if(BMI>=25 && BMI<=29.9)
{alert("Overweight");}
else if(BMI>=25 && BMI<=29.9)
{alert("Overweight");}
else if (BMI>=30)
{alert("Obese");}

