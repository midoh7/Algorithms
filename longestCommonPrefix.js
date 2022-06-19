function longestCommonPrefix(arr) {
  if (arr.length < 1 || arr[0] === "") return "";

  let len = arr[0].length;
  let word = arr.shift();
  let tempWord = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < len; j++) {
      if (word[j] === arr[i][j]) {
        tempWord += word[j];
      } else break;
    }
    word = tempWord;
    tempWord = "";
    len = word.length;
  }
  return word;
}
