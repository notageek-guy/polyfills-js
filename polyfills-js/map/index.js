// POLYFILL function for Map

const arr = Array.from({length:5}).fill(2);

// here this refers to the array passed in the callback
Array.prototype.customMap = function(cb){
    let len = this.length;
    for(let i  = 0;i<this.length;i++){
        this[i]  = cb(this[i]);
    }
    return this;
}

const addTwo = num => num + 2;
const result = arr.customMap(num=>addTwo(num));

console.log(result)