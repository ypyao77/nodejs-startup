class Base {
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }
    sayHello() { 
        console.log('Hello ' + this.name); 
    };
} 

class Sub extends Base { 
    constructor(name, age) {
        super(name, age)
        this.name = 'sub-' + this.name; 
    }
} 

var objBase = new Base("base-", 10); 
objBase.sayHello(); 
console.log(objBase); 

var objSub = new Sub("none", 20); 
objSub.sayHello(); 
console.log(objSub); 