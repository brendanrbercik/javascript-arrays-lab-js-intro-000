var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, element) {
  array.push(element);
  return array;
}

destructivelyAppendKitten(kittens, "Cindy");
