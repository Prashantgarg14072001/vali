

  // Que no1 jaged array
  //---------------------------------------------------Que no1 start------------------------------------------------------------------------
  function maxArray(){
    let arr1 = document.getElementById("first").value
     arr2 =  arr1.split(",")
    let arr3 = arr2.reduce((a,b)=>{
        return parseInt(a) + parseInt(b);
    })
    let compare = ((a,b)=>{
    return b-a;

    })
    arr2.sort(compare)
     document.getElementById("second").value = arr3;
    document.getElementById("arry2").value = arr2[0];
  }
//-----------------------------------------------------Que no 1 End--------------------------------------------------------------------------------------------




//-------------------------------------------------------------que no 3  return longest word in the string-----------------------------------------
//Que no 3
  function longestWord() {
    let string = document.getElementById("first2").value
     const words = string.split(" ");
    let longestWord = words[0];
    for (const word of words) {
    if (word.length > longestWord.length) { longestWord = word;
    } }
     let bus= longestWord;
     let blen=bus.length;
    document.getElementById("res2").value = bus;
  document.getElementById("res3").innerHTML=blen; }

//----------------------------------------------------------------que no 3 end ----------------------------------------------------------------------




  // Que no4 Create a function that will convert a string containing a binary numberinto a number.
 //------------------------------------------------------------Que no 4--------------------------------------------------------------------------------------- 
function binaryToNumber() {
let binary = document.getElementById("tbinary").value
let bin = parseInt(binary, 2); 
document.getElementById("resultbinary").value = bin;
}

//-----------------------------------------------------------------------------------que no 4---End----------------------------------------------------------





//craete a function that will convert a string in a array containing the ASCII codes of each character.
//---------------------------------------------------------------Que no 2-----------------------------------------------------------------------------------------------

function asciitostring() {
  let str1=document.getElementById("AStext").value;
  var raj =str1.split(','); 
  var str = ""; 
  for (var i = 0; i < raj.length; i++) { 
  str += String.fromCharCode(raj[i]); 
   }
   let resultmy=str;
   document.getElementById("ASresult").value=resultmy;
   }
//---------------------------------------------------------------Que no 2 ---------------------End--------------------------------------------




//-----------------------------------Que 5 start---------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
function sum(){
  //let arr = [2,3,5,4,8]
  
  let arr = document.getElementById("tsum").value;
 arr =  arr.split(",");
  let arr1 = arr.reduce((a,b)=>{
      return parseInt(a) + parseInt(b);
  })
  let arr2 = arr.reduce((a,b)=>{
      return parseInt(a) * parseInt(b);
  })
  let arr3 = arr1+arr2
  document.getElementById("t-result").value=arr3;
}

//----------------------------------------------------------------------Que 5 End----------------------------------------------------------------
















