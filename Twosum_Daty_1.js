
var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return []; // If no solution is found
}

let array = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(array, target)); // Output: [0, 1]
