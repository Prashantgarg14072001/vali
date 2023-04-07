let star=" ";
for(let i=0; i<=4; i++){
  for(let j=0; j<i; j++){
      star +=" "; 
  }
  for(let k=(5-i)*2-1; k>0; k--){
        star +="*"; 
    }
     star += "\n"; 
}

for(let i=1; i<5; i++){
      for (let j = 5; j> i; j--){
      star +=" "; 
    }
        for(let k=0; k<=2*i; k++){
        star +="*"; 
    }
    star += "\n"; 
}
console.log(star);