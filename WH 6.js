//ЗАНЯТИЕ №6

//Задание №1
/*
var calculator = {
  read: function () {
    this.a = Number(prompt('a?', '0'));
    this.b = Number(prompt('b?', '0'));
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/

//Задание №2
/*
function createMP3(model, format) {
  return {
    model: model,
    format: format,
    playOn: function () {
      console.log(this.model + ' играет музыку в формате ' + this.format);
    }
  };
}

var sony = createMP3('Sony', 'MP3');
sony.playOn();
*/

//Задание №3
/*
function getMaxSalary(obj) {
  var maxSal = 0
  for( var key in obj) {
    if (obj[key] > maxSal){
      maxSal = obj[key];
    }
  }

  console.log('Самая большая зарплата составляет ' + maxSal);
}

var salaries = {
  John: 100,
  Bill: 300,
  Mike: 250
};

var salary = {
  John: 100,
  Bill: 300,
  Mike: 250,
  Ira: 1000
};

getMaxSalary(salary);
getMaxSalary(salaries);
*/

//Задание №4
/*
function CreateMP3(model, format) {
  this.model = model;
  this.format = format;
  this.playOn = function () {
    console.log(this.model + ' играет музыку в формате ' + this.format);
  };
}
var sony = new CreateMP3('Sony', 'MP3');
sony.playOn();
*/

//Задание №5
/*
function mul() {
  var mul = 1;
  var x = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      mul *= arguments[i];
      x++;
    }
  }

  if (x > 0) {
    return mul;
  } else {
    return 0;
  }

}

console.log(mul(1, 'str', 2, 3, true));
console.log(mul(null, 'str', false, true));
*/
//Задание №6
/*
var country = {
  name: 'Украина',
  language: 'украинский',
  capital: {
    name: 'Киев',
    population: 2907817,
    area: 847.66
  }
};


function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

format.call(country, '<', '>');
format.apply(country, ['[', ']']);
format.call(country.capital, '"', '"');
format.apply(country.capital, ['', '']);
*/
