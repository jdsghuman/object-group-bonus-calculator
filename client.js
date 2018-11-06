class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// function processEmployee(emp){
//   return new Bonus(emp);
// }

for(let i = 0; i < employees.length; i++) {
  console.log(employees[i]);

  //caculate bonus percentage
  console.log('calculate bonus: ' + employees[i].name + ' -  ' + calculateBonus(employees[i]));

  // total compensation
  
  //total bonus

  // new Bonus(employeeBonus)

}// end of for loop

class Bonus {
  constructor(){
    this.bounsPercentage = bounsPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  }// endo of constructor
  runName(){
    console.log('print name', this.name);
  }
}// end of class


function calculateBonus(emp){
  let employeeBonus = 0;
  console.log('employee name: ' , emp.name);
  console.log('review rating ', emp.reviewRating);

  if(emp.reviewRating === 2) {
    employeeBonus = 0;
  } else if(emp.reviewRating === 3){
    employeeBonus = .04;
    console.log('.04%');
  } else if(emp.reviewRating === 4){
    employeeBonus =  .06;
    console.log('.06%');
  }else if (emp.reviewRating === 5){
    employeeBonus =  .10;
    console.log('.10%');
  }// end of if conditional

  // 4 digits
  if(emp.employeeNumber.length >= 4){
    employeeBonus = employeeBonus + .05;
  }// end of 4 digths

  // Check if income is > 65,000
  if(emp.annualSalary > 65000){
    employeeBonus = employeeBonus - .01;
  }// end of income

  if(employeeBonus > .13){
    employeeBonus = .13;   
  } else if ( employeeBonus < 0){
   employeeBonus = 0;
  }
  return employeeBonus;
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


