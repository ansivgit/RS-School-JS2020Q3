function randomGenerate(array = [], quantity = array.length) {
  const { length } = array;

  if (length === 0) return array;

  const unique = new Set();

  while (unique.size < quantity) {
    const indexRandom = Math.round(Math.random() * (length - 1));
    unique.add(array[indexRandom]);
  }

  const randomArray = Array.from(unique);

  return randomArray;
}

export default randomGenerate;
