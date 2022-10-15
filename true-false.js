// Falsy:
// false
// 0
// ""
// undefined
// NaN
// null

// Truethy:
// "0" / " " [],{}
// "false"

let number = 12 ;
if (number || number == 0) {
   console.log("condition is true"); 
} else {
   console.log("condition is false");
}
