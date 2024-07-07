let scoreStr = localStorage.getItem('score');
let score;
resetscore(scoreStr);
 function resetscore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) :
score= {
  win: 0,
  loose:0,
  tie: 0,
};
 score.displayScore = function(){
   return `Win:${score.win} Loose:${score.loose} and Tie ${score.tie} `;
  };
  showResult();
}
function genrateComputerChoice() {
  let randomNumber = Math.random() *3;
  if(randomNumber>0 && randomNumber<=1){
      return  'Rock';
       } else if(randomNumber>1 && randomNumber<=2){
          return 'Paper';
          } else{
               return 'Sizzor';
                }
  }

  function getresult(userMove,computerMove) {
    if(userMove==='Rock')
      {
        if(computerMove==='Rock')
          { score.tie++;
            return `It's a Tie`;
            } else if(computerMove==='Paper'){
              score.loose++;
              return `Computer Wins`;
                } else if(computerMove==='Sizzor'){
                  score.win++;
                  return `You Win`;
                    }
      }else if(userMove==='Paper'){
        if(computerMove==='Rock'){
          score.win++;
          return `You Win`;
            }
              else if(computerMove==='Paper'){
                score.tie++;
                return `It's a Tie`;
                  }
                    else if(computerMove==='Sizzor'){
                      score.loose++;
                     return `Computer Wins`;
                       }
      }
      else{
        if(computerMove==='Rock')
          { score.loose++;
           return `Computer Wins`;
             }
             else if (computerMove==='Paper')
                { score.win++;
                  return`You Win`;
                   }
                    else if(computerMove==='Sizzor'){
                      score.tie++;
                       return `It's a Tie`;
                         }
      }
  }

  function showResult(userMove,computerMove,result){
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#user-move').innerText = userMove? `User Move is ${userMove}`:'';
    document.querySelector('#computer-move').innerText = computerMove?`Computer Move is ${computerMove}`:'';
    document.querySelector('#result').innerText = result || '';
    document.querySelector('#score').innerText = `Score is ${score.displayScore()}`;
  }