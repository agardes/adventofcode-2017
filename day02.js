let fs = require('fs');
let read = fs.readFileSync("day02.txt");
let data = read.toString().split('\n').map(el=>el.split('\t').map(Number))
let c = 0
let c2 = 0
data.forEach(el=>c+= Math.max(...el) - Math.min(...el))
data.forEach(el=>{
    for(let i=0;i<el.length;i++){
        for(let j=0;j<el.length;j++){
            if(j==i){
                continue
            }
            if(el[i]%el[j]==0){
                c2+=el[i]/el[j]
            }
        }
    }
})
console.log("Part one = " + c)
console.log("Part two = " +c2)