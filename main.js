let score = 0;
let wins = 0;
let losses = 0;

let target = randomNumTarget();
$('.target').text(target);

function randomNumTarget() {
  return Math.floor(Math.random() * (100 - 10) + 10);
}

function randomNumCrystal() {
  return Math.floor(Math.random() * (15 - 1) + 1);
}

function set() {
  $('.crystal-1').attr('value', randomNumCrystal());
  $('.crystal-2').attr('value', randomNumCrystal());
  $('.crystal-3').attr('value', randomNumCrystal());
  $('.crystal-4').attr('value', randomNumCrystal());
  score = 0;
  $('.score').text(score);
}
set();

$('.crystal').on('click', function () {
  let value = parseInt($(this).attr('value'));

  console.log(value);

  score += value;
  $('.score').text(score);

  if (score == target) {
    alert('You Win!!');
    wins++;
    $('.win').text(wins);

    target = randomNumTarget();
    $('.target').text(target);
    set();
  } else if (target < score) {
    alert('You Loss!!');
    losses++;
    $('.loss').text(losses);

    target = randomNumTarget();
    $('.target').text(target);
    set();
  }
});
