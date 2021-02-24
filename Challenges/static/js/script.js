//Challenge1: Your age in days
// const btnprimary = document.querySelector('button');
// btnprimary.addEventListener('click', event => {

function countAgeIndays() {
    var bYear = prompt("What year were you born?");
    var bMonth = prompt("What month were you born?");
    var bDay = prompt("What day were you born?");
    var daysLived = (new Date() - new Date(bYear, bMonth, bDay)) / (1000 * 60 * 60 * 24);
    daysLived = Math.ceil(daysLived);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + daysLived + ' days old.');
    h1.setAttribute('id', 'daysLived');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function resetAgeDaysCount() {
    document.getElementById('daysLived').remove();
}