// bodlogo1. Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]

const bod1 = [1, 2, 4];

const nemelt1 = bod1.push(5);

console.log("Bodlogo1: ", bod1);

// bodlogo2. Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]

function createNewArr(len, min, max) {
  let arr = [];
  for (i = 0; i < len; i++) {
    let rndToo = 0;
    while (rndToo < min) {
      rndToo = Math.floor(Math.random() * max);
    }
    arr.push(rndToo);
  }
  return arr;
}

let arrr = createNewArr(5, 100, 300);
console.log("Bodlogo2: ", arrr);

// bodlogo3. Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.

let from = prompt("Дансны үлдэгдлүүдээ оруулна уу!");

console.log("Bodlogo3: prompt: ", from);
let spl = from.split(",");
let n = [];

for (i = 0; i < spl.length; i++) {
  n.push(Number(spl[i]));
}

console.log("Bodlogo3: n: ", n);

function sum(x) {
  zero = 0;
  for (i = 0; i < x.length; i++) {
    zero += x[i];
  }
  return zero;
}
let summ = sum(n);
console.log("Bodlogo3: sum: ", summ);

console.log("Bodlogo3: avg: ", summ / n.length);

// bodlogo4. Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox'

let text = "the quick brown fox";
let spl2 = text.split(" ");
let text2 = [];
console.log("Bodlogo4: ", spl2);

function capitalize(x) {
  return x.at(0).toUpperCase() + x.slice(1);
}
let example = capitalize("java");
console.log("example:", example);

for (i = 0; i < spl2.length; i++) {
  text2.push(capitalize(spl2[i]));
}
console.log(text2);

let text3 = text2.join(" ");
console.log("Bodlogo4: ", text3);

// bodlogo5. Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']

let words = ["hello", "world", "javascript", "array"];
let reverseWords = [];

function reverse(x) {
  return x.split("").reverse().join("");
}
console.log(reverse("java"));
for (i = 0; i < words.length; i++) {
  reverseWords.push(reverse(words[i]));
}

console.log(reverseWords);

// bodlogo6. Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
