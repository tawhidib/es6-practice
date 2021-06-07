class Parent {
	constructor() {
		this.fatherName = "Nurul Islam";
	}
	getFatherName() {
		return `My Father name is ${this.fatherName}`;
	}
}

class Child extends Parent {
	constructor(son) {
		super();
		this.son = son;
	}
	getSonName() {
		return `My name is ${this.son}`;
	}
}

const tawhid = new Child("md towhidul islam");

console.log(`${tawhid.getSonName()} & ${tawhid.getFatherName()}.`);
