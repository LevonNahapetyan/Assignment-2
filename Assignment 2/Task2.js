let a = 2;
let b = 4;
let c = 2;

console.log(a + "x^2" + " + " + b + "x" + " + " + c  + " = 0")

let D = (b*b) - (4*a*c);


if (D == 0 && a!== 0){
    let solution = -b/(2*a);
    console.log("x =" +solution)
}

else if ( D > 0 && a!== 0){
    let x1 = (-b + Math.sqrt(D))/(2*a);
    let x2 = (-b - Math.sqrt(D))/(2*a);

    console.log("x1 =" + x1, "x2 =" +x2)
}

else if ( D < 0 && a!== 0){
    
    console.log("Unsolvable")
}

else if (a == 0 && b!==0 && c!==0) {

    let x = -c/b;
    
    console.log("x =" +x)

} 
else {
    console.log("Not Defined")
}