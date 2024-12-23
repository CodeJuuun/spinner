process.stdout.write('hello from spinner1.js... \rheyyy\n');

const rotationAnimation = () => {
  const arrOfLines = ["|", "/", "-", "\\"]
  let delayTime = 100

  for(const char of arrOfLines) {
      setTimeout(() => {
        process.stdout.write(`\r${char} `)
      }, delayTime);
      delayTime += 200;
    // console.log(char)
  }
}

rotationAnimation()

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);
