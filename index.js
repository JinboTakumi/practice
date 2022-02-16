const quiz = [
   {
      question:"マユリが一番好きな食べ物は次のうちどれ？",
      answers:["牛タン","お菓子","ラーメン","お米"],
      correct:"牛タン"
   },{
      question:"マユリを動物に表すと次のうちどれ？",
      answers:["うさぎ","ねこ","ジュゴン","ゴリラ"],
      correct:"ジュゴン"
   },{
      question:"たくみに一番当てはまるものは次のうちどれ？",
      answers:["かっこいい","サッカーが上手い","頭がいい","優しい"],
      correct:"サッカーが上手い"
   }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;


const setupQuiz = () =>{
document.getElementById("js-question").textContent = quiz[quizIndex].question
let buttonIndex = 0;
while (buttonIndex < buttonLength) {
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
   if (quiz[quizIndex].correct === e.target.textContent) {
      window.alert("正解！");
      score++;
   }else{
      window.alert("不正解！");
   }

quizIndex++;

if(quizIndex < quizLength){
 setupQuiz();
}else{
   window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
}

};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
   $button[handlerIndex].addEventListener("click", (e) => {
      clickHandler(e);
   });
   handlerIndex++;
}





