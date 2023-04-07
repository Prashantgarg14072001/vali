function countCharacters(str) {
  var charCount = {};
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (charCount[char]) {
      charCount[char]++;
    }
    else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

var str = "hello world";
var charCount = countCharacters(str);
console.log(charCount);