export function renderVideo(video) {
  let str = video;
  const newStr = str.replace('watch?v=', 'embed/');
  return newStr;
}
