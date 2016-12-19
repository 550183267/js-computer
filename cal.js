var x = 0,
	y = 0,
	result = 0; //存放结果
var operate = 0; //判断输入的运算符 
var calcul = 0; //判断计算状态的标志
var quit = 0; //防止重复按键的标志 

// 数字
function com(x) {
	//获得当前显示数据 
	var str = String(document.calculator.screen.value);
	//如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
	str = (str != "0") ? ((operate == 0) ? str : "") : "";
	//给当前值追加字符 
	str = str + String(x);
	//刷新显示 
	document.calculator.screen.value = str;
	//重置输入状态 
	operate = 0;
	//重置防止重复按键的标志 
	quit = 0;
}
// 点号
function spot() {
	//获得当前显示数据 
	var str = String(document.calculator.screen.value);
	//如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
	str = (str != "0") ? ((operate == 0) ? str : "0") : "0";
	//判断是否已经有一个点号 
	for (i = 0; i <= str.length; i++) {
		//如果有则不再插入 
		if (str.substr(i, 1) == ".") return false;
	}
	str = str + ".";
	document.calculator.screen.value = str;
	operate = 0;
}
//退格 
function del() {
	//获得当前显示数据 
	var str = String(document.calculator.screen.value);
	str = (str != "0") ? str : "";
	str = str.substr(0, str.length - 1);
	str = (str != "") ? str : "0";
	document.calculator.screen.value = str;
}

function pandn() {
	//获得当前显示数据 
	var str = String(document.calculator.screen.value);
	//如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
	str = (str != "0") ? ((operate == 0) ? str : "") : "";
	//判断是否已经有一个-号 
	for (i = 0; i <= str.length; i++) {
		//如果有则不再插入 
		if (str.substr(i, 1) == "-") return false;
	}
	str = "-" + str;
	document.calculator.screen.value = str;
	operate = 0;
}
//清除
function cc() {
	x = 0;
	y = 0;
	result = 0;
	document.calculator.screen.value = "0";
}


//加法
function plus() {
	calculate(); //调用计算函数 
	operate = 1; //更改输入状态 
	calcul = 1; //更改计算状态为加 
}
//减法
function redu() {
	calculate();
	operate = 1;
	calcul = 2;
}
//乘法
function ride() {
	calculate();
	operate = 1;
	calcul = 3;
}
//除法 
function exc() {
	calculate();
	operate = 1;
	calcul = 4;
}
//求余
function leave() {
	calculate();
	operate = 1;
	calcul = 5;
}
//等于 
function equal() {
	calculate();
	operate = 1;
	x = 0;
	y = 0;
	result = 0;
}
// 计算函数
function calculate() {
	y = Number(document.calculator.screen.value);
	if (x != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
		switch (calcul) { //判断要输入状态 
			case 1:
				result = (x + y).toFixed(6).toString();
				break; //计算"+" 
			case 2:
				result = (x - y).toFixed(6).toString();
				break; //计算"-" 
			case 3:
				result = (x * y).toFixed(6).toString();
				break;
			case 4:
				if (y != 0) {
					result = (x / y).toFixed(6).toString();
				} else {
					document.getElementById("prompt").innerHTML = "提示：被除数不能为零！";
					setTimeout(clearnote, 4000)
				}
				break;
			case 5:
				result = (x % y).toFixed(6).toString();
				break;
		}
		//避免重复按键 
		quit = 1;
	} else {
		result = y;
	}
	y = String(result);
	document.calculator.screen.value = y;
	//存储当前值 
	x = result;
}
//清空提示 
function clearnote() {
	document.getElementById("prompt").innerHTML = "";
}