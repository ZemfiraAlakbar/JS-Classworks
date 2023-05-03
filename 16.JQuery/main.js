$(".colorBtn");
$(".hideBtn");
$(".showBtn");

// 1
const colors = ["red", "green", "blue", "yellow", "orange", "brown"];
$(".colorBtn").click(function () {
  colors[Math.floor(Math.random() * colors.length)];
  $(".title").css({ color: colors[Math.floor(Math.random() * colors.length)] });
});
// 2
$(".hideBtn").click(function () {
  $(".title").hide();
});

$(".showBtn").click(function () {
  $(".title").show();
});
// 3
$.each(colors, function (i, el) {
  console.log(el);
});
// 4
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
let sum = 0;
// let newArr;
$.map(numbers, function (value, index) {
  if (value) {
    sum += index;
  }
});
console.log(sum);