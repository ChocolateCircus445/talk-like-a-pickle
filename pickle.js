var humanWords = [];
var pickleWords = [];
var compounds = ['b', 'd', 'f', 'ft', 'g', 'fg', 'j', 'h', 'hh', 'k', 'glk', 'n', 'ng', 's', 't', 'v'];

doPickle = function() {
  var h = document.getElementById('humanText');
  var p = document.getElementById('pickleText');
  p.innerHTML = '';
  var hi = h.value;
  var pi = p.innerHTML;
  var w = hi.split(' ');
  var j;
  var c;
  var x = '';
  [h, p, hi, pi, w, j, c, x, humanWords, pickleWords].log();
  for (var i = 0; i < w.length; i++) {
    w[i].log();
    if (humanWords.includes(w[i])) {
      j = humanWords.lastIndexOf(w[i]);
      pi = pi + pickleWords[j] + ' ';
    } else {
      c = randomNumber(1, 7);
      x = '';
      for (var k = 0; k < c; k++) {
        x = x + compounds[randomNumber(0, compounds.length - 1)];
      }
      pi = pi + x + ' ';
      humanWords.push(w[i]);
      pickleWords.push(x);
    }
  }
  p.innerHTML = pi;
  [h, p, hi, pi, w, j, c, x, humanWords, pickleWords].log();
}
