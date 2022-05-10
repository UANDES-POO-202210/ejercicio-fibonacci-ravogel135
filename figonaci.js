const fs = require('fs');

fs.readFile('texto.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let data1=data;
  console.log(data);
  let f= fibonacci(data);
  console.log(f);
});
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}