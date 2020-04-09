var JFile = require("jfile");

var one = ",,,,,|,,|";
var two = ",_,,_||_,";
var three = ",_,,_|,_|";
var four = ",,,|_|,,|";
var five = ",_,|_,,_|";
var six = ",_,|_,|_|";
var seven = ",_,,,|,,|";
var eight = ",_,|_||_|";
var nine = ",_,|_|,_|";

var myF = new JFile("textCod.txt");

function FormattingNum(
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  failNum
) {
  var fullNumShow = [];
  const LFail = failNum.lines.length;
  const a1 = failNum.lines[0] ? failNum.lines[0].length : 0;
  const a2 = failNum.lines[1] ? failNum.lines[1].length : 0;
  const a3 = failNum.lines[2] ? failNum.lines[2].length : 0;
  if (
    LFail < 3 ||
    LFail > 3 ||
    a1 < 27 ||
    a1 > 27 ||
    a2 > 27 ||
    a2 < 27 ||
    a3 > 27 ||
    a3 < 27
  ) {
    console.log("formatter does not support the text you entered");
  } else {
    for (s = 3; s < 28; s++) {
      for (i = 0; i < 25; i++) {
        const myOne = failNum.lines[0]
          .toString()
          .substring(s, i)
          .replace(/\s/g, ",");
        const myTwo = failNum.lines[1]
          .toString()
          .substring(s, i)
          .replace(/\s/g, ",");
        const myThree = failNum.lines[2]
          .toString()
          .substring(s, i)
          .replace(/\s/g, ",");

        fillNum = myOne + myTwo + myThree;
        switch (fillNum) {
          case num1:
            fullNumShow.push("1");
            break;
          case num2:
            fullNumShow.push("2");
            break;
          case num3:
            fullNumShow.push("3");
            break;
          case num4:
            fullNumShow.push("4");
            break;
          case num5:
            fullNumShow.push("5");
            break;
          case num6:
            fullNumShow.push("6");
            break;
          case num7:
            fullNumShow.push("7");
            break;
          case num8:
            fullNumShow.push("8");
            break;
          case num9:
            fullNumShow.push("9");
            break;
          default:
        }
        i += 2;
        s += 3;
      }
    }
    const showNumber = fullNumShow.toString().replace(/,/g, "");

    console.log(showNumber);
  }
}
FormattingNum(one, two, three, four, five, six, seven, eight, nine, myF);
