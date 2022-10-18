const arr = [1,3,4,5,6,67];

Array.prototype.filterCustom = function(cb){
    const res = [];
    for(let i = 0;i<this.length;i++) {
        if(cb(this[i])) res.push(this[i]);
    }
    return res;
}


const objList = [
    {name:'ha',score:2},
    {name:'sa',score:3},
    {name:'ei',score:4},
    {name:'eu',score:3}
]

const avgScore = objList.filterCustom(team=> team.score <=3);
console.log(avgScore)