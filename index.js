var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  var kittens2 = kittens.slice(0,0);
  return kittens2;
}

function removeFirstKitten() {
  var kittens3 = kittens.slice(1,0);
  return kittens3;
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
