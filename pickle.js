var humanWords = [];
var pickleWords = [];
var compounds = ['b', 'd', 'f', 'ft', 'g', 'fg', 'j', 'h', 'hh', 'k', 'glk', 'n', 'ng', 's', 't', 'v'];
if (new Date().getMonth() == 11 && new Date().getDate() == 14) {
  var isPickleDay = true;
} else {
  var isPickleDay = false;
}



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
  pickleTweet();
}

function pickleTweet () {
  this.tweet = '';
  //https://bit.ly/2xTaNmu
  var h = document.getElementById('humanText').value;
  var p = document.getElementById('pickleText').value;
  var ha = h.split(' ');
  var pa = p.split(' ');
  p = pa.join('%20');
  h = ha.join('%20');
  var t = document.getElementById('title');
  var a = document.getElementById('tweet');
  var tweet = '\"https://twitter.com/intent/tweet?text=%22' + h + "%22%20in%20pickle%20is%20%22" + p + '%22%20chocolatecircus445.github.io/talk-like-a-pickle\"'
  a.innerHTML = '<br>\n<a class=\"t\" href=' + tweet + ' target=\"_blank\"><i class=\"fab fa-twitter\"></i><span> Annoy your friends on Twitter</span></a>';
}

function doLaunchInfo () {
  var w = window.open("https://chocolatecircus445.github.io/talk-like-a-pickle/info.html", "", "width=960,height=720");
}
