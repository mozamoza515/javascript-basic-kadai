//btnというidをもつHTML要素を取得し、定数に代入
const change = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行
change.addEventListener('click' , () => {
  
  //textというidをもつHTML要素を取得し、定数に代入
  const text2 = document.getElementById('text');
  
  //textのテキストを編集する
  text2.textContent = 'ボタンをクリックしました';
});

