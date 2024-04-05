"use strict"

{

  //タイマーIDの取得
  const timer = document.querySelector("#timer");
  //スタートボタンの取得
  const startScreen = document.querySelector(".start-cover");
  //終了画面の取得
  const finishScreen = document.querySelector(".finish-cover");
  //ボタンカウントの取得
  const btncounts = document.querySelector("#btncounts");
  // const btncounts = document.querySelector(".count-cover");

  //プレイ回数の宣言
  let playcount = 0;


  //タイマー処理

  //スタート時間の取得
  let startTime;
  //ストップ時間の取得
  let timeoutId;

  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes());
    const s = String(d.getSeconds()).padStart(2, 0);
    const ms = String(d.getMilliseconds()).padStart(3, 0);
    timer.textContent = `Timer: ${m}:${s},${ms}`

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  //ゲームスタート画面

  startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
    // btncounts.style.display = "block";
    startTime = Date.now();
    countUp();
    gamePart();
    playcount++
  });



  //ここからボタン処理


  //カウンター
  let btncount = 0;
  //表示

  //ランダムにボタンを配置するIDを付与
  let boxN;

  function btnSetting() {
    const randombtn = Math.ceil(Math.random() * 16);
    const N = randombtn;
    String.N;

    boxN = document.querySelector(".box-" + N);
    boxN.setAttribute("id", "box-button");
  }


  function gamePart() {
    if (btncount === 20) {
      clearTimeout(timeoutId);
      finishScreen.style.display = "block";
      resetbtn.style.visibility = "visible";
      return;
    } else {
      const WaitForClick = () => new Promise(resolve => boxN.addEventListener("click", resolve));

      async function gameLoop() {
        btnSetting();
        await WaitForClick();
        boxN.removeAttribute("id", "box-button");
        btncount++;
        // btncounts.textContent = btncounts;
        btncounts.textContent = `${btncount} / 20`;

        gamePart();
      }
      gameLoop();
    }
  }


  //リセットボタンの処理
  const resetbtn = document.querySelector("#reset");

  resetbtn.addEventListener("click", () => {
    btncount = 0;
    btncounts.textContent = `${btncount} / 20`;
    finishScreen.style.display = "none";
    startScreen.style.display = "block";
    resetbtn.style.visibility = "hidden";
    // btncounts.style.display = "none";
  });

















}