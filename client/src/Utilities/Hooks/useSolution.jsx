const solutions = () => {
  var moveZeroes = function (nums) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
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

  const reverseInteger = function (x) {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2 ** 31) return 0;
    return absReversed * Math.sign(x);
  };

  const mergeTwoLists = function (l1, l2) {
    var mergedHead = { val: -1, next: null },
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

  var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length;
  };

  var reverseLinkedList = function (head) {
    let [prev, current] = [null, head];
    while (current) {
      [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
  };

  return {
    moveZeroes,
    twoSum,
    reverseInteger,
    mergeTwoLists,
    isPalindrome,
    lengthOfLastWord,
    reverseLinkedList,
  };
};

export default solutions;
