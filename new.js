function p(a, b, c, ...q) {
  let d = a + b + c;
  for (let each of q) {
    d = d + each;
  }
  return d;
}

let m = [9, 11, "2", 3, 2, 0, 2, 4];
console.log(p(...m));
