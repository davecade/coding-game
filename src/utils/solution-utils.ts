const solutions = () => {
  const moveZeroes = (nums) => {
    let size = nums.length;
    for (let i = 0; i < size; i++) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        nums.push(0);
        i--;
        size--;
      }
    }
    return nums;
  };

  const majorityElement = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
  };

  const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
    return s;
  };

  const containsDuplicate = (nums) => {
    return nums.sort().some((a, i) => a === nums[i - 1]);
  };

  const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
  };

  const lengthOfLastWord = (s) => {
    return s.trim().split(' ').pop().length;
  };

  const reverseOnlyLetters = (s) => {
    s = s.split('');
    let start = 0;
    let end = s.length - 1;
    const regex = /[a-zA-Z]/g;
    while (start < end) {
      if (s[start].match(regex) === null) {
        start++;
        continue;
      }
      if (s[end].match(regex) === null) {
        end--;
        continue;
      }
      let tmp = s[start];
      s[start] = s[end];
      s[end] = tmp;
      start++;
      end--;
    }

    return s.join('');
  };

  const missingNumber = (nums) => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  };

  const fibSequence = (n) => {
    if (n < 2) return n;
    let a = 0,
      b = 1;
    for (let i = 1; i < n; i++) [a, b] = [b, a + b];
    return b;
  };

  const romanToInt = (s) => {
    const sym = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
        result += next - cur;
        i++;
      } else {
        result += cur;
      }
    }
    return result;
  };

  return {
    1: moveZeroes,
    2: majorityElement,
    3: reverseString,
    4: containsDuplicate,
    5: isPalindrome,
    6: lengthOfLastWord,
    7: reverseOnlyLetters,
    8: missingNumber,
    9: fibSequence,
    10: romanToInt,
  };
};

export default solutions;
