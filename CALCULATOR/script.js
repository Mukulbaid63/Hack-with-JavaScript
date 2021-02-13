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
  return document.querySelector(`.output-value`).innerText;
};

const getHistoryNum = () => {
  return document.querySelector(`.prev-value`).innerText;
};

const operatorsList = document.querySelectorAll(`.operator`);

Array.from(operatorsList).forEach((operator) =>
  operator.addEventListener("click", function () {
    switch (this.id) {
      case "clear":
        {
          prevValueContainer.innerText = "";
          ouputContainer.innerText = "";
        }
        break;
      case "backspace":
        {
          const num = getUnFormattedNumber(ouputContainer.innerText);
          ouputContainer.innerText = getFormattedNum(
            num.toString().slice(0, -1)
          );
        }
        break;
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
      document.querySelector(`.output-value`).innerText = getFormattedNum(num);
    }
  })
);
