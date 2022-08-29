// Given an integer N, returns the maximum
// possible value obtainable by deleting one '5' digit from the decimal
// representation of N. It is guaranteed that N will contain at least one '5' digit.

function sol(a) {
  let stringParam = String(a);
  let paramLen = stringParam.length;

  if (a > 1) {
    for (i = 0; i <= stringParam.length; i++) {
      if (stringParam[i] === "5") {
        stringParam =
          stringParam.slice(0, i) + stringParam.slice(i + 1, paramLen);

        return parseInt(stringParam);
      }
    }
  } else {
    for (i = 1; i <= stringParam.length; i++) {
      if (stringParam[paramLen - i] === "5") {
        stringParam =
          stringParam.slice(0, paramLen - i) +
          stringParam.slice(paramLen - i + 1, paramLen);
        return parseInt(stringParam);
      }
    }
  }
  return parseInt(stringParam);
}

console.log(sol(5050));
