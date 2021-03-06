const cc = console.log;

class Sandbox {

    isPrime(target){
        if (target <= 1) return false
        if (target <= 3) return true
        if (target % 2 == 0 || target % 3 == 0) return false;

        for (let i = 6; i <= target / 2; i=i+6){
            if ((target % 6) -1 == 0 || (target % 6) +1 == 0){
                return true;
            }
        }

        return false;
    }

    rng100(){
        return Math.floor(Math.random() * 100);
    }

    twoSumImproved(nums, target){
        let map = [];
        let current;
        let difference;

        for (let i = 0; i < nums.length; i++){
            if (map[nums[i]]) continue;
            if (!map[nums[i]]) map[nums[i]] = nums[i];
            current = nums[i]
            difference = target - current;
            if (map[difference]) return [nums[i], map[difference]]
        }

        return false;
    }

    findMedian(nums){ // Array must be pre-sorted.
        let length = nums.length;
        if (length%2 === 0) return ((nums[length/2] + nums[length/2 -1]) /2);
        if (length%2 !== 0) return (nums[(Math.floor(length/2))] /2);
    }

    commonElements(kArray){
        let map = {};
        let arrs = JSON.parse(JSON.stringify(kArray));
        let occurences = [];
        let results = [];

        for (let arr of arrs){
            arr = arr.sort();
        }

        for (let arr of arrs){
            for (let i = 0; i < arr.length; i++){
                if (occurences[arr[i]]) continue;
                occurences[arr[i]] = true;
                map[arr[i]] ? map[arr[i]] += 1 : map[arr[i]] = 1
            }
            occurences = [];
        }

        for (let entry in map){
            if (map[entry] === arrs.length) results.push(+entry)
        }

        return results;
    }


}


let sandbox = new Sandbox();
cc(sandbox.commonElements([
    [1, 2, 3, 4],
    [5, 2, 3, 4],
    [9, 9, 1, 2, 4]
]));

/*
cc(sandbox.isPrime(95));
cc(sandbox.rng100());
cc(sandbox.twoSumImproved([1, 9, 12, 8, 4, 2, 3, 4], 8));
cc(sandbox.findMedian([3, 4, 5, 8]));


*/