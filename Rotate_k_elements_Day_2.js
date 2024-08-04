var rotate =  function rotate(arr,k){
    let r=arr.length-1 
    k = k % r
    function reverse(start,end){
        while(start<end){
            let temp=arr[start]
            arr[start]=arr[end]
            arr[end]=temp
            start++
            end--
        }
    }
    
    reverse(0,r)
    reverse(0,k-1)
    reverse(k,r)
    return arr
}
let array=[1,2,3,4,5,6,7]
let k=3
console.log(rotate(array,k))
