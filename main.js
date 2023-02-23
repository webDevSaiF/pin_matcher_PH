//* HIDE NOTIFICATION SECTION
const notificationSection = document.querySelector(".notify-section");

notificationSection.style.transform = "translateX(400%)";
notificationSection.style.transition = "all 1s ease";

// * GENERATING RANDOM NUMBER FOR PIN GENERATOR
const generateBtn = document.querySelector(".generate-btn");
let thePIN;

generateBtn.addEventListener("click", function () {
  const generateValue = document.querySelector("#generatedValue");
  const randomPIN = Math.floor(Math.random() * 9000) + 1000;

  thePIN = randomPIN;
  generateValue.value = randomPIN;

  printingDigitOnScreen();
});

// * PRINTING VALUES IN DOM AND MATCHING VALUES WITH PIN
function printingDigitOnScreen() {
  const calcBody = document.querySelector(".calc-body");
  const calcOutput = document.querySelector(".calc-output");
  let printVal = "";
  let trial = 3;

  calcBody.addEventListener("click", function (e) {
    switch (e.target.textContent) {
      case "7":
      case "8":
      case "9":
      case "4":
      case "5":
      case "6":
      case "1":
      case "2":
      case "3":
      case "0":
        if (calcOutput.value.length <= 3) {
          printVal += e.target.textContent;
          calcOutput.value = printVal;
        }
        break;
      case "C":
        printVal = "";
        calcOutput.value = printVal;
        break;
      case "<":
        let newVal = printVal.slice(0, -1);
        printVal = newVal;
        calcOutput.value = printVal;
        break;

      case "Submit":
        let actionsLeft = document.querySelector(".action-left");
        if (printVal)
          if (thePIN === parseFloat(printVal)) {
            trial--;
            actionsLeft.textContent = `${trial} try left`;
            e.target.style.display = "none";
            notificationSection.style.transform = "translateX(0%)";
            document.querySelector(".red").style.transform = "scale(0)";
          } else {
            trial--;

            if (trial > 0 && printVal) {
              actionsLeft.textContent = `${trial} try left`;
            } else {
              actionsLeft.textContent = `0 try left`;
              e.target.style.display = "none";
              notificationSection.style.transform = "translateX(0%)";
              document.querySelector(".green").style.transform = "scale(0)";
            }
          }
        break;
    }
  });
}
