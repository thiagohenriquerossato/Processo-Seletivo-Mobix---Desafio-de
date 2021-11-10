const readline = require('readline')
const { stdin: input, stdout: output } = require('process');
const { info } = require('console');
const rl = readline.createInterface({ input, output });


function question(){
    rl.question("Entre com o tamanho da ampulheta: ", function(entry) {
    if(entry<20 || isNaN(entry)){
      console.log("\n** Digite um numero maior ou igual a 20 ** \n")
      question();
    }else{
      drawHourglass(entry)
      rl.close();
    }
  
    
  });
}

function main(){
  
  question()
  
}

function drawHourglass(n){
  var linha = ''
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(i<n/2){
        if((j<i && j!=0) || (j>n-(i+1) && j!=(n-1))){
          linha = linha +" "
        }else{
          linha = linha +'#'
        }
      } else {
        if((j>i || j<n-(i+1))&& j!=0 &&j!=(n-1)){
          linha = linha +" "
        }else{
          if(j===n-(i+1) || j===0 || j===(n-1) || j===i || i===(n-1)){
          linha = linha +'#'
          }
          else{
            linha = linha +" "
          }
        }
      }
    }
    linha = linha +"\n"
  }
  console.log(linha)
  console.log(`n = ${n}`)
}

main()