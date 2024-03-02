var array = [10, 20, 30, 50, 60, 70];
var answer=[];
var multi = 0;
var temp = 0
for(var i=0; i< array.length; i++){
    for(var j=0; j<array.length; j++){
        if(temp == j){
        }
        else{
            multi *= array[i];
        }
    }
    answer.push(multi);
    temp ++;
    multi =1;
}
console.log(answer);




// let question = [2, 3, 5, 8, 9, 7];
// let product = 1;
// console.log(question);
// for(let i=0;i<question.length;i++){
//     let total = (product *= question[i]);
//     console.log(total);
// }
// for(let i=0;i<question.length;i++){
//     let aa = (product / question[i]);
//     console.log(aa);
// }

// // for(let val of question){
// //     // console.log(val);
// //     let total = product*val;
// //     product++;
// //     console.log(total);
// // }