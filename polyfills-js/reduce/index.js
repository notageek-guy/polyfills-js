const arr = [1,2,3,4,5];


// polyfill for reduce 

if(!Array.prototype.customReduce) {
    Array.prototype.customReduce  = function(cb,init){
       let prev = init;
       for(let i = 0;i<this.length;i++){
            prev = cb(prev ? prev:this[0],this[i],i,this);
       }
       return prev;
    }
}

const sum = arr.customReduce((prev,curr,index,arr) => {
    return prev + curr;
},0);

console.log(sum);