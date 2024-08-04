

var searchInsert = function(nums, target) {

    let r=nums.length-1
    let l=0;
    while(l<=r){
        let mid=Math.floor((l+r)/2)
        if(nums[mid]==target){
            return mid
        } else if(nums[mid]<target){
            l=mid+1
        }else{
            r=mid-1
        }

    }
    return l
}
let nums=[1,3,5,6]
let target=5
console.log(searchInsert(nums,target))
