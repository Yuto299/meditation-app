const container = document.querySelector('.container');
const text = document.getElementById('text');

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2; // 吐く時間
let holdTime = totalTime / 5; // 待つ時間

function meditateAnimation() {
  text.innerHTML = '吸って！';
  container.className = 'container grow'; // 吸うアニメーション
  setTimeout(() => {
    text.innerHTML = '止めて！';
    container.className = 'container hold'; // 止めるアニメーション

    setTimeout(() => {
      text.innerHTML = '吐いて！';
      container.className = 'container shrink'; // 吐くアニメーション
    }, holdTime); //holdTimeが経過したら、次のアニメーションを実行する
  }, breathTime); //breathTimeが経過したら、次のアニメーションを実行する
}

setInterval(meditateAnimation, totalTime); // totalTimeごとにアニメーションを繰り返す

meditateAnimation();
