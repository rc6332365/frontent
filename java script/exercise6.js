function countvowel() {
   // console.log("vowel");
   var sentence1 = document.getElementById("sentence").value;
   console.log("sentence1");
    var sentence1_arreay = sentence1.split("");
    console.log(sentence1_arreay);
var vowel =[ 'a', 'e', 'i', 'o', 'u'];
var count = 0;
var count_1 =0;
var count_2 =0;
var count_3 =0;
var count_4 =0;
var count_5 =0;
  for( var j = 0 ; j< sentence1.length; j++)
  {
     if( sentence1_arreay[j] === vowel[0] || sentence1_arreay[j] === vowel[1] || sentence1_arreay[j] === vowel[2] || sentence1_arreay[j] === vowel[3] || sentence1_arreay[j] === vowel[4])
     count++;
   if ( sentence1_arreay[j] === vowel[0] ) {
      count_1++
   }
   if ( sentence1_arreay[j] === vowel[1] ) {
      count_2++
   }
   if ( sentence1_arreay[j] === vowel[2] ) {
      count_3++
   }
   if ( sentence1_arreay[j] === vowel[3] ) {
      count_4++
   }
   if ( sentence1_arreay[j] === vowel[4] ) {
      count_5++
   }
   }
   
  console.log(count);
  console.log(count_1);
  console.log(count_2);
  console.log(count_3);
  console.log(count_4);
  console.log(count_5);
}
