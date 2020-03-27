//Challange 1: Your Age in Days

function ageToDays() {
    var yearBorn = prompt('Whay year you were born?');
    var yearOldInDays = (2020 - yearBorn) * 365;
    document.getElementById('displayAgeInDays').innerHTML = ' You are ' + yearOldInDays + ' old!'
}

function reset() {
    document.getElementById('displayAgeInDays').remove();
}