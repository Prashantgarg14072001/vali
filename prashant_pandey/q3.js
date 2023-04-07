let list1= [1,2,3,4,5,6];
let list2= [1,3,4,7,9];
let arr1= list1.filter((o) => list2.indexOf(o) ===-1);
let arr2= list2.filter((o) => list1.indexOf(o) ===-1);
let result = arr1.concat(arr2);
 console.log(result);