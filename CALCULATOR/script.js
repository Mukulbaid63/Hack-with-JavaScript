const getFormattedNum = (num) => {
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value;
};

const unFormatNumber = (num) => {
  return Number(num.replace(/,/g, ""));
};

const operatorsList = document.querySelectorAll(`.operator`);
Array.from(operatorsList).forEach((operator) =>
  operator.addEventListener("click", function () {
    console.log(this.id);
  })
);
const numbersList = document.querySelectorAll(`.number`);
Array.from(numbersList).forEach((operator) =>
  operator.addEventListener("click", function () {
    console.log(this.id);
  })
);
