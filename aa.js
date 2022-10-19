/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let low= 0;
    let high= nums.length-1;
    while(low<high){
        let mid= parseInt((low+high)/2);
        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]>target){
    
                  high= mid;
        }
        
        else low= mid+1;
    }
          return low;
};
console.log(searchInsert([1,3,5,6], 2));