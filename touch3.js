"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// screenの属性を受け取る
var screenCanvas = document.getElementById('screen');
// 2dコンテキスト
var ctx = screenCanvas.getContext('2d');
// canvasのサイズ。clearRectで使う
var canvasWidth = screenCanvas.getAttribute('width');
var canvasHeight = screenCanvas.getAttribute('height');
screenCanvas.addEventListener('touchstart', function (e) {
    // タッチによる画面スクロールを止める
    e.preventDefault();
    // iOSで選択不可にする（親要素への伝搬を防ぐらしい）
    e.stopPropagation();
    drawPointer(e);
}, false);
screenCanvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    e.stopPropagation();
    drawPointer(e);
}, false);
screenCanvas.addEventListener('touchend', function (e) {
    drawPointer(e);
}, false);
var drawPointer = function (e) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (var i = 0; i < e.touches.length; i++) {
        ctx.beginPath();
        ctx.arc(e.touches[i].pageX, e.touches[i].pageY, 60, 0, Math.PI * 2, false);
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
        ctx.fill();
    }
};
