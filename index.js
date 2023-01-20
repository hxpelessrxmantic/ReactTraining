// var c=80;
// if(c>=90){
//     console.log("A Grade");
// }
// else if(c>=80 && c<90){
//     console.log("B Grade");
// }
// else if(c>=60 && c<80){
//     console.log("C Grade");
// }
// else if(c>=40 && c<60){
//     console.log("D Grade");
// }
// else{
//     console.log("Fail");
// }

//Print Pattern
// for(var i=1;i<=5;i++){
//     var stars = "";
//     for(var j=1;j<=i;j++){
//     stars = stars + "* ";
// }
// console.log(stars);
// }

// Print Pattern
// for(var i=1;i<=5;i++){
//     var stars = "";
//     for(var j=1;j<=5-i;j++){
//         stars+=" ";
//     }
//     for(var k=1;k<=i;k++){
//         stars+="*";
//     }
//     for(var l=2;l<=i;l++){
//         stars+="*"
//     }
//     console.log(stars);
// }

// var arr = ["utkarsh",10,true,null];
// var length = arr.length;
// for (var i=0; i<length;i++){
//     console.log(arr[i]);
// }

// var arr = ["utkarsh",10,true,null];
// var arr2 = arr;
// arr2[1] = 15;
// console.log(arr);
// console.log(arr2);


var n = 5;
for(var i=1;i<=5;i++){
    var stars = "";
    for(var j=1;j<=5-i;j++){
        stars+=" ";
    }
    for(var k=1;k<=i;k++){
        stars+="*";
    }
    for(var l=2;l<=i;l++){
        stars+="*"
    }
    console.log(stars);
}
for (var i = 0; i <=5; i++) {
    var stars="";
  for (var j = 0; j < i; j++) {
    stars+=" ";
  }
  for (var k = 0; k < 2 * (5-i) - 1; k++) {
    stars+="*";
  }
  console.log(stars);
}

// let n = 5;
// // External loop
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(' ')
//   }
//   // printing star
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }


