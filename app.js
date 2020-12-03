var per;
function getMarks() {
    var name = document.getElementById("Name");
    var program = document.getElementById("Program");
    var input1 = document.getElementById("formGroupExampleInput1");
    var input2 = document.getElementById("formGroupExampleInput2");
    var input3 = document.getElementById("formGroupExampleInput3");
    var input4 = document.getElementById("formGroupExampleInput4");
    var input5 = document.getElementById("formGroupExampleInput5");
    var input6 = document.getElementById("formGroupExampleInput6");
    var Name = name.value;
    var Program = program.value;
    var value1 = +input1.value;
    var value2 = +input2.value;
    var value3 = +input3.value;
    var value4 = +input4.value;
    var value5 = +input5.value;
    var value6 = +input6.value;
    var Marks = (value1 + value2 + value3 + value4 + value5 + value6);
    var Total = 600;
    var per = Math.floor(Marks * 100 / Total);
    console.log("The Student Name is = ", Name)
    console.log("The Program Name is = ", Program)
    console.log("The Number in Automata is = ", value1)
    console.log("The Number in PP is = ", value2)
    console.log("The Number in CCN is = ", value3)
    console.log("The Number in CA is = ", value4)
    console.log("The Number in E-Commerce is = ", value5)
    console.log("The Number in HCI is = ", value6)
    console.log("The Total Number = ", Marks)
    console.log("The Percentage = ", per)
    if (per < 0 || per > 100) {
        console.log("Wrong Entry");
    }
    else if (per < 50) {
        console.log("Grade F");
    }
    else if (per >= 50 && per < 60) {
        console.log("Grade D");
    }
    else if (per >= 60 && per < 70) {
        console.log("Grade C");
    }
    else if (per >= 70 && per < 80) {
        console.log("Grade B");
    }
    else if (per >= 80 && per < 90) {
        console.log("Grade A");
    }
    else {
        console.log("Grade A+");
    }
    document.getElementById('showdata').innerHTML = `${Name} and Program is ${Program} and Out of 600 your total is ${Marks} and percentage is ${per}%. `
    var Name = name.value = "";
    var Program = program.value = "";
    var value1 = input1.value = "";
    var value2 = input2.value = "";
    var value3 = input3.value = "";
    var value4 = input4.value = "";
    var value5 = input5.value = "";
    var value6 = input6.value = "";
}
