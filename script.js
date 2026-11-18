function firstWord(s) {
  // your code here
	s = s.trim();

let i = 0;
let res = "";

while (i < s.length && s[i] != " ") {
    res += s[i];
    i++;
}

if (s.length > 0)
    return res;
else
    return " ";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
