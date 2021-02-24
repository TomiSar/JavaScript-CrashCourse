//#region Conditionals, if-else, switch statements
//18-35 is my target demo less than 18 not my audience
var age = prompt("How old are you?")

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}


//Switch statements
// diffentiate between weekday and weekend
// day 0 = Sunday, day 6 = Saturday, day 5 = Friday --> weekend
// day 1-4 = Monday-Thursday --> weekend
switch (6) {
    case 0:
    case 5:
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
        break;
}
console.log(text);

//#endregion