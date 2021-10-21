
let TriangleBase = 1;
let TriangleHeight = 10;
let RectangleBase = 2.5;
let RectangleHeight = 2;

let AreaTriangle = (TriangleBase * TriangleHeight)/2;
let AreaRectangle = (RectangleBase * RectangleHeight);

if (AreaRectangle == AreaTriangle) {
    console.log("Rectangle's area is equal to Triangle's area")
}

else if (AreaTriangle > AreaRectangle){
    console.log("Triangle has a bigger area")
        
    
}

else {
    console.log("Rectangle has a bigger area")
}