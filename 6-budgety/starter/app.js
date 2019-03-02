//////////////////
//Budgety project


//Event handler to the green text
//Gather input from the input field
//Add data to the data structures that store the income/expenses
//Update the UI under income/expenses columns
//Calculate the budget
//Update the income and expense bars

//We need modules

//UI Module  //DATA module //Controller Module

//The data controller

var budgetController = (
    function () {

        var Expense = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;
        };

        var Income = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        Expense.prototype.calculatePercentage = function (totalIncome) {
            if (totalIncome > 0) {
                this.percentage = Math.round((this.value / totalIncome) * 100);
            } else {
                percentage = -1;
            }
        }

        Expense.prototype.getPercentage = function () {
            return this.percentage;
        }

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0.0,
                inc: 0.0
            },
            budget: 0,
            percentage: -1
        };


        var calculateTotal = function (type) {
            var sum = 0;
            data.allItems[type].forEach(function (current) {
                sum += current.value;
            });
            data.totals[type] = sum;
        };

        return {
            addItem: function (type, des, val) {
                var newItem, ID;
                console.log(type + '>');
                //Create the new ID
                if (data.allItems[type].length === 0) {
                    ID = 0;
                } else {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                }

                //Create new item by type
                if (type === 'exp') {
                    newItem = new Expense(ID, des, val);
                } else if (type === 'inc') {
                    newItem = new Income(ID, des, val);
                }
                //Add iy
                data.allItems[type].push(newItem);
                //return new item
                return newItem;
            },

            calculateBudget: function () {
                //                        var data = {
                //                                allItems: {
                //                                    exp: [],
                //                                    inc: [],
                //                                },
                //                                totals: {
                //                                    exp: 0.0,
                //                                    inc: 0.0
                //                                }
                //                                };
                var totalIncome, totalExpenses, percentExpense;

                //Calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');
                //Calculate the budget: income - expenses

                data.budget = data.totals.inc - data.totals.exp;
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);


                //Calculate percentage

                //                data.allItems

            },

            deleteItem: function (type, id) {
                var ids, index;
                ids = data.allItems[type].map(function (currentValue, index, array) {
                    return currentValue.id;
                });
                index = ids[id];
                if (index > -1) {
                    data.allItems[type].splice(index, 1);
                }
            },

            calculatePercentages: function (income) {
                data.allItems.exp.forEach(function (curr) {
                    curr.calculatePercentage(income);
                })
            },


            getPercentages: function () {
                var arrayOfPercentages = data.allItems.exp.map(function (curr) {
                    return curr.getPercentage();
                });
                return arrayOfPercentages;
            },


            getBudget: function () {
                return {
                    budget: data.budget,
                    totalIncome: data.totals.inc,
                    totalExpense: data.totals.exp,
                    percent: data.percentage
                };
            },

            testing: function () {
                console.log(data);
            }

        };
    })();


//UI Module
var UIController = (
    function () {

        var DOMStrings = {
            description: '.add__description',
            value: '.add__value',
            type: '.add__type',
            addButton: '.add__btn',
            incomeContainer: '.income__list',
            expenseContainer: '.expenses__list',
            budgetLabel: '.budget__value',
            incomeValue: '.budget__income--value',
            expenseValue: '.budget__expenses--value',
            expensePercentage: '.budget__expenses--percentage',
            container: '.container',
            expensesPercentageLabel: '.item__percentage',
            monthLabel: '.budget__title--month'
        };
        
        var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
                           ];

        return {

            DOMStrings: DOMStrings,


            getInputData: function () {
                var returnValue = {
                    type: document.querySelector(DOMStrings.type).value,
                    description: document.querySelector(DOMStrings.description).value,
                    value: parseFloat(document.querySelector(DOMStrings.value).value)
                };
                return returnValue;

            },

            addListItem: function (obj, type) {
                var html, newHTML, querySelectorString;
                //Create HTML string with placeholder text
                if (type == 'inc') {
                    querySelectorString = DOMStrings.incomeContainer;
                    html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div></div>';
                } else {
                    querySelectorString = DOMStrings.expenseContainer;
                    html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
                }
                //Replace placeholder text with actual data
                newHTML = html.replace('%id%', obj.id);
                newHTML = newHTML.replace('%description%', obj.description);
                newHTML = newHTML.replace('%value%', this.formatNumber(obj.value,type));
                //Insert HTML into the dom
                document.querySelector(querySelectorString).insertAdjacentHTML('beforeend', newHTML);

            },

            clearFields: function () {
                var fields, fieldsArray;
                fields = document.querySelectorAll(DOMStrings.description + ',' + DOMStrings.value);
                fieldsArray = Array.prototype.slice.call(fields);
                fieldsArray.forEach(function (currentValue, indexNumber, array) {
                    currentValue.value = '';
                });
                document.querySelector(DOMStrings.description).focus();

            },

            displayBudget: function (obj) {

                document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
                document.querySelector(DOMStrings.incomeValue).textContent = this.formatNumber(obj.totalIncome,'inc');
                document.querySelector(DOMStrings.expenseValue).textContent = this.formatNumber( obj.totalExpense,'exp') ;
                if (obj.percent > 0) {
                    document.querySelector(DOMStrings.expensePercentage).textContent = obj.percent + '%';
                } else {
                    document.querySelector(DOMStrings.expensePercentage).textContent = '--';
                }

            },
            deleteListItem: function (itemId) {
                console.log("deleteListItem");
                var element = document.getElementById(itemId);
                element.parentNode.removeChild(element);
            },

            updatePercentages: function (percentages) {
                console.log(percentages);
                var percentageNodes = document.querySelectorAll(DOMStrings.expensesPercentageLabel);
                var updatingPercentages = function (list, callback) {
                    for (var i = 0; i < list.length; i++) {
                        callback(list[i], i);
                    }
                };
                updatingPercentages(percentageNodes, function (current, index) {
                    if (percentages[index] > 0) {
                        current.textContent = percentages[index] + '%';
                    } else {
                        current.textContent = '----'
                    }
                });
            },

            formatNumber: function (num, type) {

                /*
                + or - before the number, 
                exactly 2 decimal points,
                , separating the thousands
            
                2310.4567 -> +2,310.46
                2000 -> +2,000.00
                */
                var sign, integer, decimal;
                num = Math.abs(num);
                num = num.toFixed(2);
                numSplit = num.split('.');
                integer = numSplit[0];
                decimal=numSplit[1];

                var insertStringAtIndex = function (stringToModify, index, charactersToInsert) {
                    console.log(stringToModify);
                    var result = stringToModify.substr(0, index) + charactersToInsert + stringToModify.substr(index, stringToModify.length);
                    return result;
                };


                if (integer.length > 3) {
                    var length = integer.length;
                    for (var i = length - 3; i > 0; i -= 3) {
                        if (i > 0) {
                            integer = insertStringAtIndex(integer, i, ',');
                        }
                    }
                }
                type === 'exp'?sign = '-' : sign = '+';
                    return sign + ' ' + integer + '.' + decimal;
            },
            
            displayMonth: function(){
                var now= new Date();
                var monthNode=document.querySelector(DOMStrings.monthLabel);
                monthNode.innerHTML=monthNames[now.getMonth()];
            },
            
            changeType: function(){
                var elementsToChange=document.querySelectorAll(DOMStrings.type+','+DOMStrings.value+','+DOMStrings.description);
                elementsToChange.forEach(function(element){
                  element.classList.toggle('red-focus');
                });
                
            }
            
        }
    })();

