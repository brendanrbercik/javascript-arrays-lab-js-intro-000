var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  var kittens = kittens.slice(0,-1);
  return kittens;
}

function removeFirstKitten() {
  var kittens = kittens.slice(1);
  return kittens;
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
