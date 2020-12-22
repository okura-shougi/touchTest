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
  drawPointer(e);
}, false);

screenCanvas.addEventListener('touchmove', e => {
  // タッチによる画面スクロールを止める
  e.preventDefault();
  drawPointer(e);
}, false);

screenCanvas.addEventListener('touchend', e => {
  drawPointer(e);
}, false);

let drawPointer = (e: TouchEvent) =>{
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  ctx.arc(
    e.changedTouches[0].pageX,
    e.changedTouches[0].pageY,
    5,
    0,
    Math.PI * 2,
    false
  );
  ctx.fillStyle = "cyan";
  ctx.fill();
}
