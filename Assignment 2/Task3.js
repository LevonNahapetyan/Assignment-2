let x1 = 5;
let y1 = 7; 
let x2 = 3;
let y2 = 5;

if (x1<0 || x2<0 || y1<0 || y2<0 ) {
   console.log("Enter non-negative number")
       
   }
else {
    let length = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
    console.log("Length of the line is "  + length)
}