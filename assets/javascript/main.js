var rsp = window.array;
var rand;
var intervalId = false;

function load() {
  rand = Math.floor(Math.random() * rsp.length);
  $('#question').text(rsp[rand].question);
  for (let i = 0; i < rsp[rand].answer.length; i++) {
    var btn = $('<button class="btn">');
    btn.text(rsp[rand].answer[i].value);
    btn.attr('value', rsp[rand].answer[i].correct);
    $('#answer').append(btn);
  }
  intervalId = false;
}
load();
var time = 60;
var timer = setInterval(function () {
  $("#time").text('Time Left: ' + time-- + ' Seconds');
  if (time === 0) {
    clearInterval(timer);
    intervalId = true;
    $("#time").text('Time Out');
  }
}, 1000);

function reset() {
  $('#answer').html('');
  $('#question').html('');
  load();
  time = 60;
  timer = setInterval(function () {
    $("#time").text('Time Left: ' + time-- + ' Seconds');
    if (time === 0) {
      clearInterval(timer);
      intervalId = true;
      $("#time").text('Time Out');
    }
  }, 1000);
}

$(".btn").click(function () {
  var correctAns = rsp[rand].index;
  var val = this.value;
  if (val == true) {
    $('#answer').html('');
    $('#question').text('You Got It');
  } else {
    $('#answer').html('');
    $('#question').text('Sorry The Right Answer is ' + rsp[rand].answer[correctAns].value);
  }
  if (intervalId == true) {
    $('#answer').html('');
    $('#question').text('Sorry The Right Answer is ' + rsp[rand].answer[correctAns].value);
  }
  setTimeout(function () { reset(); }, 2000);
});


