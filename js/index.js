// var app = document.getElementById('type');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Hello!!!')
//     .pauseFor(500)
//     .deleteAll()
//     .typeString('I am Bharat Kumar')
//     .pauseFor(500)
//     .deleteAll()
//     .typeString('<strong>I work as Web Developer</strong>')
//     .pauseFor(500)
//     .start();

//sudoku pattern generator
const arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = [];
}

function is_unique_Row(arr, i, num) {
  for (let j = 0; j < 10; j++) {
    if (arr[i][j] === num) {
      return false; // Not unique
    }
  }
  return true; // Unique
}

function is_unique_col(arr, j, num) {
    for (let i = 0; i < 10; i++) {
        if (arr[i][j] === num) {
            return false; // Not unique
        }
    }
    return true; // Unique
}


for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let num;
    // check if row element is unique //
    let k = 0;
    do {
      num = Math.floor(10 * Math.random());
      k++;
    } while (!is_unique_Row(arr, i, num) && k < 10);
    
    // check if column element is unique //
    while (!is_unique_col(arr, j, num) && k < 10) {
        num = Math.floor(10 * Math.random());
    }

    arr[i][j] = num;
  }
}

// Print array
for (let i = 0; i < 10; i++) {
  let row = "";
  for (let j = 0; j < 10; j++) {
    row += arr[i][j] + "  ";
  }
  console.log("|",row,"|");
}
