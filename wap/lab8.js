//1
String.prototype.filter = function (bannedStrArr) {
    let ret = this;
    for (let i = 0; i < bannedStrArr.length;i++){
        ret = ret.replace(bannedStrArr[i],"");
    }
    let regEx = /\s+/g;
    return ret.replace(regEx, ' ');
}

console.log("This house is not nice!".filter(['not']));
//2
Array.prototype.bubbleSort = function () {
    for (let i = this.length-1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (this[j]>this[j+1]){
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this;
}

console.log([3,1,5,0,-4,19].bubbleSort())
//3
function Person(name) {
    this.name = name;
}

function Teacher(name,subject){
    Person.call(this,name);
    this.subject = subject;
}

Teacher.prototype.teach = function(){
    console.log(this.name+" is now teaching "+this.subject);
}

let teacher = new Teacher("Lee","MPP")
teacher.teach();

//4

function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you,\n" +
        "good afternoon, good evening and good night!");
}

Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
}


function Students(name,age,major) {
    Person.call(this,name,age)
    this.major = major
}

Students.prototype.salute = Person.prototype.salute
Students.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am studying ${this.major}.`);
}


function Professor(name,age,department) {
    Person.call(this,name,age)
    this.department = department
}

Professor.prototype.salute = Person.prototype.salute
Professor.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in ${this.department} department.`);
}

let student = new Students("Mahamd",26,"MSCS")
let professor = new Professor("Lee",88,"CS")
student.greeting()
student.salute()
professor.greeting()
professor.salute()
