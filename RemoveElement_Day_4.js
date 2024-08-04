function removeElement(nums,val){
    let l=0;
    let r=nums.length
    
    for(let i=0;i<r;i++){
        if(nums[i]!==val){
            nums[l]=nums[i]
            l++
        }
    }
    nums.length=l
    return l
}
let nums=[0,1,2,2,3,0,4,2]
let val=2
console.log(removeElement(nums,val))
console.log(nums)

