// Problem Statement
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s= "hello"
// Output: "holle"
// Example 2:

// Input: s= "AEIOU"
// Output: "UOIEA"
// Example 3:

// Input: s= "DesignGUrus"
// Output: "DusUgnGires"
// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

const reverseVowels = function (str) {
  const vocals = [];
  for (let i = str.length -1; i >= 0; i--) {
    if (str[i].match(/[aeiouAEIOU]/)) {
      vocals.push(str[i]);
    }
  }
  let vocalIndex = 0;
  let finalStr = '';
  for (let i = 0; i < str.length; i++) {
    if (vocals.includes(str[i])) {
      finalStr += vocals[vocalIndex];
      vocalIndex++;
    } else {
      console.log(str[i], ' not a vocal');
      finalStr += str[i]
    }
  }
  return finalStr;
}
console.log(reverseVowels("DesignGUrus")) // DusUgnGires

console.log(reverseVowels("AEIOU")) // DusUgnGires
