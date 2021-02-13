const getFormattedNum = (num) => {
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value;
};

const unFormatNumber = (num) => {
  return Number(num.replace(/,/g, ""));
};

const operatorsList = document.querySelectorAll(`.operator`);

console.log(operatorsList);
