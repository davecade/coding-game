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
  },
  {
    id: 2,
    title: 'Two Sum',
    submitted: false,
    description: `
    Problem Statement:
    You're provided with an array of integers (nums) and another integer (target). Your task is to find and return the indices of two numbers within nums that together, add up to target.
    
    Assumptions:
        Each input will have precisely one solution.
        You may not use the same element twice.
        The answer can be returned in any order. Be sure to print the result.
    
    Examples:
        Input: nums = [2,7,11,15], target = 9

        Output: [0,1]

        Explanation: nums[0] + nums[1] == 9, hence the result is [0, 1].

        Input: nums = [3,2,4], target = 6

        Output: [1,2]

        Input: nums = [3,3], target = 6

        Output: [0,1]
    
    Constraints:
        The length of nums is between 2 and 10^4.
        Each integer in nums, as well as the target, can range from -10^9 to 10^9.
        Only one valid answer exists for each input.
    `,
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
  },
  {
    id: 4,
    title: 'Merge Two Sorted Lists',
    submitted: false,
    description: `
    Objective:
    
    Your task is to implement a function that receives the head nodes of two sorted linked lists, denoted as list1 and list2.
    
    The function is required to merge these two lists into a single sorted linked list. This should be achieved by splicing the nodes of the initial two lists together, preserving their original order.
    
    The function should then return the head node of the newly merged linked list.
    
    Examples:
    
        Input: list1 = [1,2,4], list2 = [1,3,4]
        Output: [1,1,2,3,4,4]
    
        Input: list1 = [], list2 = []
        Output: []
    
        Input: list1 = [], list2 = [0]
        Output: [0]
    
    Constraints:
    
        The number of nodes in both list1 and list2 lies within the range of [0, 50].
        The value of each node (Node.val) is between -100 and 100, inclusive.
        Both list1 and list2 are sorted in a non-decreasing order.
    `,
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
  },
  {
    id: 7,
    title: 'Reverse Linked List',
    submitted: false,
    description: `
    Objective:

    Your task is to create a function that, given the head of a singly linked list, will reverse the order of the list's nodes and return the head of the newly reversed list.
    
    Examples:
    
        Input: head = [1,2,3,4,5]
        Output: [5,4,3,2,1]
    
        Input: head = [1,2]
        Output: [2,1]
    
        Input: head = []
        Output: []
    
    Constraints:
    
        The number of nodes in the list lies within the range of [0, 5000].
        The value of each node (Node.val) is within the range of -5000 <= Node.val <= 5000.
    `,
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
  },
];

export default MockDatabase;
