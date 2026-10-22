/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
      let maxWealth=0
   for(let i=0;i<=accounts.length-1;i++){
   let total= accounts[i].reduce((sum,num)=>sum+num,0)
 
   if(total>maxWealth){
    maxWealth=total;
   }
   
};

  return maxWealth
}
