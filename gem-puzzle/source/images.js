export function getBgPathes(path) {
  const imgArr = [];
  for (let i = 1; i <= 10; i += 1) {
    const imgPath = `${path}vl_00${i}`;
    imgArr.push(imgPath);
  }
  return imgArr;
}
