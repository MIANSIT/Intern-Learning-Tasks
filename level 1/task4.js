let by=prompt("enter the birth year");
let bm=prompt("enter the birth month(1-12):");//in number
let bd=prompt("enter the birth day:(1-31)");

let ty=prompt("enter today year");
let tm=prompt("enter current month(1-12):");//in number
let td=prompt("enetr the birth day(1-31)");

let b=by;
let t=ty;
let bdate=bd;

let B=bm;
let T=tm;
let tdate=td;

let age,month,day,lived;

age =t-b;
month =T-B;
day=tdate-bdate;
lived=(age*365)+(month*30)+day;


console.log("Age:"+age+" month"+month+" day"+day);
console.log("days lived:"+lived);