//Controller module
var controller = (function (uiControl, bdgtControl) {

    var DOM = uiControl.DOMStrings;


    var setupEventListeners = function () {
        console.log('Setup event listeners');
        var addButton = document.querySelector(DOM.addButton);
        addButton.addEventListener('click', controlAddItem);
        document.addEventListener('keypress', function (event) {
            //If key is enter, then we call the right information
            if (event.key === 'Enter') {
                console.log('Enter Pressed');
                controlAddItem();
            }
        });
        console.log
        var temp = document.querySelector(DOM.container);
        temp.addEventListener('click', controlDeleteItem);
        var typeButton=document.querySelector(DOM.type);
        typeButton.addEventListener('change', changeType);
        //temp.add

    };
    
    var changeType= function(){
        UIController.changeType();
    }

    var controlDeleteItem = function (event) {
        var itemId, split, type, id;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            split = itemID.split('-');
            type = split[0];
            id = parseInt(split[1]);

            //1. Delete the item from the data structure
            bdgtControl.deleteItem(type, id);
            bdgtControl.testing;
            //2. Delete the item from the UI
            uiControl.deleteListItem(itemID);
            //3. Update budget
            updateBudget();
            //4.Update the percentages
            updatePercentages();
        }
        return id;
    };

    var controlAddItem = function () {
        //Get the field input data
        var inputData = uiControl.getInputData();
        var value = inputData.value;
        var description = inputData.description;
        var type = inputData.type;
        //If either of these fields is empty, we have an error
        if (isNaN(value) || value == 0 || description === '') {
            //Do nothing, and return 
            return;
        }
        //Add item to budget controllers
        var newItem = bdgtControl.addItem(type, description, value);
        //Clear input function
        uiControl.clearFields();
        //Add item to UI
        uiControl.addListItem(newItem, type);
        //Calculate and update the budget
        updateBudget();
        //Update the percentages
        console.log(">> UPDATE PERCENTAGES <<")
        updatePercentages();
    };

    var updateBudget = function () {

        //Calculate the budget
        bdgtControl.calculateBudget();
        //Return the budget
        var budget = bdgtControl.getBudget();
        console.log(budget);
        //Update the UI with the budget
        uiControl.displayBudget(budget);

    };

    var updatePercentages = function () {
        //1. Calculate Percentages
        var income = bdgtControl.getBudget().totalIncome;
        bdgtControl.calculatePercentages(income);
        //Read the budget from the budget controller
        var budget = bdgtControl.getBudget();
        console.log(budget);
        //Update the UI
        console.log("Updating percentages in contoller");
        uiControl.updatePercentages(bdgtControl.getPercentages());
    }


    return {
        init: function () {
            console.log('Application has started');
            uiControl.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpense: 0,
                percent: -1
            });
            setupEventListeners();
            uiControl.displayMonth();
        }
    };
})(UIController, budgetController);

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    controller.init();
});


//if (document.readyState === 'complete') {
//controller.init();
//}