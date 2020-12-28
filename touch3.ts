// TypeScriptはどこかにexportがないと不機嫌になる
export{};

// screenの属性を受け取る
const screenCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('screen');
// 2dコンテキスト
const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>screenCanvas.getContext('2d');
// canvasのサイズ。clearRectで使う
const canvasWidth: number = <number><unknown>screenCanvas.getAttribute('width');
const canvasHeight: number = <number><unknown>screenCanvas.getAttribute('height');

screenCanvas.addEventListener('touchstart', e => {
  // タッチによる画面スクロールを止める
  e.preventDefault();
  // iOSで選択不可にする（親要素への伝搬を防ぐらしい）
  e.stopPropagation();
  drawPointer(e);
}, false);

screenCanvas.addEventListener('touchmove', e => {
  e.preventDefault();
  e.stopPropagation();
  drawPointer(e);
}, false);

screenCanvas.addEventListener('touchend', e => {
  drawPointer(e);
}, false);

let drawPointer = (e: TouchEvent) =>{
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for(let i = 0; i < e.touches.length; i++){
    ctx.beginPath();
    ctx.arc(
      e.touches[i].pageX,
      e.touches[i].pageY,
      5,
      0,
      Math.PI * 2,
      false
    );
    switch (i) {
      case 0:
        ctx.fillStyle = "red";
        break;
      case 1:
        ctx.fillStyle = "yellow";
        break;
      case 2:
        ctx.fillStyle = "green";
        break;
      case 3:
        ctx.fillStyle = "blue";
        break;
      case 4:
        ctx.fillStyle = "purple";
        break;
      default:
        break;
    }
  }
  ctx.fill();
}
