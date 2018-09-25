var openFileIdList = [];
var fileList = [];
var currentFile = '';


String.prototype.log = function () {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    newString = newString + this[i];
  }
  console.log(newString);
}

Array.prototype.log = function () {
  console.log(this);
}

Boolean.prototype.log = function () {
  if (this == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}

Number.prototype.log = function () {
  var num = this;
  num++;
  num--
  console.log(num);
}

String.prototype.error = function () {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    newString = newString + this[i];
  }
  console.error(newString);
}

Array.prototype.error = function () {
  console.error(this);
}

Boolean.prototype.error = function () {
  if (this == true) {
    console.error(true);
  } else {
    console.error(false);
  }
}

Number.prototype.error = function () {
  var num = this;
  num++;
  num--
  console.error(num);
}

String.prototype.warn = function () {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    newString = newString + this[i];
  }
  console.warn(newString);
}

Array.prototype.warn = function () {
  console.warn(this);
}

Boolean.prototype.warn = function () {
  if (this == true) {
    console.warn(true);
  } else {
    console.warn(false);
  }
}

Number.prototype.warn = function () {
  var num = this;
  num++;
  num--
  console.warn(num);
}

String.prototype.info = function () {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    newString = newString + this[i];
  }
  console.info(newString);
}

Array.prototype.info = function () {
  console.info(this);
}

Boolean.prototype.info = function () {
  if (this == true) {
    console.info(true);
  } else {
    console.info(false);
  }
}

Number.prototype.info = function () {
  var num = this;
  num++;
  num--
  console.info(num);
}
Object.prototype.log = function () {
  console.info(this);
}
Object.prototype.warn = function () {
  console.info(this);
}
Object.prototype.error = function () {
  console.info(this);
}
Object.prototype.info = function () {
  console.info(this);
}

function Counter(start, value = start) {
  this.start = start;
  this.value = value;
  this.s = this.start;
  this.v = this.value;
  this.inc = function (incBy = 1) {
    this.value += incBy;
  }
  this.dec = function (decBy = 1) {
    this.value -= decBy;
  }
  this.reset = function () {
    this.value = this.start;
  }
  return this.value;
}

document.getJavascript = function (src) {
  var scriptTag = document.createElement('script');
  var head = document.head;
  scriptTag.setAttribute("src", src);
  head.appendChild(scriptTag);
}

randomNumber = function(min, max) {
  var num = Math.floor((Math.random() * max) + min);
  return num;
}

var fileCounter = new Counter(-1);
HTMLElement.prototype.openFile = function () {
  var e = document.createElement('input');
  var giveid = function() {
    var internalID = 'openFile' + Math.round(randomNumber(111111, 999999));
    if (openFileIdList.includes(internalID)) {
      giveid();
    } else {
      return internalID;
    }
  }
  var id = giveid();
  e.setAttribute("type", "file");
  e.setAttribute("id", id);
  e.setAttribute("style", 'visibility: hidden');
  e.setAttribute("class", "easyJsFileOpener");
  e.setAttribute("onchange", 'document.getElementById(\'' + id + '\').openFile2(\'' + id + '\')');
  this.appendChild(e);
  e.click();
}

HTMLElement.prototype.openFile2 = function (id) {
  if (this.getAttribute("type") !== "file" || this.getAttribute("onchange") != 'document.getElementById(\'' + id + '\').openFile2(\'' + id + '\')' || this.getAttribute("class") !== "easyJsFileOpener") {
    var err = 'This function is not supposed to be called outside of the "openFile()" function.';
    err.error();
    return;
  }
  fileCounter.inc();
  var c = fileCounter.value;
  c.log();
  var e = document.getElementById(id);
  var f = new FileReader();
  console.log(e.files[0]);
  var g = e.files[c];
  var r;
  f.onload = function() {
    r = f.result;
    fileList.push(r);
    currentFile = r;
  }
  f.readAsText(g);
}
