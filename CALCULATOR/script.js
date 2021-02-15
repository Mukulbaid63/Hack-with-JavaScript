const ouputContainer = document.querySelector(`.output-value`);
const prevValueContainer = document.querySelector(`.prev-value`);

const getFormattedNum = (num) => {
  if (num == "-") return "";
  const n = Number(num);
  const value = n.toLocaleString("en-IN");
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

      if (output == "" && history != "") {
        history = isNaN(history[history.length - 1])
          ? history.substr(0, history.length - 1)
          : history;
      }
      if (output != "" || history != "") {
        output = output === "" ? output : getUnFormattedNumber(output);
        history += output;
        if (this.id == "=") {
          prevValueContainer.innerText = "";
          ouputContainer.innerText = getFormattedNum(eval(history));
          history = "";
        } else {
          history += this.id;
          ouputContainer.innerText = "";
          prevValueContainer.innerText = history;
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
