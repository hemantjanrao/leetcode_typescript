function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = new Map([
    ['}', '{'],
    [']', '['],
    [')', '(']
  ]);
  const openingBraces = Array.from(map.values());
  let mismatchedBrace = false;

  for (let i = 0; i < s.length; i++) {
    if (openingBraces.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const openingBrace = stack.pop();
      const expectedBrace = map.get(s[i]);
      if (openingBrace !== expectedBrace) {
        mismatchedBrace = true;
        break;
      }
    }
  }

  return !mismatchedBrace && !stack.length;
}

const result: boolean = isValid('({{}})');
console.log('result =>', result);
