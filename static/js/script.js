//Challange 1: Your Age in Days

function ageToDays() {
    var yearBorn = prompt('Whay year you were born?');
    var yearOldInDays = (2020 - yearBorn) * 365;
    document.getElementById('displayAgeInDays').innerHTML = ' You are ' + yearOldInDays + ' old!'
}

function reset() {
    document.getElementById('displayAgeInDays').remove();
}

//Challange 2: Generate Cat
function generateCat() {

    var img = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    img.src = 'https://www.letstalkabout.co.uk/wp-content/uploads/2014/01/reaction-gif-sleepy-cute-cat.gif';
    div.appendChild(img);
}