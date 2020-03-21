var kittens = ["Milo", "Otis", "Garfield"]

// function appendKitten(name) {
//   var kittens = [...kittens, name];
//   return kittens;
// }

function removeLastKitten() {
  kittens = kittens.slice(0,-1);
  return kittens;
}

function removeFirstKitten() {
  kittens = kittens.slice(1);
  return kittens;
}

// function destructivelyAppendKitten(name) {
//   kittens.push(name);
// }
//
// function destructivelyPrependKitten(name) {
//   kittens.unshift(name)
// }
//
// function destructivelyRemoveLastKitten() {
//   kittens.pop();
//   return kittens;
// }
//
// function destructivelyRemoveFirstKitten() {
//   kittens.shift();
//   return kittens;
// }
