module.exports = function zeros(expression) {
  var arr1 = expression.split('*'); // разделение факториалов
  var _countFive = 0, // счетчики двоек
      _countTwo = 0; // счетчики пятерак
  for(var i = 0; i < arr1.length; i++) { 
	var num = parseInt(arr1[i].replace(/!*$/,'')); //
	if(arr1[i].match(/!!$/)) {
		if( num % 2 === 0){
			countFact(num, 2, 2); //в случае если двойной факториал четный
		} else {
			countFact(num, 1, 2); //в случае если двойной факториал нечетный
		}
	} else {
		countFact(num, 1, 1); // в случае одинарного факториала
	}
  }
  
function countFact(num, start, add) {  
    for (var k = start; k <= num; k += add) { // разбиение факториала на отдельные значения
		countTwo(k);
		countFive(k);
	}
}	
	  
function countTwo(par){ // рекурсивная функция определения числа двоек в факториале
	if (par % 2 === 0) {
		 _countTwo++;
		 countTwo(par/2);
	  }
}

function countFive(par) { // рекурсивная функция определения числа пятерак в факториале
	if (par % 5 === 0) {
		 _countFive++;
		 countFive(par/5);
	  }
}
return Math.min(_countFive, _countTwo); // определение количества нулей исходя из наименьшего из множителей
}
