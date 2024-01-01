const fs = require("fs");

module.exports.encrypt = (text) => {
  var letterEquile =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-=;:.,|";
  const key = fs.readFileSync("./granite.key", "utf8");
  var keyArr = key.split("");
  var textInput = text.split("");
  // For first array
  var pastKey = 0;

  // Second array
  var newtext = "";
  var pastKeyTwo = 0;
  var pastData = 0;

  for (var i = 0; i < text.length * key.length; i++) {
    if (textInput[pastData] === undefined) {
      break;
    } else if (textInput[pastData] === " ") {
      newtext = newtext + " ";
      pastData++;
    } else {
      if (textInput[pastData] === letterEquile[pastKeyTwo]) {
        console.log(
          `This ${textInput[pastData]}  Equil to -> ${letterEquile[pastKeyTwo]} | ${keyArr[pastKeyTwo]}`
        );
        newtext = newtext + keyArr[pastKeyTwo];
        pastData++;
        pastKeyTwo = 0;
      } else {
        pastKeyTwo++;
        console.log(
          `This ${textInput[pastData]}  Not Equil to -> ${letterEquile[pastKeyTwo]}`
        );
      }
    }
  }
  return newtext;
};

module.exports.decrypt = (text) => {
  console.log(text);
  var letterEquile =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-=;:.,|";
  const key = fs.readFileSync("./granite.key", "utf8");
  var keyArr = key.split("");
  var textInput = text.split("");
  // For first array
  var pastKey = 0;

  // Second array
  var newtext = "";
  var pastKeyTwo = 0;
  var pastData = 0;

  for (var i = 0; i < text.length * key.length; i++) {
    if (textInput[pastData] === undefined) {
      break;
    } else if (textInput[pastData] === " ") {
      newtext = newtext + " ";
      pastData++;
    } else {
      if (textInput[pastData] === keyArr[pastKeyTwo]) {
        console.log(
          `This ${textInput[pastData]}  Equil to -> ${keyArr[pastKeyTwo]} | ${letterEquile[pastKeyTwo]}`
        );
        newtext = newtext + letterEquile[pastKeyTwo];
        pastData++;
        pastKeyTwo = 0;
      } else {
        pastKeyTwo++;
        console.log(
          `This ${textInput[pastData]}  Not Equil to -> ${keyArr[pastKeyTwo]} | ${letterEquile[pastKeyTwo]}`
        );
      }
    }
  }
  return newtext;
};
