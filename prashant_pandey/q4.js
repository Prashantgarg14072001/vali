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
