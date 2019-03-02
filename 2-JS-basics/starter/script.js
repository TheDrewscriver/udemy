/*

BMI = mass/height^2  ( BMI = mass/height x height))








*/

//var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, bmiBoolean;
//
//markMass=80;
//markHeight=168;
//
//johnMass=70;
//johnHeight=180;
//
//
//markBMI = markMass/(markHeight*markHeight);
//
//johnBMI = johnMass/(johnHeight*johnHeight);
//
//bmiBoolean = markBMI > johnBMI;
//
//console.log ("Is Mark's BMI higher than John's? " + bmiBoolean);

//var averageScoreJohn = (89 + 120 + 103) / 3;
//var averageScoreMike = (116 + 94 + 123) / 3;
//var averageScoreMary = (97 + 134 + 105) / 3;
//
//console.log('John:'+averageScoreJohn)
//console.log('Mike:'+averageScoreMike)
//console.log('Mary:'+averageScoreMary)
//switch (true) {
//    case ( averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary):
//            console.log('Winner was John\'s team with a score of :'+averageScoreJohn);
//    case ( averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary):
//            console.log('Winner was Mike\'s team with a score of :'+averageScoreMike);
//    case ( averageScoreMary > averageScoreMike && averageScoreMary > averageScoreJohn):
//            console.log('Winner was Mary\'s team with a score of :'+averageScoreMary);
//   
//        
//}


//var john={
//    name: 'John 1',
//    height: 178, //cm
//    mass: 80,  //kg
//    bmi:0,
//    
//    calculateBMI: function(){
//      this.bmi=this.mass/(this.height*this.height);
//      return this.bmi;
//    }
//}
//    
//
//var mark={
//    name: "Mark 1",
//    height : 178, //cm
//    mass : 80,  //kg
//    bmi:0,
//    calculateBMI: function(){
//      this.bmi=this.mass/(this.height*this.height);
//      return this.bmi;
//    }
//}
//
//
//console.log(john.calculateBMI());
//console.log(john.bmi);
//console.log(mark.calculateBMI());
//console.log(mark.bmi);
//
//switch(true){
//    case(john.bmi > mark.bmi):
//        console.log ("JOhn higher BMI");
//        break;
//    case(mark.bmi > john.bmi):
//        console.log("Mark higher BMI");
//        break;
//    case(mark.bmi == john.bmi):
//        console.log("Same");
//        break;
//}


var billObject = {
    bill: [124, 48, 268, 180, 42],
    tips: [],
    totalBill: [],
    storeTip: function () {

        for (var i = 0; i < this.bill.length; i++) {
            this.tips[i] = this.calculateTip(this.bill[i]);
            this.totalBill[i] = this.bill[i] + this.tips[i];
        }

    },
    calculateTip: function (billValue) {
        switch (true) {
            case billValue <= 50:
                return billValue * 0.2;
            case billValue > 50 && billValue <= 200:
                return billValue * 0.15;
            case billValue > 200:
                return billValue * 0.1;
        }
    }

}


var marksBillObject = {
    bill: [77, 375, 110, 45],
    tips: [],
    totalBill: []
}

function calculateTip(billValue) {
    switch (true) {
        case billValue <= 100:
            return billValue * 0.2;
        case billValue > 100 && billValue <= 300:
            return billValue * 0.10;
        case billValue > 300:
            return billValue * 0.25;
    }
}

console.log("Just before storeTips");
console.log(marksBillObject.bill.length);



function storeTips() {
    for (var i = 0; i < marksBillObject.bill.length; i++) {
        //console.log(">"+marksBillObject.bill[i]);
        marksBillObject.tips[i] = calculateTip(marksBillObject.bill[i]);
        marksBillObject.totalBill[i] = marksBillObject.bill[i] + marksBillObject.tips[i];
    }

}

storeTips();


function calculateAverageTip(tipsArray) {
    var total = 0;
    for (var i = 0; i < tipsArray.length; i++) {
        total += tipsArray[i];
    }
    console.log(total);
    console.log(total / tipsArray.length);
    return total / tipsArray.length;
}


console.log("John's data:");
billObject.storeTip();
console.log("tips" + billObject.tips);
console.log("bill" + billObject.bill);
console.log("total" + billObject.totalBill);

console.log("Marks's data:");
console.log("tips" + marksBillObject.tips);
console.log("bill" + marksBillObject.bill);
console.log("total" + marksBillObject.totalBill);
console.log(calculateAverageTip(marksBillObject.tips))
