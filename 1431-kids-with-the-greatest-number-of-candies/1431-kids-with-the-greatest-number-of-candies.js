/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
   let result=[]
   let largest =0
let final=[]
for(let i=0;i<=candies.length-1;i++){
    if(candies[i]>largest){
        largest=candies[i];
    }

}
for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= largest) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};