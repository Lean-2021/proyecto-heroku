let numbers = [];
let repeat = {};

process.on("message", (cant) => {
  const random = (quantity, max, min) => {
    for (let i = 0; i < quantity; i++) {
      let numRandom = Math.floor(Math.random() * (max - min) + min);
      numbers.push(numRandom);
    }
    numbers.sort((a, b) => {
      return a - b;
    });

    numbers.forEach((numero) => {
      repeat[numero] = (repeat[numero] || 0) + 1;
    });
    return repeat;
  };
  process.send(random(cant, 1000, 1));
});
