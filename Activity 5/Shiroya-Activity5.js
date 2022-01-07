//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}
function square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = Math.pow(num, 2);
        document.frmCalc.txtNumber.value = prevCalc;
    }
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = Math.sqrt(num);
        document.frmCalc.txtNumber.value = prevCalc;
    }
}
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc= Math.floor(num);
        document.frmCalc.txtNumber.value = prevCalc;
    }
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = Math.round(num);
        document.frmCalc.txtNumber.value = prevCalc;
    }
}

function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

function log() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = Math.log(num);
        document.frmCalc.txtNumber.value = prevCalc;
    }
}

function log10() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = Math.log10(num);
        document.frmCalc.txtNumber.value = prevCalc;
    }
}
//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Subtract") {
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }

        }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}