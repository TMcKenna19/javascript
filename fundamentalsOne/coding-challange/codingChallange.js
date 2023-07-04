/**
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 BMI = mass / (height * height)

 Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula(you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.
 
 Test data:
    1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 */

    
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95; 
const markBMI = Math.floor(massMark / (heightMark * heightMark));
const johnBMI = Math.floor(massJohn / (heightJohn * heightJohn));
const markHigherBMI = markBMI > johnBMI;

console.log(`mark ${markBMI}`);
console.log(`john ${johnBMI}`);
console.log(markHigherBMI)
 
           
   



