const msg = document.querySelector('.msg');
const guess = document.querySelector('#inputField');
const btn = document.querySelector("#btn");

let newWord = "";
let randWord = "";
let play  = false;

let words = ['python','javascript','cpp','php', 'java','html','react','sql','swift','android','angular','dsa' ];

const createNewWords = () =>{
let ranNum = Math.floor(Math.random()*words.length);
let newTempWord = words[ranNum];
return newTempWord;
}
const scrambleWords = (arr) => {
   for(let i=arr.length-1; i>0; i--){
    let temp = arr[i];
    let j = Math.floor(Math.random()*(i+1));
    arr[i] = arr[j];
    arr[j] = temp;}
   return arr;
}
btn.addEventListener('click', function(){

   if(!play){
    play =true;
    btn.innerHTML = 'Guesss Word';
    guess.classList.toggle('hidden');
    newWord= createNewWords();
    randWord= scrambleWords(newWord.split("")).join("");
    msg.innerHTML = `Guess the Word:  ${randWord}`;
   }
   else{

    let tempWord=guess.value;
   console.log(tempWord);
    if(tempWord === newWord){
        play = false;
        msg.innerHTML = `Awesome It's correct. it is ${newWord}`;
        btn.innerHTML =  "Start Again";
        guess.classList.toggle('hidden');
        guess.value = "";
    }
    else{
        msg.innerHTML = `Sorry buddy. It's not correct. Please try again ${randWord}`;
        btn.innerHTML =  "Start Again";
        guess.classList.toggle('hidden');
        guess.value = "";
        
    }
   }


});