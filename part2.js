/*
Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.

The average cost of fuel is $3 per gallon.

Set up a program to answer the following questions:

How many gallons of fuel will you need for the entire trip? 
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?

Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.

*/

// How many gallons of fuel will you need for the entire trip?
let totalDistance = 1500;
let milesPerGalonAt55mph = 30, milesPerGalonAt60mph = 28, milesPerGalonAt75mph = 23;



const totalGallonsOfFuilFor55mph = totalDistance / milesPerGalonAt55mph;
console.log(
  `the amount of gallons of fuel for the entire trip at 55mph is ${totalGallonsOfFuilFor55mph}`
);
const totalGallonsOfFuilFor60mph = totalDistance / milesPerGalonAt60mph;
console.log(
  `the amount of gallons of fuel for the entire trip at 60mph is ${totalGallonsOfFuilFor60mph}`
);
const totalGallonsOfFuilFor75mph = totalDistance / milesPerGalonAt75mph;
console.log(
  `the amount of gallons of fuel for the entire trip at 75mph is ${totalGallonsOfFuilFor75mph}`
);

let totalBudget = 175;
let fuilPrice = 3;

// Will your budget be enough to cover the fuel expense?
const predictedBudget1 = (totalDistance / milesPerGalonAt55mph) * fuilPrice;
console.log(predictedBudget1);
console.log(`Will the budget be enough: ${totalBudget > predictedBudget1}`);
const predictedBudget2 = (totalDistance / milesPerGalonAt60mph) * fuilPrice;
console.log(predictedBudget2);
console.log(`Will the budget be enough: ${totalBudget > predictedBudget2}`);
const predictedBudget3 = (totalDistance / milesPerGalonAt75mph) * fuilPrice;
console.log(`Will the budget be enough: ${totalBudget > predictedBudget3}`);
console.log(predictedBudget3);


// How long will the trip take, in hours?
let speed1 = 60,
  speed2 = 55,
  speed3 = 75;

let travelingAvgOf55InHours = totalDistance / speed2;
console.log(`The trip will take: ${travelingAvgOf55InHours} hours`);
let travelingAvgOf60InHours = totalDistance / speed1;
console.log(`The trip will take: ${travelingAvgOf60InHours} hours`);
let travelingAvgOf75InHours = totalDistance / speed3;
console.log(`The trip will take: ${travelingAvgOf75InHours} hours`);

console.log(
  `The traveling avg of 55mph in hours is: ${travelingAvgOf55InHours} hours. 
   The traveling avg of 60mph is: ${travelingAvgOf60InHours} hours. 
   The traveling avg of 75mph in hour is: ${travelingAvgOf75InHours} hours`
);

//Which makes the most sense for the trip?
console.log(`The most sense for the trip is:
            60 miles per hour.
            Because it takes ${travelingAvgOf60InHours} 
            and is within our budget which is: ${predictedBudget2}`);