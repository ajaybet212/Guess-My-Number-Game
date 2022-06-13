'use strict';
let secreteNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function(message){
   document.querySelector('.message').textContent = message;
}


   document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess); 

   if(!guess){
      displaymessage('no number');
   }

   else if(guess === secreteNumber){   
      displaymessage('Correct number');
      document.querySelector('.number').textContent = secreteNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      
      if(score>highscore){
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }
      
   }
      else if(guess !== secreteNumber)
      {
         if(score>1)
         {
            document.querySelector('.message').textContent = guess > secreteNumber ? 'Too High!' : 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
         }
   
      else{
         displaymessage('You Lost The Game');       
         document.querySelector('.score').textContent = 0;
      }
      
   }
   
   
})
document.querySelector('.again').addEventListener('click',function(){
   score = 20;
   secreteNumber = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('body').style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem';
   displaymessage('Start Guessing');
   document.querySelector('.guess').value = "";

})