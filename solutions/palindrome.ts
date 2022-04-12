function isPalindrome(x: number): boolean {
  const str: string = x.toString();
  const len: number = str.length;
  let reverse = '';

  for (let i = len; i >= 0; i--) {
    reverse += str[i];
  }
  if (reverse.includes(str)) return true;

  return false;
}

const fin: boolean = isPalindrome(121);
console.log(`result => `, fin);
