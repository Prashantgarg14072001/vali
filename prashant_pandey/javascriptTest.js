// Question 1
let star=" ";
for(let i=0; i<= 5; i++){
    for (let j = 5; j> i; j--){
      star +=" "; 
    }
    for(let k=0; k<=2*i; k++){
        star +="*"; 
    }
    star += "\n"; 
}
for(let i=0; i<=5-1; i++){
  for(let j=0; j<i; j++){
      star +=" "; 
  }
  for(let k=(5-i)*2-1; k>0; k--){
        star +="*"; 
    }
     star += "\n"; 
}
console.log(star);

// Question 2

let star2=" ";
for(let i=0; i<=4; i++){
  for(let j=0; j<i; j++){
      star2 +=" "; 
  }
  for(let k=(5-i)*2-1; k>0; k--){
        star2 +="*"; 
    }
     star2 += "\n"; 
}

for(let i=1; i<5; i++){
      for (let j = 5; j> i; j--){
      star2 +=" "; 
    }
        for(let k=0; k<=2*i; k++){
        star2 +="*"; 
    }
    star2 += "\n"; 
}
console.log(star2);

//Question3
let list1= [1,2,3,4,5,6];
let list2= [1,3,4,7,9];
let arr1= list1.filter((a) => list2.indexOf(a) ===-1);
let arr2= list2.filter((a) => list1.indexOf(a) ===-1);
let result = arr1.concat(arr2);
 console.log(result);


 // Question 4

 var str= "Hello World";
var lower= str.toLocaleLowerCase();
// console.log(lower);
var strObj ={};
var getchar, count, strLen, numStr;
strLen = str.length;
for( count=0,strLen;  count< strLen; count++){
getStr = lower.charAt(count);
numStr = strObj[getStr];
strObj[getStr] = numStr ? numStr +1 :1;
}
for(getStr in strObj){
  if(getStr !== ' ')
  console.log(getStr +" occurs "+ strObj[getStr]);
}
