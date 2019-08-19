class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greeting(){
		console.log('this is ' + this.name + 'and at age ' + this.age);
	}
}

module.exports = Person;