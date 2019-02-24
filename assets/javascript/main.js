var rsp = window.array;
var rand;
var timer;
var questionIndex = 0;
var maxQuestions = window.array.length;
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var startOver = false;

function gameTimer (){
  var time = 5;
  timer = setInterval(function () {
    $("#time").text('Time Left: ' + time-- + ' Seconds');
    console.log("Time: " + time);
    if (time == 0) {
      var correctIndex = rsp[questionIndex].index;
      console.log("Time is zero: " + time);
      $("#time").text('Time Out');
      unanswered++;
      $('#answer').html('');
      $('#question').text('Sorry The Right Answer is ' + rsp[questionIndex].answer[correctIndex].value);
      clearInterval(timer);
      setTimeout(function () { reset(); }, 2000);
    }
  }, 1000);
}

function load() {
  gameTimer();
  $('#question').text(rsp[questionIndex].question);
  for (let i = 0; i < rsp[questionIndex].answer.length; i++) {
    var btn = $('<button class="btn">');
    btn.text(rsp[questionIndex].answer[i].value);
    btn.attr('value', rsp[questionIndex].answer[i].correct);
    $('#answer').append(btn);
  }
}
load();

function reset() {
  $('#answer').html('');
  $('#question').html('');
  if(questionIndex >= (maxQuestions-1)){
    $('#question').text('All done, here is how you did!');
    $('#correctAns').text('Correct Answers : ' + correctAns);
    $('#incorrectAns').text('Incorrect Answers : ' + incorrectAns);
    $('#Unanswered').text('Unanswered : ' + unanswered);
  } else {
    questionIndex++;
    load();
  }
}

$(document).on('click', 'button', function (e){
  clearInterval(timer);
  var correctIndex = rsp[questionIndex].index;
  console.log("This is the value: " + this.value);
  var val = this.value;
  if (val == "true") {
    $('#answer').html('');
    $('#question').text('You Got It');
    correctAns++;
  } else {
    $('#answer').html('');
    $('#question').text('Sorry The Right Answer is ' + rsp[questionIndex].answer[correctIndex].value);
    incorrectAns++;
  }
  e.preventDefault();
  setTimeout(function () { reset(); }, 2000);
});

