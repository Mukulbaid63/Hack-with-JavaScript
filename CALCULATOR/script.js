const ouputContainer = document.querySelector(`.output-value`);
const prevValueContainer = document.querySelector(`.prev-value`);

const getFormattedNum = (num) => {
  const n = Number(num);
  const value = n.toLocaleString("en");
  return value;
};

const getUnFormattedNumber = (num) => {
  return Number(num.replace(/,/g, ""));
};

const getOutputNum = () => {
  return ouputContainer.innerText;
};

const getHistoryNum = () => {
  return prevValueContainer.innerText;
};

const operatorsList = document.querySelectorAll(`.operator`);

Array.from(operatorsList).forEach((operator) =>
  operator.addEventListener("click", function () {
    if (this.id === "clear") {
      prevValueContainer.innerText = "";
      ouputContainer.innerText = "";
    } else if (this.id === "backspace") {
      const num = getUnFormattedNumber(ouputContainer.innerText);
      ouputContainer.innerText = getFormattedNum(num.toString().slice(0, -1));
    } else {
      let output = getOutputNum();
      let history = getHistoryNum();
      if (output != "") {
        console.log("called");
        output = getUnFormattedNumber(output);
        history += output;
        console.log(history);
        console.log(this.id);
        if (this.id == "=") {
          console.log("Called =");
          eval(history);
        } else {
          history += this.id;
          console.log(history);
        }
      }
    }
  })
);

const numbersList = document.querySelectorAll(`.number`);

Array.from(numbersList).forEach((operator) =>
  operator.addEventListener("click", function () {
    let outputVal = getUnFormattedNumber(getOutputNum());
    if (outputVal !== NaN) {
      const num = outputVal + this.id;
      if (num.length > 9) ouputContainer.style.fontSize = "30px";
      ouputContainer.innerText = getFormattedNum(num);
    }
  })
);
