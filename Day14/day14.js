// Day 14: Classes

// Tasks/Activities:

// Activity 1: Class Definition

// « Task 1: Define a class Person with properties nane and age , and a method to return a greeting message, Create an instance of the class and log the greeting message.

class person {
    constructor(name, age) {
        this.name= name;
        this.age= age;
    }

    msg() {
        return `My name is ${this.name}, my age is ${this.age}`;
    }
    update(newAge) {
        this.age = newAge;
        console.log(`new age is : ${this.years}`);
    }
}

const human = new person('Yashika', 19);
console.log(person.msg());              // Output: My name is Yashika, my age is 19

// + Task 2: Add a method to the Person class that updates the age property and logs the updated age.

person.update(20);
console.log(person.msg);                // Output: My name is Yashika, my age is 19

// Activity 2: Class Inheritance

// + Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an fnstance of the Student class and log the

class Student extends person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    msg() {
        return `My name is ${this.name}, my age is ${this.years} and my ID is ${this.id}.`;
    }

    getId() {
        return this.id;
    }
}

const student = new Student('Yash', 18, 9077);
console.log(student.getId());                       // Output: 9077

// + Task 4 erie the greeting method n the Student clas to include the student I nthe message. Log the overridden greeting mse.

console.log(student.msg);

// Activity 3: Static Methods and Properties

// + Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an fnstance of the class and log the message.

class stPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    msg() {
        return `My name is ${this.name} and my age is ${this.age}`;
    }

    static welcome() {
        return 'Welcome!';
    }
}

console.log(stPerson.welcome());   // Output: Welcome!

// + Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class stud extends stPerson {
    static count= 0;

    constructor(name, age, id) {
        super(name, age);
        this.id= id;
        stud.count++;
    }

    msg() {
        return `My name is ${this.name}, my age is ${this.age} and my ID is ${this.id}.`;
    }

    getId() {
        return this.id;
    }
}

const stud1 = new stPerson('Vansh', 18, '1234');
const stud2 = new stPerson('Raj', 17, '9807');
const stud3 = new stPerson('Ram', 20, '9806');
console.log(stud.count);                         // Output: 3


// Activity 4: Getters and Setters

// « Task 7: Add a getter method to the Person class to return the full name (assume a firstName and LastName property). Create an instance and log the full name using the getter.

class Info {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const info = new Info('Payal', 'Goyal');
console.log(info.fullName);                             // Output: Payal Goyal


// + Task 8: Add a setter method to the Person class to update the name properties ( irstNane and \astNane). Update the name using the setter and log the updated full name.

info.fullName = 'Japleen Khurana';
console.log(info.fullName);                             // Output: Japleen Khurana

// Activity 5: Private Fields (Optional)

// + Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw maney. Ensure that the balance can only be updated through these methods.

class Account {
    #amount = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#amount += amount;
            this.showAmount();
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#amount) {
            this.#amount -= amount;
            this.showAmount();
        }
    }

    showAmount() {
        console.log(`Current balance: ${this.#amount}`);
    }
}
// + Task 10; Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

let acc1 =new Account(1500);
acc1.deposit(5000);
acc1.withdraw(100);

console.log("Current balance = Rs.",acc1.showAmount());             // Output: 6400

acc1.withdraw(1000);                            
console.log("Current balance = Rs.",acc1.showAmount());             // Output: 5400