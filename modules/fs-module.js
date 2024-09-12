// FS Sync 
const { readFileSync, writeFileSync, readFile, writeFile, } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8',);
const second = readFileSync('./content/second.txt', 'utf-8');


// writeFileSync('./content/third.txt', 'Hello this is my third file', {flag: 'a'}); 
// flag: 'a' (deplecate the text)

console.log(first);
console.log(second);

console.log("=======================================================================");



// FS Async
readFile('./content/first.txt','utf-8' ,(err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  const first = result;
  writeFile('./content/third.txt', 'Hello this is my third file', {flag: 'a'}, (err, result) => {
    if(err) {
      console.log(err);
      return;
    }
    console.log(result);
    
  });
  
}) 