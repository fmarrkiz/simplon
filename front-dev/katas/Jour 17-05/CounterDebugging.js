 // Counter Debugging - easy;

function Counter() {
    let counter = 0;
    
    //quickly, now!
    this.check = function(){
   return counter;
    }
    this.increment =  function() {
      return counter++;
    }
  }
 
  //ou

  function Counter() {
    var counter = 0;  
    this.check = function(){return counter;};
    this.increment = function(){counter++;};
  };


 // /////// Counter debugging (2)

 function Counter() {
    this.value = 0;
  }
  
  Counter.prototype.increase = function() {
    this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset= function() {
    this.value = 0;
  };

  //Ou

  class Counter {
	constructor() {
  	this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}

//ou 

function Counter() {
  this.value = 0;
}

Counter.prototype = {
  increase : function(){this.value++;},
  getValue : function(){ return this.value;},
  reset : function(){this.value = 0;}
};

// Debugging exercise

this.name = function(n){
    if( name = n){
    return name;
      }


      function Warrior(n){
 this.name = function() {
   if (name = n) {
     return name;
   }
 this.toString = function() {
    return `Hi! my name's ${this.name()}`;
  }
}
}
}