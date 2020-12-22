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
    drawPointer(e);
}, false);
screenCanvas.addEventListener('touchmove', function (e) {
    // タッチによる画面スクロールを止める
    e.preventDefault();
    drawPointer(e);
}, false);
screenCanvas.addEventListener('touchend', function (e) {
    drawPointer(e);
}, false);
var drawPointer = function (e) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.arc(e.changedTouches[0].pageX, e.changedTouches[0].pageY, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "cyan";
    ctx.fill();
};
