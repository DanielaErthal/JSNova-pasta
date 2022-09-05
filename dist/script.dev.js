"use strict";

alert("Hello wellcome");
var nomes = ["Igor", "Jose", "Maria"];
var A = [7.0, 6.5, 9.5];
var B = [8.0, 7.0, 8.5];

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(media) {
  if (media > 7) {
    return "Aprovado";
  } else {
    return "Rprovado";
  }
}

for (var index in nomes) {
  var n1 = A[index];
  var n2 = B[index];
}

var m = media(n1, n2);
console.log(nomes[index] + "-" + n1 + "-" + n2 + "-" + m + "-" + passou(m));