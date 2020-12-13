/** @format */

const isPalindrome = (string) => {
	if (string.length <= 1) {
		return `It's a Palindrome`;
	}
	let [firstLetter] = string;
	let lastLetter = string[string.length - 1];

	if (firstLetter === lastLetter) {
		let noMatchingStrings = string.substring(1, string.length - 1);
		return isPalindrome(noMatchingStrings);
	} else {
		return `Not a Palindrome`;
	}
};

console.log(isPalindrome("dad"));
