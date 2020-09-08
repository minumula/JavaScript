console.log("Arrays");
const arr = ['Ann', 'Bob', 10, 20, 'Hello', [100,200,300]];
console.log(arr);
console.log(arr[5][1]);

const colors = ['red', 'blue', 'green', 'white'];
// add at the end
colors.push('yellow');
// remove at the end
colors.pop();
// remove from beginning
colors.shift();
// add at the beginning
colors.unshift('teal')
console.log(colors);

//find index of item
console.log(colors.indexOf('teal'));