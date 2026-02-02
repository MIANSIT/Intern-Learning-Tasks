let text=prompt("enter the string:");

let t;
t=text;
len=[text];
last=text.length;//to calcutae the lastword
let lowcase=t.toLowerCase();
let upcase=t.toUpperCase();
console.log("inputed text:"+t);
console.log("uppercase: "+upcase);
console.log("lowercase: "+lowcase);
console.log("first letter:"+text[0]);
console.log("last letter:"+text[last-1]);//array is always (-1) to lenght

