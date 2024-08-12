const prompt = require('prompt-sync')()






let age = prompt("whats your age?")
age = parseint(age)
if(age > 18){
  console.log("you can vote!")
} else {
  console.log("you can't vote!")
}

let guess = prompt("password:")

while (guess !== "SE11"){
  guess = prompt("try again")
}

let competencies = ["if/else","while","for", "functions", "objects"]
for(let i =0;i <=5;i++){
  console.log(i)
} 