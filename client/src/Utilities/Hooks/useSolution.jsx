const solutions = () => {
  const moveZeroes = (nums) => {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[pos++] = nums[i];
      }
    }
    for (i = pos; i < nums.length; i++) {
      nums[i] = 0;
    }
  };

  const twoSum = (nums, target) => {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      if (hash[target - n] !== undefined) {
        return [hash[target - n], i];
      }
      hash[n] = i;
    }
    return [];
  };

  const reverseInteger = (x) => {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2 ** 31) return 0;
    return absReversed * Math.sign(x);
  };

  const mergeTwoLists = (l1, l2) => {
    let mergedHead = { val: -1, next: null },
      crt = mergedHead;
    while (l1 && l2) {
      if (l1.val > l2.val) {
        crt.next = l2;
        l2 = l2.next;
      } else {
        crt.next = l1;
        l1 = l1.next;
      }
      crt = crt.next;
    }
    crt.next = l1 || l2;
    return mergedHead.next;
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

  const reverseLinkedList = (head) => {
    let [prev, current] = [null, head];
    while (current) {
      [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
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
    moveZeroes,
    twoSum,
    reverseInteger,
    mergeTwoLists,
    isPalindrome,
    lengthOfLastWord,
    reverseLinkedList,
    missingNumber,
    fibSequence,
    romanToInt,
  };
};

export default solutions;
