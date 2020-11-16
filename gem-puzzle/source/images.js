export function getBgPathes(path) {
  const imgArr = [];
  for (let i = 1; i <= 10; i++) {
    const imgPath = `${path}vl_00${i}`;
    imgArr.push(imgPath);
  }
  return imgArr;
}
