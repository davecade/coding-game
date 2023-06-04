const MockDatabase = [
  {
    id: 1,
    title: 'Move Zeroes',
    submitted: false,
    description: `
    Objective:

    Given an integer array nums, your task is to devise a function that moves all instances of 0 to the end of the array while preserving the relative order of the non-zero elements.
    
    Please note that this operation should be performed in-place, meaning modifications should be made directly on the input array without creating a copy.
    
    Examples:
    
        Input: nums = [0,1,0,3,12]
        Output: [1,3,12,0,0]
    
        Input: nums = [0]
        Output: [0]
    
    Constraints:
    
        The length of the nums array lies within the range of 1 <= nums.length <= 10^4. The values within the nums array fall within the range of a 32-bit signed integer, i.e., -2^31 <= nums[i] <= 2^31 - 1.
    `,
    testCases: [
      [0, 2, 6],
      [5, 0, 0, 3],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 2, 3],
      [2, 0, 1, 0, 3, 0, 4],
    ],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 2,
    title: 'Majority Element',
    submitted: false,
    description: `
    Objective:

    Given an array nums of size n, your task is to find and return the majority element.
    
    The majority element is defined as the element that appears more than ⌊n / 2⌋ times. You can assume that the majority element always exists in the array.
    
    Examples:
    
        Input: nums = [3,2,3]
        Output: 3
        Explanation: In the given array, the element 3 appears twice, which is more than ⌊3 / 2⌋ times.
    
        Input: nums = [2,2,1,1,1,2,2]
        Output: 2
        Explanation: In the given array, the element 2 appears four times, which is more than ⌊7 / 2⌋ times.
    
    Constraints:
    
        The length of the array nums is equal to n (n == nums.length).
        The value of n falls within the range of 1 <= n <= 5 * 10^4.
        The values within nums fall within the range of -10^9 <= nums[i] <= 10^9.
    `,
    testCases: [
      [5],
      [3, 3, 3, 3, 3],
      [2, 2, 2, 1, 1],
      [1, 1, 2, 2, 2],
      [2, 1, 2, 1, 2],
    ],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 3,
    title: 'Reverse Integer',
    submitted: false,
    description: `
    Objective:
    
    Develop a function that accepts a 32-bit signed integer, x, and returns the value of x with its digits in reversed order. If the operation of reversing the digits leads to a value outside of the range for a signed 32-bit integer, namely, between -2^31 and 2^31 - 1, the function should return 0 instead.
    
    Please note that your programming environment does not permit the storage of 64-bit integers, whether they are signed or unsigned.
    
    Examples:
    
        Input: x = 123
        Output: 321
    
        Input: x = -123
        Output: -321
    
        Input: x = 120
        Output: 21
    
    Constraints:
    
    The input integer x is restricted to the range of a 32-bit signed integer,
    i.e., -2^31 <= x <= 2^31 - 1.
    `,
    testCases: [12345, -12345, 1000000015, 0, -1],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 4,
    title: 'Contains Duplicate',
    submitted: false,
    description: `
    Objective:

    Given an integer array nums, your task is to determine if any value appears at least twice in the array. Return true if there are any duplicate values, and false if every element in the array is distinct.
    
    Examples:
    
        Input: nums = [1,2,3,1]
        Output: true
        Explanation: The array contains the value 1, which appears twice.
    
        Input: nums = [1,2,3,4]
        Output: false
        Explanation: All elements in the array are distinct; there are no duplicate values.
    
        Input: nums = [1,1,1,3,3,4,3,2,4,2]
        Output: true
        Explanation: The array contains duplicate values: 1, 3, and 4.
    
    Constraints:
    
        The length of the nums array is within the range of 1 <= nums.length <= 10^5.
        The values within the nums array fall within the range of -10^9 <= nums[i] <= 10^9.
    `,
    testCases: [
      [1, 2, 3, 4, 5],
      [1, 1, 2, 3, 4],
      [1, 2, 3, 4, 4],
      [1, 2, 2, 3, 4, 5, 5],
      [-1, -1, 0],
    ],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 5,
    title: 'Valid Palindrome',
    submitted: false,
    description: `
    Objective:

    A string can be termed a palindrome if, after transforming all uppercase characters to lowercase and eliminating all non-alphanumeric characters, the string is identical when read from left to right and right to left. Alphanumeric characters encompass both letters and numbers.
    
    The task at hand involves creating a function that, given an input string s, will return true if the string is a palindrome and false if it is not.
    
    Examples:
    
        Input: s = "A man, a plan, a canal: Panama"
        Output: true
        Explanation: After adjustments, "amanaplanacanalpanama" reads the same forwards and backwards, thereby qualifying it as a palindrome.
    
        Input: s = "race a car"
        Output: false
        Explanation: "raceacar" does not read the same forwards and backwards, thus it is not a palindrome.
    
        Input: s = " "
        Output: true
        Explanation: After removing non-alphanumeric characters, s becomes an empty string "". Given that an empty string reads the same forwards and backwards, it is considered a palindrome.
    
    Constraints:
    
        The length of the string s falls within the range of 1 <= s.length <= 2 * 10^5.
        The string s only comprises printable ASCII characters.
    `,
    testCases: [
      'Able, was I saw Elba',
      "Madam In Eden, I'm Adam",
      'Was it a car or a cat I saw?',
      'Not a Palindrome',
      '12321',
    ],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 6,
    title: 'Length of Last Word',
    submitted: false,
    description: `
    Objective:

    Given a string s comprising words and spaces, your task is to create a function that returns the length of the last word in the string.
    
    Here, a "word" is defined as a maximal substring consisting exclusively of non-space characters.
    
    Examples:
    
        Input: s = "Hello World"
        Output: 5
        Explanation: The last word in the string is "World", which has a length of 5.
    
        Input: s = " fly me to the moon "
        Output: 4
        Explanation: The last word in the string is "moon", which has a length of 4.
    
        Input: s = "luffy is still joyboy"
        Output: 6
        Explanation: The last word in the string is "joyboy", which has a length of 6.
    
    Constraints:
    
        The length of the string s falls within the range of 1 <= s.length <= 10^4.
        The string s comprises only English letters and spaces ' '.
        There will be at least one word present in the string s.
    `,
    testCases: [
      'The quick brown fox',
      'jumps over the lazy dog',
      'Hello, World',
      '   trailing spaces    ',
      'singleword',
    ],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 7,
    title: 'Reverse Only Letters',
    submitted: false,
    description: `
    Objective:

    Given a string s, your task is to reverse the string based on the following rules:
    
        All characters that are not English letters should remain in the same position.
        All English letters, whether lowercase or uppercase, should be reversed.
    
    Return the resulting string after applying these rules.
    
    Examples:
    
        Input: s = "ab-cd"
        Output: "dc-ba"
        Explanation: The English letters 'a' and 'b' are reversed to become 'b' and 'a'. The hyphen '-' remains in the same position.
    
        Input: s = "a-bC-dEf-ghIj"
        Output: "j-Ih-gfE-dCba"
        Explanation: The English letters 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', and 'j' are reversed to 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', and 'a', respectively. The hyphens '-' remain in the same positions.
    
        Input: s = "Test1ng-Leet=code-Q!"
        Output: "Qedo1ct-eeLg=ntse-T!"
        Explanation: The English letters 'T', 'e', 's', 't', 'n', 'g', 'L', 'e', 'e', 't', 'c', 'o', 'd', 'e', 'Q', and '!' are reversed to 'Q', 'e', 'd', 'o', '1', 'c', 't', '-', 'e', 'e', 'L', 'g', '=', 'n', 't', 's', 'e', '-', 'T', and '!', respectively. The numbers and symbols remain in the same positions.
    
    Constraints:
    
        The length of the string s is within the range of 1 <= s.length <= 100.
        The ASCII values of the characters in s fall within the range [33, 122].
        The string s does not contain the characters '"' or '\'.
    `,
    testCases: ['A-B-C', '!@#$%^&*()', 'hElLo,123', 'aBcDe-FgHi', '1tEsT2'],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 8,
    title: 'Missing Number',
    submitted: false,
    description: `
    Objective:
  
    Given an array nums of n distinct numbers within the range [0, n], your task is to write a function that returns the solitary number within this range that is absent from the array.
    
    Examples:
    
        Input: nums = [3,0,1]
        Output: 2
        Explanation: The value of n is 3, as there are 3 numbers, hence all numbers fall within the range [0,3]. The number 2 is absent from this range as it does not appear in nums.
    
        Input: nums = [0,1]
        Output: 2
        Explanation: The value of n is 2, as there are 2 numbers, hence all numbers fall within the range [0,2]. The number 2 is absent from this range as it does not appear in nums.
    
        Input: nums = [9,6,4,2,3,5,7,0,1]
        Output: 8
        Explanation: The value of n is 9, as there are 9 numbers, hence all numbers fall within the range [0,9]. The number 8 is absent from this range as it does not appear in nums.
    
    Constraints:
    
        The length of nums is equal to n (n == nums.length).
        The value of n falls within the range of 1 <= n <= 10^4.
        Each element in nums falls within the range of 0 <= nums[i] <= n.
        All numbers within nums are unique.
    `,
    testCases: [
      [0, 1, 3],
      [0, 1, 2, 3, 5],
      [7, 8, 1, 2, 0, 3, 5, 6],
      [0],
      [0, 2],
    ],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 9,
    title: 'Fibonacci Number',
    submitted: false,
    description: `
    Objective:
  
    The Fibonacci numbers, represented as F(n), constitute a sequence known as the Fibonacci sequence. Each number in the sequence is the sum of the two preceding numbers, beginning with 0 and 1, i.e.,
    
        F(0) = 0, F(1) = 1
        F(n) = F(n - 1) + F(n - 2), for n > 1.
    
    Your task is to write a function that, given an integer n, calculates the value of F(n).
    
    Examples:
    
        Input: n = 2
        Output: 1
        Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
    
        Input: n = 3
        Output: 2
        Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
    
        Input: n = 4
        Output: 3
        Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
    
    Constraints:
    
        The input n is within the range of 0 <= n <= 30.
    `,
    testCases: [0, 1, 10, 20, 30],
    solution: '',
    isSolutionCorrect: false,
  },
  {
    id: 10,
    title: 'Roman to Integer',
    submitted: false,
    description: `
    Objective:
  
    Roman numerals employ seven different symbols: I, V, X, L, C, D, and M, each with different corresponding values.
    
    Symbol-Value Pair:
    I - 1,
    V - 5,
    X - 10,
    L - 50,
    C - 100,
    D - 500,
    M - 1000.
    
    For example, 2 is expressed as II in Roman numerals, equivalent to two 1s added together. 12 is depicted as XII, which is simply X + II. 27 is represented as XXVII, which is XX + V + II.
    
    Roman numerals are typically written from left to right in descending order. However, the numeral for four is not IIII but IV. This is because the numeral one is before five, and we subtract it to get four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    
        'I' can be placed before 'V' (5) and 'X' (10) to create 4 and 9.
        'X' can be placed before 'L' (50) and 'C' (100) to make 40 and 90.
        'C' can be placed before 'D' (500) and 'M' (1000) to make 400 and 900.
    
    Given a Roman numeral, your task is to convert it to an integer.
    
    Examples:
    
        Input: s = "III"
        Output: 3
        Explanation: III equals 3.
    
        Input: s = "LVIII"
        Output: 58
        Explanation: L equals 50, V equals 5, III equals 3.
    
        Input: s = "MCMXCIV"
        Output: 1994
        Explanation: M equals 1000, CM equals 900, XC equals 90, and IV equals 4.
    
    Constraints:
    
        The length of s falls within the range of 1 <= s.length <= 15.
        s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
        It is guaranteed that s is a valid Roman numeral in the range [1, 3999].
    `,
    testCases: ['IV', 'XL', 'MMMCMXCIX', 'MDCCLXXVI', 'DCCCXC'],
    solution: '',
    isSolutionCorrect: false,
  },
];

export default MockDatabase;
