//////////////
//Lecture: Destructuring

//ES5
//var john = ['John', 26];
//var name = john[0];
//var age= john[1];
//
////ES6
//const [name1,age1]=['John', 26];
//console.log(name1);
//console.log(age1);
//
//const obj={
//    firstName: 'John',
//    lastName: 'Smith'
//}
//
//const{firstName,lastName}=obj;
//
//console.log(firstName);
//console.log(lastName);
//
//const{firstName:a,lastName:b}=obj;
//console.log(a);
//console.log(b);
//
//
//function calcAgeRetirement(year){
//    const age= new Date().getFullYear() - year;
//    console.log(new Date().getFullYear());
//    return [age,65 - age];
//}
//
//const[age12,retirement]= calcAgeRetirement(1990);
//console.log(age12);
//console.log(retirement);


////Lecture:
//Arrays

//const boxes = document.querySelectorAll('.box');

//ES5
//var boxesArray5= Array.prototype.slice.call(boxes);
////
////boxesArray5.forEach(function(curr){
////   curr.style.backgroundColor='dodgerBlue'; 
////});
////
//
////ES6
//const boxesArray6 = Array.from(boxes);
//boxesArray6.forEach(curr=> curr.style.backgroundColor='dodgerBlue' );


//ES5
//for(var i=0; i<boxesArray5.length; i++){
//    if(boxesArray5[i].className==='box blue'){
//        continue;
//    }
//    else{
//        boxesArray5[i].textContent='I changed to blue';
//    }
//}

// for(const cur of boxesArray6){
//     if(cur.className==='box blue'){
//         continue;
//     }
//     else{
//          cur.textContent='I changed to blue';
//     }
// }
//
////ES5
//var ages=[12,17,8,21,14,11];
//
//var fullAge= ages.map(function(curr){
//   return curr>18; 
//});
//
//
//console.log(fullAge);
//console.log(fullAge.indexOf(true));
//console.log(ages[fullAge.indexOf(true)]);
//
////ES6
//var index=ages.findIndex(curr => curr>=18);
//console.log(ages[index]);

///////SPREAD OPERATOR//////s

//function addFourAges(a, b, c, d) {
//    return a + b + c + d;
//}
//
//var sum1 = addFourAges(18, 30, 12, 21);
//console.log(sum1);
//
////ES6
//var ages = [18, 30, 12, 21];
//var sum2 = addFourAges.apply(null, ages);
//console.log(sum2);
//
//const max3 = addFourAges(...ages);
//console.log(max3);

//Rest Parameters

//ES5
//function isFullAge5(){
//    //console.log(arguments);
//    var argsArray=Array.prototype.slice.call(arguments);
//    console.log(argsArray);
//    argsArray.forEach(function(current){
//        console.log((2016-current)>=18)
//    })
//}


//isFullAge5(1990,1999,1965,2017,1987);
//
////ES6
//
//function isFullAges6(age,...years){
//    years.forEach(function(current){
//        console.log((2016-current)>=age)
//    })
//}
//
//isFullAges6(21,1990,1999,1965,2017,1987);



//Default parameters

//ES5 (a workaround)

//function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//    lastName === undefined ? lastName = 'Smith' : lastname = lastname;
//    nationality === undefined ? nationality = 'American' : nationality = nationality;
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//
//}




//ES6

//function SmithPerson(firstName, yearOfBirth, lastName='Smith', nationality='American') {
//
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//
//}
//
//var john=new SmithPerson('John',1990);
//
//////////////////////////////
/////ES 6 Maps (Hashmaps basically)
//
//const question= new Map();
//question.set('Question', 'What is the official name of the latest major javascript version');
//
//question.set(1,'ES5');
//question.set(2,'ES6');
//question.set(3,'ES 2015');
//question.set(4,'ES 7');
//question.set('correct', 3);
//question.set(true, 'Correct Answer');
//question.set(false, 'Wrong Answer');
//
//if(question.has(4)){
//    console.log(question.get(4));
//}
//
////question.forEach((value,key) => console.log(`This is ${key} and value is ${value}`));
//
//for( let [key,value] of question.entries()){
//    console.log(`This is ${key} and value is ${value}`);
//}


//////////
//Classes

//ES5 function constructors instead of classes

//var Person5 = function(name, yearOfBirth,job){
//    this.name=name;
//    this.yearOfBirth= yearOfBirth;
//    this.job=job;
//    
//}
//
//Person5.prototype.calculateAge= function(){
//    var d = new Date();
//    console.log(d.getFullYear() - this.yearOfBirth);
//}
//
//var john5= new Person5('John Smith', 1990, 'Teacher');
//john5.calculateAge();



//class Person6 {
//    constructor(name, yearOfBirth, job) {
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//
//    calculateAge() {
//        var d = new Date();
//        console.log(d.getFullYear() - this.yearOfBirth);
//    }
//    
//    static greeting(){
//        console.log('Hey There');
//    }
//}
//
//var john6= new Person6('John6',1990,'Teacher');
//john6.calculateAge();
//
//Person6.greeting();
//
//class Athlete6 extends Person6{
//    constructor(name, yearOfBirth, job, olympicGames, medals){
//        super(name,yearOfBirth,job);
//        this.olympicGames=olympicGames;
//        this.medals=medals;
//    }
//    
//    wonMedals(){
//        this.medals++;
//        console.log(medals);
//    }
//}
//
//var crank= new Athlete6('john',1999,'swimmer',3,10);

class Structure {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    getYear() {
        console.log(this.year);
        return this.year;
    }

    getName() {
        return this.name;
    }
}

class Park extends Structure {
    constructor(name, year, numberOfTrees, parkArea) {
        console.log(name+" "+year)
        super(name, year);
        this.numberOfTrees=numberOfTrees;
        this.parkArea=parkArea;
    }
    
    getYear(){
        return super.getYear();
    }
    
    getTreeDensity(){ return this.numberOfTrees/this.parkArea} ;
}

class Street extends Structure{
    constructor(name, year,size='normal'){
        console.log(name+" "+year)
        super(name,year);
        this.size=size;
    }
    
    
    
}

let parkOne = new Park('ParkOne', 1948, 1000,5);
const parkTwo = new Park('ParkTwo', 1952, 10000,10);
const parkThree = new Park('ParkThree', 1954, 5000,2);


const streetOne = new Street('StreetOne', 1992, 'tiny');
const streetTwo = new Street('StreetTwo',1993, 'small');
const streetThree = new Street('StreetThree',1994, 'huge' );
const streetFour = new Street('StreetFour',1995, );

let parks= [parkOne, parkTwo, parkThree];
let streets= [streetOne, streetTwo, streetThree];

let parksReport= (parks) =>{
    let totalParksAge=0
    parks.forEach(curr => {
        let currentYear = new Date().getFullYear();
        totalParksAge +=(currentYear - curr.getYear());
        
    });
    
    console.log(`Our ${parks.length} parks have an average age of ${Math.round(totalParksAge/parks.length,2)}`);
    
};

parksReport(parks);