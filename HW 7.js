//Занятие №7
//Задание №1
/*
var user = {
  name: 'Tom',
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
//1
var tomFormat = function(beginMsg, endMsg) { format.call(user, beginMsg, endMsg) };

//2
//var tomFormat = format.bind(user);


tomFormat('<<<', '>>>');
*/

//Задание №2
/*
function mul (a, b) {
  return a * b;
}

var doubleMul = mul.bind(null, 2);
var qudraMul = mul.bind(null, 4);

console.log(doubleMul(5));
console.log(qudraMul(5));
*/

//Задание №3
/*
function bind(func, context) {
  func.call(context);
}

function func1() {
  console.log(this.name + ' - ' + this.age);
}

var user = {
  name: 'Tom',
  age: 20
};

var f = bind;
f(func1, user);
*/

//Задание №4
//1
/*
function AudioPlayer(volume) {
  var _soundVolume = 0;

  function volumeValid(volume) {
    if (volume >= 0 && volume <= 100 ) {
      _soundVolume = volume;
    }
  }
  volumeValid(volume);

  this.getVolume = function () {
    return _soundVolume;
  } ;
  this.setVolume = function (volume) {
    volumeValid(volume);
  };
}
*/
//2
/*
function AudioPlayer(volume) {
  var _soundVolume = 0;

  function volumeValid(volume) {
    if (volume >= 0 && volume <= 100 ) {
      _soundVolume = volume;
    }
  }
  volumeValid(volume);

  this.volume = function (volume) {
    if (volume === undefined) {
      return _soundVolume;
    }
    volumeValid(volume);
  }
}
*/

//Задание №5
/*
function Summator() {
  var self = this;
  var _firstNumber = 0;
  var _secondNumber = 0;

  this.result = 0;

  function calc(_firstNumber, _secondNumber) {
    return self.result = _firstNumber + _secondNumber;
  }

  this.firstNumber = function (number) {
    if (typeof number === 'number') {
      _firstNumber = number;
      return calc(_firstNumber, _secondNumber)
    }
    return _firstNumber;
  }

  this.secondNumber = function (number) {
    if (typeof number === 'number') {
      _secondNumber = number;
      return calc(_firstNumber, _secondNumber);
    }
    return _secondNumber;
  }
}

var x1 = new Summator();
console.log(x1.firstNumber(3));
console.log(x1.secondNumber(7));
console.log(x1.result);
console.log(x1.firstNumber());
console.log(x1.secondNumber());
*/

//Задание №6
/*
var perimeter = (function() {
  var a;
  var b;
  function operation() {
    return (a + b) * 2;
  }

  return {
    setA: function(value) {
      if (typeof value === 'number' && value > 0) {
        a = value;
      }
    },
    setB: function(value) {
      if (typeof value === 'number' && value > 0) {
        b = value;
      }
    },
    operation: function() {
      return operation();
    }
  }
}());

var area = (function(){
  var a;
  var b;
  function operation () {
    return a * b;
  }

  return {
    setA: function(value) {
      if (typeof value === 'number' && value > 0) {
        a = value;
      }
    },

    setB: function(value) {
      if (typeof value === 'number' && value > 0) {
        b = value;
      }
    },
    operation: function() {
      return operation();
    }
  }

}());

perimeter.setA(3);
perimeter.setB(4);
console.log(perimeter.operation());

area.setA(5);
area.setB(7);
console.log(area.operation());
*/
