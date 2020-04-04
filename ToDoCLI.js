const readline = require("readline");

let arr = [];
console.log("Welcome to Todo CLI! \n--------------------");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const cli = userinput => {
  if (userinput == "v") {
    viewPrint();
  }
  if (userinput == "n") {
    newTask();
  }
  if (userinput.startsWith("c")) {
    completed(userinput);
  }
  if (userinput.startsWith("d")) {
    del(userinput);
  }
  if (userinput == "q") {
    console.log("See you soon! ");
    rl.close();
  }
};

rl.question(
  "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit \n",
  cli
);
const main = arr => {
  rl.question(
    "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit \n",
    cli
  );
};

const viewPrint = () => {
  if (arr.length == 0) {
    console.log("List is empty...");
    main();
  } else {
    arr.forEach((line, index) => {
      console.log(`${index} ${line}`);
    });
    main();
  }
};
const newTask = () => {
  const appender = line => {
    arr.push(`[ ] ${line}`);
    main();
  };
  rl.question(" What ? \n", appender);
};
const completed = userinput => {
  let linenum = parseFloat(userinput.charAt(1));
  let changeline = arr[linenum];
  changeline = changeline.replace("[ ]", "[✓]");
  arr[linenum] = changeline;
  console.log(`Completed: "${changeline.replace("[✓]", "")}"`);
  main();
};
const del = userinput => {
  let linenum = parseFloat(userinput.charAt(1));
  //let x = arr.splice(linenum, 1)[0].slice(4);
  console.log(`Deleted: “${arr.splice(linenum, 1)[0].slice(4)}“`);
  main();
};
