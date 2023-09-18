export function renderInstruction(instruction) {
  let str = instruction;
  const newStr = str.replace('\r\n', '<br>');
  return newStr;
}
