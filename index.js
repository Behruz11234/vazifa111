// // 1. Palindrom tekshirish
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("apple")); // false


// // 2. Sonni binary ko‘rinishga o‘tkazish
// function toBinary(num) {
//   return num.toString(2);
// }
// console.log(toBinary(10)); // "1010"


// // 3. Array ichida elementlarni almashtirish
// function swapElements(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   return arr;
// }
// console.log(swapElements([1, 22, 13, 4], 1, 2)); // [1, 13, 22, 4]


// // 4. Harflar chastotasi
// function letterFrequency(str) {
//   let result = {};

//   for (let char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }
// console.log(letterFrequency("javascript"));


// // 5. Anagram tekshirish
// function isAnagram(str1, str2) {
//   let sortStr = str => str.split('').sort().join('');
//   return sortStr(str1) === sortStr(str2);
// }
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world")); // false


// // 6. Eng uzun unique substring
// function longestUniqueSubstring(str) {
//   let set = new Set();
//   let left = 0;
//   let maxLength = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }
//     set.add(str[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }
// console.log(longestUniqueSubstring("abcabcbb")); // 3
// console.log(longestUniqueSubstring("bbbbb")); // 1


// // 7. Maximum subarray sum (Kadane)
// function maxSubArraySum(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }
// console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6


// // 8. Two Sum
// function findTwoSum(arr, target) {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     let diff = target - arr[i];

//     if (map[diff] !== undefined) {
//       return [diff, arr[i]];
//     }

//     map[arr[i]] = i;
//   }

//   return null;
// }
// console.log(findTwoSum([2, 7, 11, 15], 9)); // [2, 7]


// // 9. Eng uzun ketma-ket sonlar
// function longestConsecutive(arr) {
//   let set = new Set(arr);
//   let maxLength = 0;

//   for (let num of set) {
//     if (!set.has(num - 1)) {
//       let current = num;
//       let length = 1;

//       while (set.has(current + 1)) {
//         current++;
//         length++;
//       }

//       maxLength = Math.max(maxLength, length);
//     }
//   }

//   return maxLength;
// }
// console.log(longestConsecutive([1, 4, 200, 2, 3])); // 3


// // 10. Musbat va manfiy yig‘indi
// function sumPositivesAndNegatives(arr) {
//   let positiveSum = 0;
//   let negativeSum = 0;

//   for (let num of arr) {
//     if (num > 0) positiveSum += num;
//     else if (num < 0) negativeSum += num;
//   }

//   return { positiveSum, negativeSum };
// }
// console.log(sumPositivesAndNegatives([1, -2, 3, -4, 5]));
// { positiveSum: 9, negativeSum: -6 }