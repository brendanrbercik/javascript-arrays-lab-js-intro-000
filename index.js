function removeLastKitten() {
  var kittens2 = kittens.slice(0,-1);
  return kittens2;
}

function removeFirstKitten() {
  var kittens3 = kittens.slice(1);
  return kittens3;
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  kittens = [...kittens, name];
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
