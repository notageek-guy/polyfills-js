const userObj = [
  {
    name: "John",
  },
  {
    name: "Jon",
  },
  {
    name: "Sam",
  },
];

Array.prototype.customForEach = function (cb) {
  let len = this.length;
  if (len !== 0) {
    for (let i = 0; i < len; i++) {
      return cb(this[i],i,this);
    }
  }
};


const result = userObj.customForEach((user,index,arr) => {
    console.log(user,index,arr);
    });